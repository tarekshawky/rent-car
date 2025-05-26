import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {prisma} from "@/lib/prisma"
import { compare } from "bcryptjs"

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing email or password")
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                })

                if (!user || !user.password) {
                    throw new Error("User not found")
                }

                const isValid = await compare(credentials.password, user.password)

                if (!isValid) {
                    throw new Error("Invalid password")
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    image: user.image || null,
                }
            },
        }),
    ],
    session: {
        strategy: "jwt", // Use 'jwt' strategy for credentials
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/admin/login",
    },
}

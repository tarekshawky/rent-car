
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import Link from "next/link";
import Image from "next/image";

export default async function ProfilePage() {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        redirect("/admin/login")
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
        },
    })

    return (
        <div>
            <Link
                href="/dashboard/account/edit"
                className="inline-block mt-4 text-blue-600 hover:underline"
            >
                Edit Profile
            </Link>
            <h1>Profile</h1>
            <p>Name: {user?.name || "No name set"}</p>
            <p>Email: {user?.email}</p>
            {user?.image && <Image src={user.image} alt="Profile" />}
        </div>
    )
}

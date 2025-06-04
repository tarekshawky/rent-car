import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import {prisma} from "@/lib/prisma";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { name, email } = await req.json()

    try {
        await prisma.user.update({
            where: { email: session.user.email! },
            data: { name, email },
        })

        return NextResponse.json({ message: "Account updated successfully" })
    } catch (error) {
        return NextResponse.json({error, message: "Update failed" }, { status: 500 })
    }
}

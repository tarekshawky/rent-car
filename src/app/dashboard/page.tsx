import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import LogoutButton from "@/components/LogoutButton";


export default async function Dashboard(){
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/admin")
    }
    return (
        <div className="text-black">
            Dashboard

            Welcome, Admin: {session.user?.email}
           <LogoutButton/>
        </div>
    )
}
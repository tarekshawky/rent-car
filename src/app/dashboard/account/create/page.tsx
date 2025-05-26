import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import CreateNewUser from "@/components/CreateNewUser";

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/admin/login");
    }

    return <CreateNewUser/>
}
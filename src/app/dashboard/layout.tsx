
import type { ReactNode } from 'react'
import SideBar from "@/components/SideBar";
import Providers from "@/components/Providers";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen bg-gray-100">
            <SideBar/>
            <div className="flex flex-col flex-1">
                <main className="flex-1 p-6 overflow-y-auto">
                    <Providers>
                        {children}
                    </Providers>
                </main>
            </div>
        </div>
    )
}

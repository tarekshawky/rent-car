import Link from "next/link";

export default function SideBar(){
    return(
        <div className="flex h-screen flex-col justify-between border-e border-gray-100 bg-white">
            <div className="px-4 py-6">
    <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
      Logo
    </span>

                <ul className="mt-6 space-y-1">
                    <li>
                        <Link
                            href="/dashboard"
                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/cars"
                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            All Cars
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/account"
                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            My Account
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/account/create"
                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                           Create New User
                        </Link>
                    </li>

                </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="size-10 rounded-full object-cover"
                    />

                    <div>
                        <p className="text-xs">
                            <strong className="block font-medium">Eric Frusciante</strong>

                            <span> eric@frusciante.com </span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}
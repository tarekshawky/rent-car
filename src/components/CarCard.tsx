import Link from "next/link";
import {MoveRight} from "lucide-react";

export default function CarCard () {
    return (
        <section className="container my-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold">Choose the car that
                        suits you
                    </h2>
                </div>
                <div className="flex items-center gap-2">
                    <Link href="#">View All</Link>
                    <MoveRight />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
                <Link href="#" className="block border rounded-lg p-4 shadow-lg bg-[#FAFAFA]  shadow-indigo-100">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl className="flex items-center justify-between">
                            <div>
                                <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                            </div>
                            <div>
                                <dd className="text-sm font-semibold text-[#5937E0]">$240,000</dd>
                            </div>
                        </dl>

                        <div className="mt-6 flex items-center gap-8 text-xs">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="size-4 text-indigo-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                    />
                                </svg>

                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500">Automat</p>
                                </div>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="size-4 text-indigo-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>

                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500">PB 95</p>
                                </div>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                <svg
                                    className="size-4 text-indigo-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>

                                <div className="mt-1.5 sm:mt-0">
                                    <p className="text-gray-500">Air Conditioner</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="w-full bg-[#5937E0] text-white py-2 rounded-md font-semibold">View Details</button>
                        </div>
                    </div>
                </Link>

            </div>
        </section>
    )
}
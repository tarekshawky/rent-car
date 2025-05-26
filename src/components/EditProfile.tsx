"use client"

import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

export default function EditProfile() {
    const { data: session, status } = useSession()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        if (session?.user) {
            setName(session.user.name || "")
            setEmail(session.user.email || "")
        }
    }, [session])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch("/api/account/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
        })

        const data = await res.json()
        setMessage(data.message)
    }

    if (status === "loading") return <p>Loading...</p>
    if (status === "unauthenticated") {
        if (typeof window !== "undefined") {
            window.location.href = "/auth/signin"
        }
        return null
    }

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Edit Account</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="w-full border px-3 py-2"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="w-full border px-3 py-2"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Update Account
                </button>
                {message && <p className="text-green-600">{message}</p>}
            </form>
        </div>
    )
}

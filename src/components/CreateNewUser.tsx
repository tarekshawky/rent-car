"use client";

import { useState } from "react";

export default function CreateNewUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch("/api/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, name }),
        });
        let data
        try {
           data = await res.json();
        } catch (err) {
            console.error("Failed to parse JSON:", err);
            setMessage("Unexpected server response");
            return;
        }

        if (res.ok) {
            setMessage("Admin created successfully!");
            setEmail("");
            setPassword("");
            setName("");
        } else {
            setMessage(data.error || "Failed to create admin");
        }
    }

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow rounded mt-8">
            <h2 className="text-xl font-bold mb-4">Create New Admin</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border px-3 py-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full border px-3 py-2"
                />
                <input
                    type="text"
                    placeholder="Name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border px-3 py-2"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Create Admin
                </button>
            </form>
            {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
    );
}

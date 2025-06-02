'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
interface Hero {
    id: number;
    title:string,
    description:string,
    image:string,
    url:string,
}
export default function HeroSection(){
    const [heroSection, setHeroSection] = useState<Hero[]>([]);
    const [form,setForm] = useState({
        title:"",
        description:"",
        image:"",
        url:""
    })
    useEffect(() => {
        fetchHero();
    }, []);
    const fetchHero = async () => {
        try {
            const res = await fetch('/api/hero-section');
            const data = await res.json();
            setHeroSection(data);
        } catch (err) {
            console.error('Failed to fetch hero sections:', err);
        }
    }
    const createHeroSection =  async (e:React.FormEvent) => {
        e.preventDefault();
        await fetch("/api/hero-section",{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                title:form.title,
                description:form.description,
                image:form.image,
                url:form.url
            })

        })
        setForm({title:"",description:"",image:"",url:""})
        fetchHero()
    }
    return (
        <section>
            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Hero Section</h1>

                <form onSubmit={createHeroSection} className="space-y-4 mb-8">
                    <input
                        type="text"
                        placeholder="Title"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        className="border px-3 py-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        className="border px-3 py-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Url"
                        value={form.url}
                        onChange={(e) => setForm({ ...form, url: e.target.value })}
                        className="border px-3 py-2 w-full"
                        required
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setForm({ ...form, image: reader.result as string });
                                };
                                reader.readAsDataURL(file); // Convert image to base64
                            }
                        }}
                        className="border px-3 py-2 w-full"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Create Hero Section
                    </button>
                </form>

                <h2 className="text-xl font-semibold mb-2">Hero Section Table</h2>
                <table className="w-full border text-left">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">image</th>
                        <th className="p-2 border">Title</th>
                        <th className="p-2 border">Description</th>
                        <th className="p-2 border">url</th>
                        <th className="p-2 border">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {heroSection.map((h) => (
                        <tr key={h.id}>
                            <td className="p-2 border">{h.id}</td>
                            <td className="p-2 border">
                                {h.image ? (
                                    <Image
                                        src={h.image}
                                        alt={h.title}
                                        className="w-16 h-auto rounded object-cover"
                                        width={25}
                                        height={25}
                                    />
                                ) : (
                                    'No Image'
                                )}
                            </td>
                            <td className="p-2 border">{h.title}</td>
                            <td className="p-2 border">{h.description}</td>
                            <td className="p-2 border">{h.url}</td>
                            <td className="p-2 border flex items-center gap-2">
                                <button className="bg-green-300 rounded-md p-2">Edit</button>
                                <button className="bg-red-800 p-2 rounded-md text-white">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
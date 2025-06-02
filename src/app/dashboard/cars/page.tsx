'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";

interface Car {
    id: number;
    brand: string;
    pricePerDay: number;
    pricePerHour: number;
    image: string;
    available: boolean;
    createdAt: string;
}

export default function CarsPage() {
    const [cars, setCars] = useState<Car[]>([]);
    const [form, setForm] = useState({
        brand: '',
        pricePerDay: '',
        pricePerHour: '',
        image: '',
    });

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        const res = await fetch('/api/cars');
        const data = await res.json();
        setCars(data);
    };

    const createCar = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/cars', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                brand: form.brand,
                pricePerDay: parseFloat(form.pricePerDay),
                pricePerHour: parseFloat(form.pricePerHour),
                image: form.image,
            }),
        });
        setForm({ brand: '', pricePerDay: '', pricePerHour:'', image: '' });
        fetchCars(); // Refresh the car list
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Car Management</h1>

            <form onSubmit={createCar} className="space-y-4 mb-8">
                <input
                    type="text"
                    placeholder="Brand"
                    value={form.brand}
                    onChange={(e) => setForm({ ...form, brand: e.target.value })}
                    className="border px-3 py-2 w-full"
                    required
                />
                <input
                    type="number"
                    placeholder="pricePerDay"
                    value={form.pricePerDay}
                    onChange={(e) => setForm({ ...form, pricePerDay: e.target.value })}
                    className="border px-3 py-2 w-full"
                    required
                />
                <input
                    type="number"
                    placeholder="pricePerHour"
                    value={form.pricePerHour}
                    onChange={(e) => setForm({ ...form, pricePerHour: e.target.value })}
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
                    Add Car
                </button>
            </form>

            <h2 className="text-xl font-semibold mb-2">Cars Table</h2>
            <table className="w-full border text-left">
                <thead>
                <tr className="bg-gray-200">
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">Image</th>
                    <th className="p-2 border">Brand</th>
                    <th className="p-2 border">PricePerDay</th>
                    <th className="p-2 border">PricePerHour</th>
                    <th className="p-2 border">Available</th>
                    <th className="p-2 border">Action</th>
                </tr>
                </thead>
                <tbody>
                {cars.map((car) => (
                    <tr key={car.id}>
                        <td className="p-2 border">{car.id}</td>
                        <td className="p-2 border">
                            {car.image ? (
                                <Image
                                    src={car.image}
                                    alt={car.brand}
                                    className="w-16 h-auto rounded object-cover"
                                    width={25}
                                    height={25}
                                />
                            ) : (
                                'No Image'
                            )}
                        </td>
                        <td className="p-2 border">{car.brand}</td>
                        <td className="p-2 border">${car.pricePerDay}</td>
                        <td className="p-2 border">${car.pricePerHour}</td>
                        <td className="p-2 border">{car.available ? 'Yes' : 'No'}</td>
                        <td className="p-2 border flex items-center gap-2">
                            <button className="bg-green-300 rounded-md p-2">Edit</button>
                            <button className="bg-red-800 p-2 rounded-md text-white">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

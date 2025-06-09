import Image from "next/image";
import {getCars} from "@/lib/actions";
import {CarForm} from "@/components/CarForm";
import Link from "next/link";
export const dynamic = "force-dynamic";

type Props = {
    searchParams?: Promise<{ page?: string }>;
};
export default async function CarsPage({ searchParams }: Props) {
    const params = await searchParams;
    const currentPage =  parseInt(params?.page || "1", 10);
    const page = isNaN(currentPage) || currentPage < 1 ? 1 : currentPage;
    const limit = 5;
    const offset = (page - 1) * limit;
    const { cars, total } = await getCars(limit, offset);
    const totalPages = Math.ceil(total / limit);
    // const cars = await getCars(5, 0)
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Car Management</h1>

            <CarForm />
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
            <div className="flex justify-center mt-6 gap-4">
                {Array.from({ length: totalPages }, (_, i) => (
                    <Link
                        key={i}
                        href={`?page=${i + 1}`}
                        className={`px-3 py-1 rounded border ${
                            page === i + 1
                                ? "bg-blue-500 text-white"
                                : "bg-white text-blue-500"
                        }`}
                    >
                        {i + 1}
                    </Link>
                ))}
            </div>
        </div>
    );
}

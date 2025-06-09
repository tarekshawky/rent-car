'use client';

import { useActionState } from "react";
import {createCar} from "@/lib/actions";

const initialState = { message: "", status: "" };

export function CarForm() {
    const [state, formAction] = useActionState(createCar, initialState);

    return (
        <form action={formAction} className="space-y-4 mb-8">
            <input
                name="brand"
                type="text"
                placeholder="Brand"
                className="border px-3 py-2 w-full"
                required
            />
            <input
                name="pricePerDay"
                type="number"
                placeholder="pricePerDay"
                className="border px-3 py-2 w-full"
                required
            />
            <input
                name="pricePerHour"
                type="number"
                placeholder="pricePerHour"
                className="border px-3 py-2 w-full"
                required
            />
            <input
                name="image"
                type="file"
                accept="image/*"
                className="border px-3 py-2 w-full"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Add Car
            </button>

            {state?.message && <p className="text-green-600">{state.message}</p>}
        </form>
    );
}

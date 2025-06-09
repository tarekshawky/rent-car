'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type State = {
    message: string;
    status: string;
};
export async function getCars(limit = 5, offset = 0) {
    const cars = await prisma.car.findMany({
        orderBy: { id: 'desc' },
        take: limit,
        skip: offset,
    });
    const total = await prisma.car.count();
    return {cars, total};
}

export async function createCar(
    prevState: State,
    formData: FormData
) {
    try {
        const brand = formData.get("brand") as string;
        const pricePerDay = Number(formData.get("pricePerDay"));
        const pricePerHour = Number(formData.get("pricePerHour"));
        const imageFile = formData.get("image") as File;

        if (!brand || isNaN(pricePerDay) || isNaN(pricePerHour)) {
            return { message: "All fields are required.", status: "error" };
        }

        let image = "";

        if (imageFile && typeof imageFile === "object" && imageFile.size > 0) {
            const bytes = await imageFile.arrayBuffer();
            const buffer = Buffer.from(bytes);
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const fs = require("fs");
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const path = require("path");

            const fileName = `${Date.now()}-${imageFile.name}`;
            const uploadDir = path.join(process.cwd(), "public/uploads");

            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, buffer);

            image = `/uploads/${fileName}`;
        }

        await prisma.car.create({
            data: {
                brand,
                pricePerDay,
                pricePerHour,
                image,
            },
        });

        revalidatePath("/dashboard/cars");
        return { message: "Car added successfully!", status: "success" };

    } catch (error) {
        console.error("createCar error:", error);
        return { message: "Failed to add car.", status: "error" };
    }
}

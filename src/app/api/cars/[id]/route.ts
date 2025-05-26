import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const car = await prisma.car.findUnique({ where: { id: Number(params.id) } });
    return NextResponse.json(car);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const data = await req.json();
    const updatedCar = await prisma.car.update({
        where: { id: Number(params.id) },
        data,
    });
    return NextResponse.json(updatedCar);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    await prisma.car.delete({ where: { id: Number(params.id) } });
    return NextResponse.json({ message: 'Car deleted' });
}

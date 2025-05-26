// import { prisma } from '@/lib/prisma'
// import nodemailer from 'nodemailer'
//
// export async function POST(req: Request) {
//     const data = await req.json()
//
//     await prisma.reservation.create({ data })
//
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.ADMIN_EMAIL,
//             pass: process.env.EMAIL_PASS,
//         },
//     })
//
//     const adminMail = {
//         from: process.env.ADMIN_EMAIL,
//         to: process.env.ADMIN_EMAIL,
//         subject: 'New Reservation',
//         text: `Reservation from ${data.name}, Car ID: ${data.carId}`,
//     }
//
//     const userMail = {
//         from: process.env.ADMIN_EMAIL,
//         to: data.email,
//         subject: 'Reservation Confirmed',
//         text: `Thank you ${data.name}, your reservation is confirmed.`,
//     }
//
//     await transporter.sendMail(adminMail)
//     await transporter.sendMail(userMail)
//
//     return Response.json({ message: 'Reservation received' })
// }


import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    const data = await req.json();
    const reservation = await prisma.reservation.create({
        data,
    });
    return NextResponse.json(reservation);
}

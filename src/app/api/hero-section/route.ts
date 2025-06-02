import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(){
    const hero = await prisma.heroSection.findMany()
    return NextResponse.json(hero)
}
export async function POST(req: Request){
    const data = await req.json()
    const heroSection = await prisma.heroSection.create({
        data,
    })
    return NextResponse.json(heroSection)
}
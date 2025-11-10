import { auth } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = await params;
    try {
        const product = await prisma.product.findUnique({ where: { id: id } });
        return new NextResponse(JSON.stringify(product), { status: 200 })
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 })
    }
}

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = await params;
    const session = await auth()

    if (session?.user.isAdmin) {
        try {
            await prisma.product.delete({ where: { id: id } });
            return new NextResponse(JSON.stringify("Product deleted"), { status: 200 })
        } catch (error) {
            console.log(error)
            return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 })
        }
    } else {
        return new NextResponse(JSON.stringify({ message: "You are not authenticated!" }), { status: 401 })
    }
}
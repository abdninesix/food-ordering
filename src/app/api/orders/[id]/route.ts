import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    const body = await req.json();

    try {
        await prisma.orders.update({
            where: { id: id },
            data: { status: body }
        })
        return new NextResponse(JSON.stringify({ message: "Order status updated!" }), { status: 200 })
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 })
    }
}
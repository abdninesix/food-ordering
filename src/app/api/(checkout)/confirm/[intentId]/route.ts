import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const PUT = async ({ params }: { params: { intentId: string } }) => {

    const { intentId } = await params

    try {
        await prisma.orders.update({ where: { intent_id: intentId }, data: { status: "Being prepared!" } })
        return new NextResponse(JSON.stringify({ message: "Order confirmed!" }), { status: 200 })
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 })
    }
}
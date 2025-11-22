import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECTRET_KEY)

export const POST = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const order = await prisma.orders.findUnique({ where: { id: id } });

    if (order) {

    } else {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 404 })
    }
}
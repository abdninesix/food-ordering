import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECTRET_KEY)

export const POST = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const order = await prisma.orders.findUnique({ where: { id: id } });

    if (order) {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 100 * 100,
            currency: "pkr",
            automatic_payment_methods: { enabled: true },
        });

        await prisma.orders.update({ where: { id:id }, data: { intent_id: paymentIntent.id } });

        return new NextResponse(JSON.stringify({ clientSecret: paymentIntent.client_secret }), { status: 200 })
    } else {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 404 })
    }
}
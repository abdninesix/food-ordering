import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async (
    req: Request,
    { params }: { params: { orderId: string } }
) => {
    const { orderId } = params;

    const order = await prisma.orders.findUnique({
        where: { id: orderId },
    });

    if (order) {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 100 * 100,
            currency: "pkr",
            automatic_payment_methods: { enabled: true },
        });

        await prisma.orders.update({
            where: { id: orderId },
            data: { intent_id: paymentIntent.id },
        });

        return NextResponse.json(
            { clientSecret: paymentIntent.client_secret },
            { status: 200 }
        );
    } else {
        return NextResponse.json(
            { message: "Something went wrong!" },
            { status: 404 }
        );
    }
};

import prisma from "@/utils/connect";

const stripe = require("stripe")(process.env.STRIPE_SECTRET_KEY)

export const POST = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const order = await prisma.orders.findUnique({ where: { id: id } });
}
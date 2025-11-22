const stripe = require("stripe")(process.env.STRIPE_SECTRET_KEY)

export const POST = async ({ params }: { params: { id: string } }) => {
    
}
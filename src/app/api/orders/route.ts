import { auth } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {

    const session = await auth()

    if (session) {
        try {
            if (session.user.) {}
            return new NextResponse(JSON.stringify(orders), { status: 200 })
        } catch (error) {
            console.log(error)
            return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
        }
    } else {
        return new NextResponse(JSON.stringify({ message: "You are not authenticated" }), { status: 401 })

    }
}
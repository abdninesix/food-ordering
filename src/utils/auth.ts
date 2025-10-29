import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { User } from "next-auth"
import Google from "next-auth/providers/google"
import prisma from "./connect"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
})
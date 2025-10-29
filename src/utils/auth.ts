import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { User } from "next-auth"
import Google from "next-auth/providers/google"
import prisma from "./connect"

declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: boolean
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: boolean
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks: {
    async session({ token, session }) {
      if (token) { session.user.isAdmin = token.isAdmin }
    }
  }
})
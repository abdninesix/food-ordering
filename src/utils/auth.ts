import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { User } from "next-auth"
import Google from "next-auth/providers/google"
import prisma from "./connect"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  session: { strategy: "jwt" },
  callbacks: {
    // Add isAdmin to JWT on sign in
    async jwt({ token, user }) {
      if (user) {
        // 'user' is only defined on initial sign in
        token.id = user.id
        token.isAdmin = (user as any).isAdmin ?? false
      } else {
        // fallback: fetch from DB if needed
        const dbUser = await prisma.user.findUnique({ where: { email: token.email as string } })
        token.isAdmin = dbUser?.isAdmin ?? false
      }
      return token
    },

    // Expose isAdmin inside session.user
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.isAdmin = Boolean(token.isAdmin)
      }
      return session
    },
  },
})
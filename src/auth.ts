import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { accounts, sessions, users, verificationTokens } from "./database/schema"
import LinkedInProvider from "next-auth/providers/linkedin";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { db } from "./database"

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: { strategy: "jwt" },
    callbacks: {
        // async session({ token, session }) {
        //   if (token) {
        //     // @ts-ignore
        //     session.user.id = token.id
        //     session.user.name = token.name
        //     session.user.email = token.email
        //     session.user.image = token.picture
        //   }
        //   return session
        // },
        // async jwt({ token, user }) {
        //   const dbUser = await db.query.users.findFirst({
        //     where: (users, { eq }) => eq(users.email, String(token.email)),
        //   });
        //   if (!dbUser) {
        //     if (user) {
        //       token.id = user?.id 
        //     }
        //     return token
        //   }
        //   return {
        //     id: dbUser.id,
        //     name: dbUser.name,
        //     email: dbUser.email,
        //     picture: dbUser.image,
        //   }
        // }
    },
    adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
        verificationTokensTable: verificationTokens,
    }),
    pages: {
        signIn: "/signin",
    },
    providers: [
        Credentials({
            name: "Sign in",
            id: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },

            authorize: async (credentials) => {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const user = await db.query.users.findFirst({
                    where: (users, { eq }) => eq(users.email, String(credentials.email)),
                });

                if (
                    !user ||
                    !(await bcrypt.compare(String(credentials.password), user.password!))
                ) {
                    return null;
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    randomKey: "Well done",
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID!,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET!
        })
    ],
})
import NextAuth from "next-auth";
import { setConfig } from "next/config";

const config = {
	providers: [],
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);

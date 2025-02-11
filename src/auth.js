import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { NextResponse } from "next/server";

const config = {
	providers: [
		Credentials({
			authorize: async (credentials) => {
				// bu method dan donecek data userSession i olusturur
				const res = await login(credentials);
				const data = await res.json();

				if (!res.ok) {
					return null; // login basarili degilse null dondurur
				}

				const payload = {
					user: { ...data },
					accessToken: data.token,
				};
				delete payload.user.token;

				return payload;
			},
		}),
	],
	callbacks: {
		// middleware in kapsama alanina giren sayfalara bir istek yapildiginda bu callback calisir. Kullanici sayfaya yonlendirilmeden once calisir. Buradan donen deger true ise kullanici hedef sayfaya yonlendirilir, eger false donerse kullanici hedef sayfaya giremez.
		authorized({ auth, request }) {
			const { pathname, searchParams, origin } = request.nextUrl;
			
			const isLoggedIn = !!auth?.user;
			const isInLoginPage = pathname.startsWith("/login");
			const isInDashboardPages = pathname.startsWith("/dashboard");

			if(isLoggedIn){
				if(isInLoginPage){
					const url = searchParams.get("callbackUrl") || `${origin}/dashboard`;
					return NextResponse.redirect(url);
				}
				else if(isInDashboardPages){
					
				}

			}
			else if(isInDashboardPages){
				return false;
			}


			return true;
		},

		// Uygulamada JWT token a ihtiyac duyuldugunda burasi calisir
		async jwt({ token, user }) {
			return { ...token, ...user };
		},

		// Uygulamada Session bilgisine ihtiyac duyuldugunda burasi calisir
		async session({ session, token }) {

			const { accessToken, user } = token;
			
			session.user = user;
			session.accessToken = accessToken;

			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);

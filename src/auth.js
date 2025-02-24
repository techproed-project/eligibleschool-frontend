import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { NextResponse } from "next/server";
import { getIsTokenValid, getIsUserAuthorized } from "./helpers/auth-helper";

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

			const userRole = auth?.user?.role;
			const isLoggedIn = !!userRole;
			const isInLoginPage = pathname.startsWith("/login");
			const isInDashboardPages = pathname.startsWith("/dashboard");
			const isAPITokenValid = getIsTokenValid(auth?.accessToken);

			if (isLoggedIn && isAPITokenValid) {
				if (isInLoginPage) {
					const url =
						searchParams.get("callbackUrl") ||
						`${origin}/dashboard`;
					return NextResponse.redirect(url);
				} else if (isInDashboardPages) {
					const isUserAuthorized = getIsUserAuthorized(
						userRole,
						pathname
					);
					if (!isUserAuthorized) {
						const url = `${origin}/unauthorized`;
						return NextResponse.redirect(url);
					}
				}
			} else if (isInDashboardPages) {
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
			const isAPITokenValid = getIsTokenValid(accessToken);
			if (!isAPITokenValid) return null;

			session.user = user;
			session.accessToken = accessToken;

			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
	trustHost: true,
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);

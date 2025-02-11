import { auth } from "@/auth";
import React from "react";
import { UserMenuGuest } from "./user-menu-guest";
import { UserMenuAuth } from "./user-menu-auth";

export const UserMenu = async () => {
	const session = await auth();

	return (
		<div>
			{session?.user ? (
				<UserMenuAuth session={session} />
			) : (
				<UserMenuGuest />
			)}
		</div>
	);
};

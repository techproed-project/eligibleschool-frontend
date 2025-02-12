"use client"
import { logoutAction } from "@/actions/auth-action";
import { swConfirm } from "@/helpers/swal";
import React from "react";
import { Button } from "react-bootstrap";

export const ButtonLogout = (props) => {

    const handleLogout = async () => { 
        const res = await swConfirm("Are you sure to logout?");
        if(!res.isConfirmed) return;

        await logoutAction();

    }


	return (
		<Button {...props} onClick={handleLogout}>
			<i className="pi pi-sign-out"></i> LOGOUT
		</Button>
	);
};

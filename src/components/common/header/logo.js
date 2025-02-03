import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavbarBrand } from "react-bootstrap";

const Logo = () => {
	return (
		<NavbarBrand href="/" as={Link}>
			<Image
				src="/img/logos/logo.png"
				alt={config.project.name}
				width={208}
				height={48}
				priority
			/>
		</NavbarBrand>
	);
};

export default Logo;

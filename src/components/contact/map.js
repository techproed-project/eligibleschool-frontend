import { appConfig } from "@/helpers/config";
import React from "react";

export const ContactMap = () => {
	return (
		<iframe
			src={appConfig.contact.map.embed}
			width="100%"
			height="450"
			style={{ border: "0", display: "block" }}
			allowFullScreen=""
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
			title="Address"
		></iframe>
	);
};

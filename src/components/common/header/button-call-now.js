import { config } from "@/helpers/config";
import React from "react";

const ButtonCallNow = () => {
	return (
		<a className="btn btn-outline-secondary mt-4 mt-lg-0" href={`tel:${config.contact.info.phone1.value}`}>CALL NOW</a>
	);
};

export default ButtonCallNow;

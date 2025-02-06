import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import Contact from "@/components/contact/contact";
import React from "react";

export const metadata = {
	title: "Contact Us",
	description:
		"Get in touch with Eligible School for any inquiries or feedback.",
};

const Page = () => {
	return <>
        <PageHeader title="Contact Us" />
        <Spacer/>
        <Contact/>
    </>;
};

export default Page;

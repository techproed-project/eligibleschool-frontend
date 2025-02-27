import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import Contact from "@/components/contact/contact";
import { wait } from "@/helpers/misc";
import React from "react";

export const metadata = {
	title: "Contact Us",
	description:
		"Get in touch with Eligible School for any inquiries or feedback.",
};



const Page = async () => {


    await wait(3)
    //throw new Error("Page error");

	return <>
        <PageHeader title="Contact Us" />
        <Spacer/>
        <Contact/>
    </>;
};

export default Page;

import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { MessageList } from "@/components/dashboard/contact-message/list";
import { getAllMessagesByPage } from "@/services/contact-service";
import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
	const { page } = await searchParams;

	const res = await getAllMessagesByPage(page);
	const data = await res.json();

	data.content = data.content.map((item, index) => ({ ...item, id: index }));

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Messages" />
			<Spacer />
			<MessageList data={data} />
			<Spacer />
		</>
	);
};

export default Page;

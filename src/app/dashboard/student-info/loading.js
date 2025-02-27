import { LoadingList } from "@/components/common/loaders/loading-list";
import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import React from "react";

const Loading = () => {
	return (
		<>
			<PageHeader title="Info" />
			<Spacer />
			<LoadingList colCount={9}/>
			<Spacer />
		</>
	);
};

export default Loading;

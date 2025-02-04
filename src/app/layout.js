import Footer from "@/components/common/footer/footer";
import MainMenubar from "@/components/common/header/main-menubar";
import Topbar from "@/components/common/header/topbar";
import { appConfig } from "@/helpers/config";
import { montserrat } from "@/helpers/fonts";
import "@/styles/index.scss";

export const metadata = {
	title: {
		template: `%s | ${appConfig.project.name}`,
		default: appConfig.project.name,
	},
	description: appConfig.project.description,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={montserrat.variable}>
			<body>
				<Topbar />
				<MainMenubar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

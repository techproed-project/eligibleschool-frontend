import { Welcome } from "@/components/about/welcome";
import { Spacer } from "@/components/common/spacer";
import { Slider } from "@/components/home/slider";

export default function HomePage() {
	return (
		<>
			<Slider />
			<Spacer />
			<Welcome />
			<Spacer />
		</>
	);
}

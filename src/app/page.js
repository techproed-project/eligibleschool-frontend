import { Welcome } from "@/components/about/welcome";
import { Spacer } from "@/components/common/spacer";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { Slider } from "@/components/home/slider";

export default function HomePage() {
	return (
		<>
			<Slider />
			<Spacer />
			<Welcome />
			<Spacer />
			<FeaturedCourses/>
			<Spacer/>
		</>
	);
}

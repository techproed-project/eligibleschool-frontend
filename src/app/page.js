export default function HomePage() {
	return (
		<div>
			Hello
			{[...new Array(100)].map((_, index) => (
				<p key={index}>.</p>
			))}
		</div>
	);
}

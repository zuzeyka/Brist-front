interface Props {
	className?: string;
}
function ChevronLeftIcon(props: Props) {
	const { className, ...rest } = props;
	return (
		<svg
			{...rest}
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m15 18-6-6 6-6" />
		</svg>
	);
}

export default ChevronLeftIcon;

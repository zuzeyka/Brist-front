interface InputProps {
	placeholder?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string; // Add className attribute to the interface
}

const Input: React.FC<InputProps> = (props) => {
	return (
		<input
			className={
				"border px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full " +
				(props.className || "")
			}
			placeholder={props.placeholder}
			value={props.value || ""}
			onChange={props.onChange}
		/>
	);
};

export default Input;

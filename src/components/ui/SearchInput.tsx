interface InputProps {
    placeholder?: string;
    className?: string;
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <input
            className={
                "border px-3 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 w-full" +
                (" " + props.className || "")
            }
            placeholder={props.placeholder}
        />
    );
};

export default Input;

import React, { useState } from "react";

interface CounterProps {
	initialValue: number;
}

const Counter: React.FC<CounterProps> = (props) => {
	const [count, setCount] = useState<number>(props.initialValue);
	const handleIncrement = () => {
		setCount(count + 1);
	};
	const handleReset = () => {
		setCount(0);
	};
	const handleDecrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleReset}>Reset</button>
			<button onClick={handleDecrement}>Decrement</button>
		</div>
	);
};
export default Counter;

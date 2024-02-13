import React from "react";

interface AppProps {
	greet: string;
}

const App: React.FC<AppProps> = (props) => {
	const [count, setCount] = React.useState<number>(0);
	const handleIncrement = () => {
		setCount(count + 1);
	};

	const handleReset = () => {
		setCount(0);
	};
	return (
		<div>
			<h1>{props.greet}</h1>
			<p>Count: {count}</p>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
};

export default App;

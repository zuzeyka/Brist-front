import React from "react";

interface AppProps {
	greet: string;
}

const App: React.FC<AppProps> = (props) => {
	const [count, setCount] = React.useState<number>(0);
	return (
		<div>
			<h1>{props.greet}</h1>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default App;

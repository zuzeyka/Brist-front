import React from "react";
import Counter from "./components/Counter";
import ParentComponent from "./components/ParentComponent";

const App: React.FC = () => {
	return (
		<div>
			<Counter initialValue={0} />
			<ParentComponent />
		</div>
	);
};

export default App;

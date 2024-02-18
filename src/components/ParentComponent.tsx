import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
	return (
		<div>
			<ChildComponent name="John" age={30} />
		</div>
	);
};

export default ParentComponent;

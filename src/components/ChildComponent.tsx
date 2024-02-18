import React from "react";

interface ChildProps {
	name: string;
	age: number;
}

const ChildComponent: React.FC<ChildProps> = (props) => {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
		</div>
	);
};

export default ChildComponent;

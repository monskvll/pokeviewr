import "./LoadingCircle.css";

const LoadingCircle = () => {
	return (
		<div>
			<div className={"baseCircle"}>
				<div className={"movingCircle"}></div>
			</div>
		</div>
	);
};

export default LoadingCircle;

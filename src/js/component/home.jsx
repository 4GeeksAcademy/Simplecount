
import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";


const Home = () => {
	const [count, setCount] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let intervalId;

		if (isRunning) {
			intervalId = setInterval(() => {
				setCount(prevCount => prevCount + 1);
			}, 1000);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [isRunning]);

	const handleStart = () => {
		setIsRunning(true);
	};

	const handleStop = () => {
		setIsRunning(false);
	};

	const handleCountdown = () => {
		setCount(prevCount => prevCount - 1);
	};

	const handleRestart = () => {
		setCount(0);
	};

	return (
		<div className="center">
			<div className="count-boxes">
				<div className="count-box">{count}</div>

				
			</div>
			<div className="buttons">
				<button onClick={handleStart}>Start</button>
				<button onClick={handleStop}>Stop</button>
				<button onClick={handleCountdown}>Countdown</button>
				<button onClick={handleRestart}>Restart</button>
			</div>
		</div>
	);
};

export default Home;

		
		
	


	
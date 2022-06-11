import React, { useState, useEffect } from 'react';

const Timer = () => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime((prevTime) => prevTime + 1);
		}, 1000);
		return () => clearInterval(timer);
	}, [time]);
	return (
		<div>
			<p>Timer: {time} sec.</p>
		</div>
	);
};

export default Timer;

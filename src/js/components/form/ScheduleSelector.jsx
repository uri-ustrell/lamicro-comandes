import React, { useState } from "react";

const PeriodOptions = (period) => {
	const n = (period[1] - period[0]) * 2 - 1;

	return [...Array(n)].map((_, i) => {
		const { value, display } = calculateTimeValueAndDisplay(period[0], i);
		return (
			<option key={value} value={value}>
				{display}
			</option>
		);
	});
};

const calculateTimeValueAndDisplay = (n, i) => {
	debugger;
	let v = n + i;
	const isEvenIndex = i % 2 === 0;
	v = i !== 0 && isEvenIndex ? v - 1 : v;
	const value = isEvenIndex ? v : v - 0.5;
	const units = isEvenIndex ? v : v - 1;
	const isDecimal = !isEvenIndex;

	return { value, display: `${units}:${isDecimal ? "30" : "00"}` };
};

const ScheduleSelector = ({ schedule, setSchedule, selected }) => {
	const [selectedDay, setSelectedDay] = useState(selected.day);

	const handleDayChange = (e) => {
		setSelectedDay(e.target.value);
	};

	const handleScheduleChange = (e) => {
		setSchedule({ day: selectedDay, time: e.target.value });
	};

	return (
		<>
			<select onChange={handleDayChange} value={selectedDay}>
				{schedule.map((s) => (
					<option key={s.day} value={s.day}>
						{s.dayName}
					</option>
				))}
			</select>
			<select onChange={handleScheduleChange}>
				{schedule.find((s) => s.day === selectedDay).periods.map(PeriodOptions)}
			</select>
		</>
	);
};

export default ScheduleSelector;

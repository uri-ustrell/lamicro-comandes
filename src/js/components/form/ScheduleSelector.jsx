import React, { useState } from "react";

const buildPeriodOptions = (period) => {
	const n = (period[1] - period[0]) * 2 - 1;

	Array(n).map((_, i) => {
		const v = period[0] + i;
		const value = v % 2 === 0 ? v : v - 0.5;
		const units = v % 2 === 0 ? v : v - 1;
		const isDecimal = v % 2 === 0;
		return (
			<option value={value}>{`${units}:${isDecimal ? "30" : "00"}`}</option>
		);
	});
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
			<select onChange={handleDayChange}>
				{schedule.map((s) => (
					<option value={s.day} selected={selectedDay === s.day}>
						{s.dayname}
					</option>
				))}
			</select>
			<select onChange={handleScheduleChange}>
				{schedule
					.find((s) => s.day === selectedDay)
					.periods.map(buildPeriodOptions)}
			</select>
		</>
	);
};

export default ScheduleSelector;

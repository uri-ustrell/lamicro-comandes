import React, { useState } from "react";
import ButtonSelectorWrapper from "../styles/ButtonSelectorWrapper";
import FormSelectInput from "../styles/FormSelectInput";
import FormSelectOption from "../styles/FormSelectOption";

const PeriodOptions = (period) => {
	const n = (period[1] - period[0]) * 2 - 1;

	return [...Array(n)].map((_, i) => {
		const { value, display } = calculateTimeValueAndDisplay(period[0], i);
		return (
			<FormSelectOption key={value} value={value}>
				{display}
			</FormSelectOption>
		);
	});
};

const calculateTimeValueAndDisplay = (n, i) => {
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
		setSelectedDay(parseInt(e.target.value, 10));
	};

	const handleScheduleChange = (e) => {
		setSchedule({ day: selectedDay, time: e.target.value });
	};

	return (
		<ButtonSelectorWrapper>
			<FormSelectInput onChange={handleDayChange} value={selectedDay}>
				{schedule.map(
					(s) =>
						s.periods.length && (
							<FormSelectOption key={s.day} value={s.day}>
								{s.dayName}
							</FormSelectOption>
						)
				)}
			</FormSelectInput>
			<FormSelectInput onChange={handleScheduleChange}>
				{schedule.find((s) => s.day === selectedDay).periods.map(PeriodOptions)}
			</FormSelectInput>
		</ButtonSelectorWrapper>
	);
};

export default ScheduleSelector;

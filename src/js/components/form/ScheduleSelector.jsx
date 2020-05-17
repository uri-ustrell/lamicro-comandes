import React, { useState } from "react";
import ButtonSelectorWrapper from "../styles/ButtonSelectorWrapper";
import FormSelectInput from "../styles/FormSelectInput";
import FormSelectOption from "../styles/FormSelectOption";

const PeriodOptions = (period) => {
	const h = (period[1] - period[0]) * 2 - 1;
	let acc = period[0];
	const end = period[1];
	let options = [];

	while (acc <= end) {
		options.push(acc);
		acc += 0.5;
	}

	return options.map((value) => {
		const display = ("" + value).replace(/\.5/gi, ":30");
		return (
			<FormSelectOption key={value} value={value}>
				{display === "" + value ? display + ":00" : display}
			</FormSelectOption>
		);
	});
};

const ScheduleSelector = ({ schedule, setSchedule, selected }) => {
	const [selectedDay, setSelectedDay] = useState(selected.day);
	const [selectedTime, setSelectedTime] = useState(selected.time);

	const handleDayChange = (e) => {
		const newDay = parseInt(e.target.value, 10);
		setSelectedDay(newDay);
		setSchedule({
			day: newDay,
			time: schedule.find((s) => s.day === newDay).periods[0][0],
		});
	};

	const handleTimeChange = (e) => {
		const newTime = parseFloat(e.target.value);
		setSelectedTime(newTime);
		setSchedule({ day: selectedDay, time: newTime });
	};

	const handleScheduleChange = () => {};

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
			<FormSelectInput onChange={handleTimeChange} value={selectedTime}>
				{schedule.find((s) => s.day === selectedDay).periods.map(PeriodOptions)}
			</FormSelectInput>
		</ButtonSelectorWrapper>
	);
};

export default ScheduleSelector;

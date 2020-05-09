import React from "react";
import HomePage from "../../../components/homePage/HomePage.jsx";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderRedux from "../../utils/renderRedux";
import fetchMock from "fetch-mock";

describe("<HomePage />", () => {
	const fetchTitlesMock = (titles = ["one", "two", "three"]) =>
		fetchMock.getOnce("/titles", {
			body: { titles },
			headers: { "content-type": "application/json" },
		});

	beforeEach(() => {
		fetchMock.restore();
	});

	it("contains Title, Button and List of titles", () => {
		fetchTitlesMock();

		renderRedux(<HomePage />);

		screen.getByRole("heading");
		screen.getByRole("button");
		screen.getByRole("list");
	});

	it("fetch titles and reloads printing list of titles", async () => {
		fetchTitlesMock();

		renderRedux(<HomePage />);

		const listItems = await screen.findAllByText(/one|two|three/);

		expect(listItems).toHaveLength(3);
	});

	it("should change title on click to 'Change Title' button", async () => {
		fetchTitlesMock();

		renderRedux(<HomePage />);

		await screen.findByText("one");
		const button = screen.getByRole("button");
		const initialHeading = screen.getByRole("heading").textContent;

		userEvent.click(button);

		const finalHeading = screen.getByRole("heading").textContent;

		expect(finalHeading).not.toMatch(initialHeading);
	});
});

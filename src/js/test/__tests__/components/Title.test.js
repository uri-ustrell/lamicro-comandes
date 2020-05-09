import React from "react";
import Title from "../../../components/homePage/Title.jsx";
import { render, screen } from "@testing-library/react";

describe("<Title />", () => {
	it("should show 'selectedTitle' passed by props", () => {
		const selectedTitle = "Title test";

		render(<Title title={selectedTitle} />);

		screen.getByText(selectedTitle);
	});
});

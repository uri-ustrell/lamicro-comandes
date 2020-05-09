import React from "react";
import HeaderWrapper from "../styles/HeaderWrapper";
import HeaderLogo from "../styles/HeaderLogo";
import HeaderTitle from "../styles/HeaderTitle";

const Header = () => (
	<HeaderWrapper>
		<HeaderLogo />
		<HeaderTitle />
		<h1>Fes la teva comanda de cervesa!</h1>
	</HeaderWrapper>
);

export default Header;

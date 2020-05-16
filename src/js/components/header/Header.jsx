import React, { useState } from "react";
import HeaderWrapper from "../styles/HeaderWrapper";
import HeaderLogo from "../styles/HeaderLogo";
import HeaderTitle from "../styles/HeaderTitle";
import HeaderInfo from "../styles/HeaderInfo";
import HeaderInfoButton from "../styles/HeaderInfoButton";

const Header = () => {
	const [infoVisible, setInfoVisible] = useState(false);
	return (
		<HeaderWrapper>
			<div>
				<HeaderLogo />
				<HeaderTitle>Fes la teva comanda de cervesa!</HeaderTitle>
			</div>
			<HeaderInfoButton onClick={() => setInfoVisible(!infoVisible)}>
				{infoVisible ? "x" : "i"}
			</HeaderInfoButton>
			{infoVisible && (
				<HeaderInfo>
					1. Prepara la teva comanda mitjançant les opcions,
					<br />
					2. copia el missatge creat (amb el botó <b>Ctrl+C</b>)<br />
					3. i envia'l al contacte de La Micro. <br />
					<br />
					Les ofertes funcionen de la següent manera:
					<br />2 ampolles costen 11€
					<br />3 ampolles costen 15€
					<br />4 ampolles o més, s'afegeix 5€ per ampolla
					<br />
					<br />
					Assegura't de completar bé la informació per poder copiar el missatge.
				</HeaderInfo>
			)}
		</HeaderWrapper>
	);
};

export default Header;

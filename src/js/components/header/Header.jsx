import React, { useState } from "react";
import HeaderWrapper from "../styles/HeaderWrapper";
import HeaderLogo from "../styles/HeaderLogo";
import HeaderTitle from "../styles/HeaderTitle";
import HeaderInfo from "../styles/HeaderInfo";
import HeaderInfoButton from "../styles/HeaderInfoButton";
import CopyButtonWrapper from "../styles/CopyButtonWrapper";
import AddOrRemoveButton from "../styles/AddOrRemoveButton";

const Header = () => {
	const [infoVisible, setInfoVisible] = useState(false);
	return (
		<HeaderWrapper>
			<div>
				<HeaderLogo />
				<HeaderTitle>Fes la teva comanda de cervesa!</HeaderTitle>
			</div>
			<HeaderInfoButton onClick={() => setInfoVisible(!infoVisible)}>
				{infoVisible ? "x" : "Com funciona?"}
			</HeaderInfoButton>
			{infoVisible && (
				<HeaderInfo>
					<b className="active">1.</b>
					<br />
					Prepara la teva comanda mitjançant les opcions,
					<br /> clica les ampolles{" "}
					<AddOrRemoveButton overridePosition={true}>+</AddOrRemoveButton> per
					afegir-les a la comanda,
					<br /> clica les ampolles{" "}
					<AddOrRemoveButton overridePosition={true}>-</AddOrRemoveButton> del
					resultat per restar-les de la comanda.
					<br />
					<br />
					<b className="active">2.</b>
					<br />
					<b>copia el missatge</b> clicant el botó{" "}
					<CopyButtonWrapper
						bgColor="lightgray"
						overridePosition={true}
						small={true}
					>
						Copia
					</CopyButtonWrapper>
					<br />
					<br />
					<b className="active">3.</b>
					<br />i envia'l per <b>Whatsapp</b> o <b>Telegram</b> al contacte de{" "}
					<b>La Micro</b>.
					<br />
					<br />
					<br />
					Les ofertes funcionen de la següent manera:
					<br />
					<span className="block-text">
						Comanda mínima de 2 ampolles.
						<br />2 ampolles costen 11€.
						<br />3 ampolles costen 15€.
						<br />4 ampolles o més, s'afegeix 5€ per ampolla.
						<br />
						<br />
						El cost de l'envàs és un <b>dipòsit retornable</b> d'1,5€ per{" "}
						ampolla.
					</span>
					<br />
					<br />
					L'ampolla és de <b> 0,75 litres</b>.
					<br />
					<br />
					Si no tens el contacte de La MicroCerveseria, <b>
						copia el telèfon
					</b>{" "}
					clicant el botó{" "}
					<CopyButtonWrapper
						bgColor="lightgray"
						overridePosition={true}
						small={true}
					>
						Copia
					</CopyButtonWrapper>
					<br />
					<br />
					Assegura't de completar bé la comanda per a poder copiar el missatge.
					<br />
					<br />
					Després d'enviar el missatge via <b>Whatsapp</b> o <b>Telegram</b>, us{" "}
					confirmarem la comanda en el mateix xat.
					<br />
					<br />
					Les entregues a domicili són:
					<br />
					<span className="block-text">
						<b>Dimecres</b> de <b>16:30</b> a <b>20:30</b> i <b>dissabte</b> de{" "}
						<b>10:30</b> a <b>13:30</b>.
						<br />
						<br />
						Només en els termes municipals de{" "}
						<b>Sabadell i Barberà del Vallès</b>.
					</span>
					<br />
					<br />
					Recomanem conservar la cervesa{" "}
					<b>a la nevera un màxim d'una setmana</b>.
				</HeaderInfo>
			)}
		</HeaderWrapper>
	);
};

export default Header;

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
					<b>1.</b> Prepara la teva comanda mitjançant les opcions,
					<br /> clica les ampolles{" "}
					<AddOrRemoveButton overridePosition={true}>+</AddOrRemoveButton> per
					afegir-les a la comanda.
					<br /> clica les ampolles{" "}
					<AddOrRemoveButton overridePosition={true}>-</AddOrRemoveButton> del
					resultat per restarles de la comanda.
					<b>2.</b> copia el missatge creat (amb el botó{" "}
					<CopyButtonWrapper
						bgColor="lightgray"
						overridePosition={true}
						small={true}
					>
						Copia
					</CopyButtonWrapper>
					)
					<br />
					copia el contacte (amb el botó{" "}
					<CopyButtonWrapper
						bgColor="lightgray"
						overridePosition={true}
						small={true}
					>
						Copia
					</CopyButtonWrapper>
					)
					<br />
					<b>3.</b> i envia'l per <b>Whatsapp</b> al contacte de <b>La Micro</b>
					.
					<br />
					<br />
					Les ofertes funcionen de la següent manera:
					<br />
					Minim comanda de 2 ampolles.
					<br />2 ampolles costen 11€.
					<br />3 ampolles costen 15€.
					<br />4 ampolles o més, s'afegeix 5€ per ampolla.
					<br />
					El cost de l'envàs és un <b>dipòsit</b> retornable de 1,5€ per{" "}
					ampolla.
					<br />
					L'Ampolla és de <b>0,75L</b>.
					<br />
					Assegura't de completar bé la informació per poder copiar el missatge.
					<br />
					<br />
					Després d'enviar el missatge via <b>Whatsapp</b> o <b>Telegram</b>, us{" "}
					confirmarem la comanda en el mateix xat.
					<br />
					Les entregues a domicili son <b>Dimecres tarda</b> i{" "}
					<b>Dissabte matí</b>. Només en l'àmbit territorial de{" "}
					<b>Sabadell i Barberà del Vallès</b>.
					<br />
					Recomanem conservar la cervesa{" "}
					<b>a la nevera un màxim d'una setmana</b>.
				</HeaderInfo>
			)}
		</HeaderWrapper>
	);
};

export default Header;

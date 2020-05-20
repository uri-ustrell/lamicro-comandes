import React, { useState } from "react";
import CopyButtonWrapper from "../styles/CopyButtonWrapper";
import { CopyToClipboard } from "react-copy-to-clipboard";

const initialText = "Copia";
const copiedText = "copiat!";
const badFormatText = "X";
const neutralColor = "lightgray";
const okColor = "lightgreen";
const koColor = "tomato";

const CopyButton = ({ content, available, hint }) => {
	const [text, setText] = useState(initialText);
	const [buttonColor, setButtonColor] = useState(neutralColor);

	const copyText = (text, result) => {
		if (!available) {
			/* Alert user text is NOT copied */
			setText(badFormatText);
			setButtonColor(koColor);

			alert(
				"Per copiar el text de la comanda:\nEl preu ha de ser superior a 0€ (mínim 2 cerveses)\ni s'ha d'emplenar l'adreça en cas de: 'porteu-m'ho a casa'"
			);

			setTimeout(() => {
				setText(initialText);
				setButtonColor(neutralColor);
			}, 1000);

			return;
		}

		if (result) {
			setText(copiedText);
			setButtonColor(okColor);

			setTimeout(() => {
				setText(initialText);
				setButtonColor(neutralColor);
			}, 3000);
		} else {
			alert(
				"Lamentem que en aquest dispositiu no és possible copiar el text,\ntambé pots provar de fer una captura de pantalla."
			);
		}

		return;
	};

	return (
		<CopyToClipboard
			text={(available && content) || "falta informació"}
			onCopy={copyText}
		>
			<CopyButtonWrapper bgColor={buttonColor}>
				{text === initialText && <small>clic</small>}
				<span>{text}</span>
				{text === initialText && <small>{hint}</small>}
			</CopyButtonWrapper>
		</CopyToClipboard>
	);
};

export default CopyButton;

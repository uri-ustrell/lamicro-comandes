import React, { useState } from "react";
import CopyButtonWrapper from "../styles/CopyButtonWrapper";

const initialText = "Copia";
const copiedText = "copiat!";
const badFormatText = "X";
const neutralColor = "lightgray";
const okColor = "lightgreen";
const koColor = "tomato";

const CopyButton = ({ content, available, hint }) => {
	const [text, setText] = useState(initialText);
	const [buttonColor, setButtonColor] = useState(neutralColor);

	const copyText = (e) => {
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

		if (navigator.userAgent.match(/ipad|ipod|iphone|macintosh/i)) {
			try {
				navigator.clipboard.writeText(content).then(
					() => {
						/* Alert user text is copied */
						setText(copiedText);
						setButtonColor(okColor);

						setTimeout(() => {
							setText(initialText);
							setButtonColor(neutralColor);
						}, 3000);
					},
					() => {
						alert(
							"no es possible copiar el text en aquest dispositiu,\n si us plau feu-ho manualment."
						);
					}
				);
			} catch (error) {
				try {
					const el = document.createElement("textarea");
					const editableOld = el.contentEditable;
					const readOnlyOld = el.readOnly;

					const range = document.createRange();

					el.contentEditable = "true";
					el.readOnly = "false";
					range.selectNodeContents(el);

					const s = window.getSelection();
					s.removeAllRanges();
					s.addRange(range);

					el.setSelectionRange(0, 999999);

					el.contentEditable = editableOld;
					el.readOnly = readOnlyOld;

					document.execCommand("copy");

					/* Alert user text is copied */
					setText(copiedText);
					setButtonColor(okColor);

					setTimeout(() => {
						setText(initialText);
						setButtonColor(neutralColor);
					}, 3000);
				} catch (e) {
					alert(
						"no es possible copiar el text en aquest dispositiu,\n si us plau feu-ho manualment."
					);
				}
			}

			return;
		}

		navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
			if (result.state == "granted" || result.state == "prompt") {
				/* write to the clipboard now */
				navigator.clipboard.writeText(content).then(
					() => {
						/* Alert user text is copied */
						setText(copiedText);
						setButtonColor(okColor);

						setTimeout(() => {
							setText(initialText);
							setButtonColor(neutralColor);
						}, 3000);
					},
					() => {
						alert(
							"no es possible copiar el text en aquest dispositiu,\n si us plau feu-ho manualment."
						);
					}
				);
			}

			return;
		});
	};

	return (
		<CopyButtonWrapper onClick={copyText} bgColor={buttonColor}>
			{text === initialText && <small>click</small>}
			<span>{text}</span>
			{text === initialText && <small>{hint}</small>}
		</CopyButtonWrapper>
	);
};

export default CopyButton;

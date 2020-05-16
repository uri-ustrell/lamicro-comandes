import React, { useState } from "react";
import CopyButtonWrapper from "../styles/CopyButtonWrapper";

const CopyButton = ({ content, available }) => {
	const initialText = "Ctrl+C";
	const copiedText = "copiat!";
	const badFormatText = "X";
	const [text, setText] = useState(initialText);

	const copyText = (e) => {
		const button = e.target;
		if (!available) {
			/* Alert user text is NOT copied */
			setText(badFormatText);
			button.style.backgroundColor = "tomato";

			setTimeout(() => {
				setText(initialText);
				button.style.backgroundColor = "";
			}, 3000);

			return;
		}
		navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
			if (result.state == "granted" || result.state == "prompt") {
				/* write to the clipboard now */
				navigator.clipboard.writeText(content).then(
					() => {
						/* Alert user text is copied */
						setText(copiedText);
						button.style.backgroundColor = "lightgreen";

						setTimeout(() => {
							setText(initialText);
							button.style.backgroundColor = "";
						}, 3000);
					},
					() => {
						alert(
							"no es possible copiar el text en aquest dispositiu,\n si us plau feu-ho manualment."
						);
					}
				);
			}
		});
	};

	return <CopyButtonWrapper onClick={copyText}>{text}</CopyButtonWrapper>;
};

export default CopyButton;

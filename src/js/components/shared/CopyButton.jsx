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

		if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
			try {
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
			} catch (error) {
				try {
					const el = document.createElement("textarea");
					const editableOld = el.contentEditable;
					const readOnlyOld = el.readOnly;

					range = document.createRange();

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
					button.style.backgroundColor = "lightgreen";

					setTimeout(() => {
						setText(initialText);
						button.style.backgroundColor = "";
					}, 3000);
				} catch (e) {
					alert(
						"no es possible copiar el text en aquest dispositiu,\n si us plau feu-ho manualment."
					);
				}
			}

			return;
		}

		if (navigator.userAgent.match(/macintosh/i)) {
			try {
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
			} catch (error) {
				const el = document.createElement("textarea");
				const editableOld = el.contentEditable;
				const readOnlyOld = el.readOnly;

				if (window.getSelection && document.createRange) {
					range = document.createRange();
				}

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
				button.style.backgroundColor = "lightgreen";

				setTimeout(() => {
					setText(initialText);
					button.style.backgroundColor = "";
				}, 3000);
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

			return;
		});
	};

	return <CopyButtonWrapper onClick={copyText}>{text}</CopyButtonWrapper>;
};

export default CopyButton;

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
			alert("safari iOS 1");
			try {
				navigator.clipboard.writeText(content).then(
					() => {
						alert("safari iOS 2");
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
					alert("safari iOS 3");

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
			alert("safari mac 1");
			try {
				navigator.clipboard.writeText(content).then(
					() => {
						alert("safari mac 2");
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
				alert("safari mac 3");

				const el = document.createElement("textarea");
				const editableOld = el.contentEditable;
				const readOnlyOld = el.readOnly;
				alert("safari mac 4");
				range = document.createRange();
				alert("safari mac 4.1");
				el.contentEditable = "true";
				alert("safari mac 4.2");
				el.readOnly = "false";
				alert("safari mac 4.2");
				range.selectNodeContents(el);
				alert("safari mac 5");
				const s = window.getSelection();
				s.removeAllRanges();
				s.addRange(range);

				el.setSelectionRange(0, 999999);
				alert("safari mac 6");
				el.contentEditable = editableOld;
				el.readOnly = readOnlyOld;
				alert("safari mac 7");
				document.execCommand("copy");
				alert("safari mac 8");
				/* Alert user text is copied */
				setText(copiedText);
				button.style.backgroundColor = "lightgreen";
				alert("safari mac 9");
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

import React from "react";
import PhoneText from "../styles/PhoneText";
import CopyButton from "../shared/CopyButton.jsx";
import PhoneTextWrapper from "../styles/PhoneTextWrapper";

const Message = ({ info }) => {
	const selectedBeers = info.cart.selectedBeers.reduce((acc, curr) => {
		const index = acc.findIndex((b) => b.id === curr);

		if (index > -1) {
			acc[index].amount++;
		} else {
			acc = [
				...acc,
				{ ...info.form.beers.find((b) => b.id === curr), amount: 1 },
			];
		}

		return acc;
	}, []);

	const where =
		info.form.selectedDelivery === 1
			? "🛒 Us puc passar a buscar"
			: "🚚 Em podeu portar a casa";
	const beersList = selectedBeers
		.map((b) => `🍺 *${b.amount} ${b.name}* `)
		.join("\n\t");
	const adress =
		info.form.selectedDelivery === 2
			? `🏡 Visc a *${info.form.adress}* \n`
			: "";
	const payment = info.form.paymentMethods.find(
		(p) => p.id === info.form.selectedPayment
	).name;
	const recycled =
		info.cart.recycledBottles > 0
			? `♻️ Torno *${info.cart.recycledBottles}* ampolles buides\n`
			: "";
	const time = ("" + info.form.selectedSchedule.time).replace(/\../gi, ":30");
	const when =
		info.form.selectedDelivery === 1
			? `Les puc passar a buscar el proper \n  🗓️ *${
					info.form.scheduleTakeAway.find(
						(d) => d.day === info.form.selectedSchedule.day
					).dayName
			  }* \n  ⌚ a les *${time}H* `
			: "🗓️ Quan me les podeu portar?";

	const content = `Hola,

${where} les següents cerveses?

	${beersList}

${recycled}
${adress}
${when}

Pagaré els *${info.cart.cost}€* amb *${payment}* 
Gràcies! 🍻
	`;

	return (
		<PhoneTextWrapper>
			<PhoneText>
				{content.replace(/ \*/gi, " ").replace(/\* /gi, " ")}
			</PhoneText>
			<CopyButton content={content} />
		</PhoneTextWrapper>
	);
};

export default Message;

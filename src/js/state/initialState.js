const initialState = {
	beers: [
		{
			id: 1,
			name: "Weissebier",
			description: "de blat, rossa i suau",
			color: "yellow",
		},
		{
			id: 2,
			name: "Belgian Blonde",
			description: "dolça i forta",
			color: "yellow",
		},
		{
			id: 3,
			name: "Special Bitter",
			description: "amarga i torrada",
			color: "red",
		},
		{
			id: 4,
			name: "Bruna",
			description: "torrada i dolça",
			color: "red",
		},
		{
			id: 5,
			name: "Porter",
			description: "negre i torrefacta",
			color: "black",
		},
	],
	paymentMethods: [
		{ id: 1, name: "📱 bizzum" },
		{ id: 2, name: "💳 targeta de crèdit" },
		{ id: 3, name: "💵 metàlic" },
	],
	deliveryMethods: [
		{ id: 1, name: "ho recullo a la Micro" },
		{ id: 2, name: "porteu-m'ho a casa" },
	],
	scheduleTakeAway: [
		{ day: 1, dayName: "dilluns", periods: [] },
		{ day: 2, dayName: "dimarts", periods: [] },
		{ day: 3, dayName: "dimecres", periods: [[15.5, 16.5]] },
		{ day: 4, dayName: "dijous", periods: [] },
		{ day: 5, dayName: "divendres", periods: [] },
		{
			day: 6,
			dayName: "dissabte",
			periods: [[9, 10]],
		},
		{
			day: 7,
			dayName: "diumenge",
			periods: [],
		},
	],
	cart: {
		selectedBeers: [],
		recycledBottles: 0,
		cost: 0,
	},
	selectedPayment: 3,
	selectedDelivery: 2,
	selectedSchedule: { day: 3, time: 15.5 },
	adress: "",
	message: "",
	contact: { name: "La Microcervesaria", number: 699432572 },
};

export default initialState;

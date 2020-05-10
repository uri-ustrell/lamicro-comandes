import * as types from "./actionTypes";

export const chooseDeliveryMethod = (selectedDelivery) => ({
	type: types.CHOOSE_DELIVERY_METHOD,
	selectedDelivery,
});

export const choosePaymentMethod = (selectedPayment) => ({
	type: types.CHOOSE_PAYMENT_METHOD,
	selectedPayment,
});

export const choosePickUpTime = (selectedSchedule) => ({
	type: types.CHOOSE_PICKUP_TIME,
	selectedSchedule,
});

export const inputAdress = (adress) => ({ type: types.INPUT_ADRESS, adress });

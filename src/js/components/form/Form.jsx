import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as formActions from "../../state/actions/formActions";
import * as cartActions from "../../state/actions/cartActions";
import FormWrapper from "../styles/FormWrapper";
import DeliverySelector from "./DeliverySelector.jsx";
import ScheduleSelector from "./ScheduleSelector.jsx";
import PaymentSelector from "./PaymentSelector.jsx";
import BeersSelector from "./BeersSelector.jsx";
import TextInput from "../shared/TextInput.jsx";

const Form = ({
	beers,
	scheduleTakeAway,
	paymentMethods,
	deliveryMethods,
	selectedPayment,
	selectedDelivery,
	selectedSchedule,
	adress,
	inputAdress,
	chooseDeliveryMethod,
	choosePaymentMethod,
	choosePickUpTime,
	addBeerToCart,
	addRecycledBottles,
}) => (
	<FormWrapper>
		<DeliverySelector
			methods={deliveryMethods}
			selected={selectedDelivery}
			setDelivery={chooseDeliveryMethod}
		/>
		{selectedDelivery === 1 ? (
			<ScheduleSelector
				schedule={scheduleTakeAway}
				selected={selectedSchedule}
				setSchedule={choosePickUpTime}
			/>
		) : (
			<TextInput value={adress} setValue={inputAdress} />
		)}
		<PaymentSelector
			methods={paymentMethods}
			selected={selectedPayment}
			setPayment={choosePaymentMethod}
		/>
		<BeersSelector beers={beers} addBeer={addBeerToCart} />
	</FormWrapper>
);

Form.propTypes = {
	beers: PropTypes.array.isRequired,
	scheduleTakeAway: PropTypes.array.isRequired,
	paymentMethods: PropTypes.array.isRequired,
	deliveryMethods: PropTypes.array.isRequired,
	selectedPayment: PropTypes.number.isRequired,
	selectedDelivery: PropTypes.number.isRequired,
	selectedSchedule: PropTypes.object.isRequired,
	adress: PropTypes.string.isRequired,
	inputAdress: PropTypes.func.isRequired,
	chooseDeliveryMethod: PropTypes.func.isRequired,
	choosePaymentMethod: PropTypes.func.isRequired,
	choosePickUpTime: PropTypes.func.isRequired,
	addBeerToCart: PropTypes.func.isRequired,
	addRecycledBottles: PropTypes.func.isRequired,
};

const mapStateToProps = (state /* , ownProps */) => {
	return {
		beers: state.form.beers,
		scheduleTakeAway: state.form.scheduleTakeAway,
		paymentMethods: state.form.paymentMethods,
		deliveryMethods: state.form.deliveryMethods,
		selectedPayment: state.form.selectedPayment,
		selectedDelivery: state.form.selectedDelivery,
		selectedSchedule: state.form.selectedSchedule,
		adress: state.form.adress,
	};
};

const mapDispatchToProps = {
	chooseDeliveryMethod: formActions.chooseDeliveryMethod,
	choosePaymentMethod: formActions.choosePaymentMethod,
	choosePickUpTime: formActions.choosePickUpTime,
	inputAdress: formActions.inputAdress,
	addBeerToCart: cartActions.addBeerToCart,
	addRecycledBottles: cartActions.addRecycledBottles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

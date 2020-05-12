import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PhoneWrapper from "../styles/PhoneWrapper";
import PhoneScreen from "../styles/PhoneScreen";
import Contact from "./Contact.jsx";
import Message from "./Message.jsx";

const Phone = ({ state }) => (
	<PhoneWrapper>
		<PhoneScreen>
			<Contact />
			<Message info={state} />
		</PhoneScreen>
	</PhoneWrapper>
);

Phone.propTypes = {
	state: PropTypes.object.isRequired,
};

const mapStateToProps = (state /*, ownProps */) => {
	return { state };
};
export default connect(mapStateToProps)(Phone);

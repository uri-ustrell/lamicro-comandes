import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainWrapper from "../styles/MainWrapper";
import * as titleActions from "../../state/actions/titleActions";

const HomePage = ({ titles, selectedTitle, changeTitle, getTitles }) => {
	return (
		<MainWrapper>
			<Form />
			<Cart />
			<Phone />
		</MainWrapper>
	);
};

HomePage.propTypes = {
	titles: PropTypes.array.isRequired,
	changeTitle: PropTypes.func.isRequired,
	selectedTitle: PropTypes.string.isRequired,
};

const mapStateToProps = (state /* , ownProps */) => ({
	titles: state.title.titles,
	selectedTitle: state.title.selectedTitle,
});

const mapDispatchToProps = {
	changeTitle: titleActions.changeTitle,
	getTitles: titleActions.getTitles,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

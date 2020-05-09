import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Title from "./Title.jsx";
import Button from "../shared/Button.jsx";
import * as titleActions from "../../state/actions/titleActions";

const Wrapper = styled.div`
	margin: 25px auto;
	max-width: 300px;
	padding: 10px;
	border: 1px solid lightgrey;
	text-align: center;
`;

const HomePage = ({ titles, selectedTitle, changeTitle, getTitles }) => {
	if (titles.length <= 0) {
		getTitles();
	}

	return (
		<Wrapper>
			<Title title={selectedTitle} />
			<Button handleClick={changeTitle} text="Change Title" />
			<ul>
				{titles.map((title, i) => (
					<li key={i}>{title}</li>
				))}
			</ul>
		</Wrapper>
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

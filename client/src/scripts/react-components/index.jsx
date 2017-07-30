import React from "react";
import { connect } from "react-redux";

// Import all actions.
import * as USER_ACTIONS from "../redux/actions/user-actions";

// Import specific actions.
// import { setUserAge } from "./redux/actions/user-actions";

// Create a container for this react component.
// This container is responsible for getting relevant store data and
// pass them as props to its containing component.
@connect((STORE) => {
	return {
		user: STORE.user,
		tweets: STORE.tweets
	};
})

class Index extends React.Component {
	componentWillMount() {
		this.props.dispatch(USER_ACTIONS.setUserAge(666));
		this.props.dispatch(USER_ACTIONS.fetchHobbies());
	}

	render() {
		// user = this.props.user
		// This will make code cleaner.
		const { user, tweets } = this.props;
		console.log(user.hobbies);
		return (
			<div>
				<h1>{ user.name }</h1>
				<h1>{ user.age }</h1>
				<button onClick={ (e) => this.handleBtnClick(e) }>Change Name</button>
			</div>
		)
	}

	handleBtnClick(e) {
		e.preventDefault();

		this.props.dispatch(USER_ACTIONS.setUserName("Zico"));
	}
}

export default Index;

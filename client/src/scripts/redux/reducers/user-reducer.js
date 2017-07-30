const INIT_STATE = {
	name: "Default",
	age: 0,
	hobbies: []
};

 const USER_REDUCER = (state = INIT_STATE, action) => {
	switch (action.type) {
		case "CHANGE_NAME":
			state = {
				...state,
				 name: action.payload
			 };
			break;

		case "CHANGE_AGE":
			state = Object.assign({}, state, {
				age: action.payload
			});
			// ...state is short for Object.assign
			// state = {...state, name: action.data};
			break;

		// PENDING, FULFILLED, REJECTED are automatically appended to
		// FETCH_USERS by promise middleware plugin.
		case "FETCH_HOBBIES_PENDING":

			break;

		case "FETCH_HOBBIES_FULFILLED":
			state = {
				...state,
				hobbies: action.payload.data
			};
			break;

		case "FETCH_HOBBIES_REJECTED":

			break

		default:
	}
	return state;
};

export default USER_REDUCER;

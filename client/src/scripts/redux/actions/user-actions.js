import axios from "axios";

export function setUserName(name = "Default") {
	return {
		type: "CHANGE_NAME",
		payload: name
	}
}

export function setUserAge(num = 666) {
	return {
		type: "CHANGE_AGE",
		payload: num
	}
}

// If payload is an ajax call (promise type),
// the redux-promise-middleware plugin will handle it for us automatically.
export function fetchHobbies() {
	return {
		type: "FETCH_HOBBIES",
		payload: axios.get("http://rest.learncode.academy/api/wstern/users")
	}
}

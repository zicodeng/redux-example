import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import STORE from "./redux/store";

import Index from "./react-components/index.jsx";

// Provider makes redux store available to all containers.
ReactDOM.render(
	<Provider store = { STORE }>
		<Index />
	</Provider>,
	document.getElementById("app")
);

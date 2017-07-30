// This file combines all reducers into a single root reducer.

import { combineReducers } from "redux";

import TWEETS_REDUCER from "./tweets-reducer";
import USER_REDUCER from "./user-reducer";

const ROOT_REDUCER = combineReducers({
	user: USER_REDUCER,
	tweets: TWEETS_REDUCER,
});

export default ROOT_REDUCER;

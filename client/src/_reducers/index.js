import { combineReducers } from "redux";
import user from "./user_reducers";
// import comment from "./comment_reducer";

// 여러 리듀서들을 combineReducers 로 합쳐서 관리
const rootReducer = combineReducers({
    user,
    // comment,
});
export default rootReducer;

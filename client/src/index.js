import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/reset.css";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Rducer from "./_reducers";

// 그냥 createStore 객체만 받는다.
// applyMiddleware를 이용해서 두개의 미들웨어를 가지는 객체를 리턴한다.
const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware,
    ReduxThunk
)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider
        store={createStoreWithMiddleware(
            Rducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

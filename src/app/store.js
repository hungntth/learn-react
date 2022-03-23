import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../featrues/Counter/counterSlice";

const rootReducer = {
    counter: counterReducer,
};
const store = configureStore({
    reducer: rootReducer,
});

export default store;
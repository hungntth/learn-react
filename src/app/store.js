import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../featrues/Counter/counterSlice";
import  userReducer  from "../featrues/Auth/userSlice";

const rootReducer = {
    counter: counterReducer,
    user: userReducer,
};
const store = configureStore({
    reducer: rootReducer,
});

export default store;
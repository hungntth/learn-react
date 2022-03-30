import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../featrues/Counter/counterSlice';
import userReducer from '../featrues/Auth/userSlice';
import cartReducer from '../featrues/Cart/cartSlice';

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  cart: cartReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;

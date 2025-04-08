import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

// Store setup
const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

// Proper typing for useSelector and useDispatch hooks
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store;

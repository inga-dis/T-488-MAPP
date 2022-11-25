// import thunkMiddleware from "redux-thunk";
// import { createStore, applyMiddleware } from "redux";
// import reducer from "./reducer";

// export const store = createStore(reducer, 
//     applyMiddleware(thunkMiddleware));
import { configureStore } from "@reduxjs/toolkit";

import boardSlice from "./boardSlice";
import listSlice from "./listSlice";
import taskSlice from "./taskSlice";


export const store = configureStore({
    reducer: {
        boards: boardSlice,
        lists: listSlice,
        tasks: taskSlice
    },
});
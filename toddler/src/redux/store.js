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
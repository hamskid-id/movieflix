import { configureStore } from "@reduxjs/toolkit";
import bookmarks_Slice from "./bookmarksSlice";

const store = configureStore({
    reducer:{
        bookmark: bookmarks_Slice.reducer
    },
})

export default store;
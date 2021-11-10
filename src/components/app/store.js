import { configureStore } from "@reduxjs/toolkit";
import searchBarandButtonSlice from "../searchBarAndButton/searchBarandButtonSlice";
import commentsSlice from "../comments/commentsSlice";
import articleSlice from "../article/articleSlice";


export default configureStore({
  reducer: {
    commentsSlice: commentsSlice,
    vicky: searchBarandButtonSlice,
    article: articleSlice,
}});

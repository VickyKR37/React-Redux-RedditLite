import { configureStore } from "@reduxjs/toolkit";
import searchBarandButtonSlice from "../searchBarAndButton/searchBarandButtonSlice";
import commentsSlice from "../comments/commentsSlice";
import DisplayComments from "../comments/displayComments";

export default configureStore({
  reducer: {
    commentsSlice: commentsSlice,
    vicky: searchBarandButtonSlice,
    displayComments: DisplayComments
}});

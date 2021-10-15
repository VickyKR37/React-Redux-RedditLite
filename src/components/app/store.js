import { configureStore } from "@reduxjs/toolkit";
//place import of searchBarandButtonSlice here
import commentsSlice from "../comments/commentsSlice";

export default configureStore({
  reducer: {
    commentSlice: commentsSlice
}})

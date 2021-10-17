import React from 'react';
import { useDispatch, useSelector  from 'react-redux'};
import { loadComments, isLoadingComments } from './commentsSlice';


export default function Comments() {
    const dispatch = useDispatch();
    const comments = useSelector(loadComments);
    const commentsLoading = useSelector(isLoadingComments);

    if (commentsLoading) {
        return <div>Loading</div>;
    } else if (!comments) {
        return null;
    }

    return {comments};

};


export default Comments;
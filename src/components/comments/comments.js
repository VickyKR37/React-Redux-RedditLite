import React from 'react';
import { useSelector }  from 'react-redux';
import { loadComments } from './commentsSlice';


    function Comments() {
    const comments = useSelector(loadComments);

    if (loadComments) {
        return <div>Loading</div>;
    } else if (!comments) {
        return null;
    }

    return {comments};

};


export default Comments;
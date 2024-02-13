import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const PostComments = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);

    return (
        <div>
            Post comments
        </div>
    );
};

export default PostComments;
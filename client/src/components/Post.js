import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Post = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);

    return (
        <div>
         Post of {currentUser}
        </div>
    );
};

export default Post;
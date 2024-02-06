
const MAIN_URL = 'http://localhost:8080/';

export const CREATE_POST = MAIN_URL + 'post/';
export const UPDATE_POST = (postId) => `${MAIN_URL}post/${postId}`;
export const FILTER_POSTS_BY_KEYWORD = (keyword) => `${MAIN_URL}post/search/${keyword}`;
export const GET_POSTS_BY_PAGE = (pageNumber) => `${MAIN_URL}post/page/${pageNumber}`;
export const DELETE_POST = (postId) => `${MAIN_URL}post/${postId}`;
export const UPLOAD_POST_PICTURE = (postId) => `${MAIN_URL}post/${postId}/picture`;
export const CREATE_COMMENT = MAIN_URL + 'comment';
export const UPDATE_COMMENT = (commentId) => `${MAIN_URL}comment/${commentId}`;
export const DELETE_COMMENT = (commentId) => `${MAIN_URL}comment/${commentId}`;

export const GET_ALL_POSTS = MAIN_URL + 'post';
export const GET_POST = (postId) => `${MAIN_URL}post/${postId}`;
export const GET_COMMENT = (commentId) => `${MAIN_URL}comment/${commentId}`;
export const GET_COMMENTS = MAIN_URL + 'comment';
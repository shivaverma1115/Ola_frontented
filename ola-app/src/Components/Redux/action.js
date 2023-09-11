import { GET_POSTS_FAILED, GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from "./actionType"




export const getPostsRequest = () =>{
    return {
        type : GET_POSTS_REQUEST,
    }
}
export const getPostsSuccess = (payload) =>{
    return {
        type : GET_POSTS_SUCCESS,
        payload:payload
    }
}
export const getPostsFailer = () =>{
    return {
        type : GET_POSTS_FAILED,
    }
}
import { GET_POSTS_FAILED, GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from "./actionType"

const initialState = {
    posts: [],
    isLoading: false,
    isError: false
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POSTS_REQUEST : {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_POSTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                posts: payload
            }
        }
        case GET_POSTS_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default:
            return state;
    }
}
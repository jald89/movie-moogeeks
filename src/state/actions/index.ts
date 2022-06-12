import { CommentRecord } from "state/reducers/Reducer"
import { Dispatch } from "redux"

export const createComment = (comment: CommentRecord) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: '@comments/create',
            payload: comment
        })
    }
}
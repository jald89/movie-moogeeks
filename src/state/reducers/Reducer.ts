import { combineReducers } from "redux"
import { Persistor } from "utils/persistor"

export const storePersistor = Persistor<InitialStateType>("store_data")

export type CommentRecord = {
    id: string;
    movieId: string;
    title: string;
    ratingValue: number;
    comment: string;
    poster: string;
    createdAt: string;
}

export type PayloadType = {
    type: string;
    payload?: CommentRecord;
}

export type InitialStateType = {
    comments: CommentRecord[];
}

const initialState: InitialStateType = storePersistor.get() || {
    comments: [],
}

export const commentsReducer = (state = initialState, action: PayloadType) => (
    storePersistor.set(
        (() => {
            switch (action.type) {
                case '@comments/create': {
                    return {
                        ...state,
                        comments: [
                            ...state.comments,
                            action.payload,
                        ]
                    } as InitialStateType
                }
                default: {
                    return state
                }
            }
        }
    )())
)

const reducers = combineReducers({
    comments: commentsReducer,
})

export default reducers

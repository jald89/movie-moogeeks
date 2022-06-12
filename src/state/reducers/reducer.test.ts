import { InitialStateType, commentsReducer, PayloadType } from './Reducer'

describe('reducer', () => {
    test('reducer add comment', () => {
        const state: InitialStateType = {
            comments: [],
        }
        const action: PayloadType = {
            type: '@comments/create',
            payload: {
                id: '1',
                title: 'Avengers: Endgame',
                movieId: '299534',
                ratingValue: 5,
                comment: "Amaizing...",
                poster: "or06FN3Dka5tukK1e9sl16pB3iy.jpg",
                createdAt: '1655058207',
            }
        }
        const newState = commentsReducer(state, action)
        expect(newState.comments.length).toBe(1)
        expect(newState).toEqual({
            comments: [
                {
                    id: '1',
                    title: 'Avengers: Endgame',
                    movieId: '299534',
                    ratingValue: 5,
                    comment: "Amaizing...",
                    poster: "or06FN3Dka5tukK1e9sl16pB3iy.jpg",
                    createdAt: '1655058207',
                }
            ]
        })
    })
})
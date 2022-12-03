import { createSlice } from '@reduxjs/toolkit'

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: []
    reducers: {
        addContact (state, action) {
            state.push({
                key: action.payload.key,
                name: action.payload.name,
                phoneNumber: action.payload.phoneNumber,
                image: action.payload.image
            })
        },

        deleteBoard (state, action) {
            return state.filter((board) => board.id !== action.payload.id)
        },

        editBoard (state, action) {
            const board = state.find((board) => board.id === action.payload.id)
            if (action.payload.thumbnailImage) {
                board.thumbnailImage = action.payload.thumbnailImage
            }
            if (action.payload.name) {
                board.name = action.payload.name
            }
        }
    }
})

export const { addBoard, deleteBoard, editBoard } = contactsSlice.actions

export default contactsSlice.reducer

// features/loginSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        openLoginDialog: (state) => {
            state.isOpen = true
        },
        closeLoginDialog: (state) => {
            state.isOpen = false
        }
    }
})

export const { openLoginDialog, closeLoginDialog } = loginSlice.actions

export default loginSlice.reducer

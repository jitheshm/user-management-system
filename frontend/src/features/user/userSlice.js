import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    verified: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        verify: (state, action) => {
            console.log(action.payload);
            state.name = action.payload.name 
            state.verified = true
        }
    }
})

export const { verify} = userSlice.actions
export default userSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false
};

const authApiSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticated = true
        },
        logout:(state)=>{
            state.user = null
            state.token=null
            state.isAuthenticated=false
        }
    }
})

export const {
    setCredentials,
    logout
} = authApiSlice.actions;

export default authApiSlice.reducer
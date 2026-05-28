import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice'
import themeSlice from '../features/theme/themeSlice'
import usersReducer from "../features/users/userSlice"
import postSlice from "../features/posts/postsSlice"
import {apiSlice} from '../features/api/apiSlice'
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
    reducer:{
        counter : counterSlice,
        theme:themeSlice,
        users:usersReducer,
        posts:postSlice,
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth: authReducer
    },
    middleware:
    (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiSlice.middleware)
})
setupListeners(store.dispatch);
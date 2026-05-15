import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice'
import themeSlice from '../features/theme/themeSlice'
import usersReducer from "../features/users/userSlice"
export const store = configureStore({
    reducer:{
        counter : counterSlice,
        theme:themeSlice,
        users:usersReducer
    }
})
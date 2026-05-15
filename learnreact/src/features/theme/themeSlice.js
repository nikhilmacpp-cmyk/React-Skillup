import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'light'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) =>{ 
            if(state.mode !== 'light'){
                state.mode = 'light'
            }else{
                state.mode = 'dark'
            } 
        }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer
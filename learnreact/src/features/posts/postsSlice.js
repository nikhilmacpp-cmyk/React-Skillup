import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    post: null,
    error: null
}

export const addPost = createAsyncThunk(
    "posts/addPost",
    async (postData) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method: 'POST',
                headers: {
                    "Content-Type":
                        "application/json"
                },
                body: JSON.stringify(postData)
            }
        )
        const data = await response.json();
        return data
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            addPost.pending,
            (state) => {
                state.loading = true
            }
        )
        builder.addCase(
            addPost.fulfilled,

            (state, action) => {

                state.loading = false

                state.post = action.payload

            }
        )

        builder.addCase(
            addPost.rejected,

            (state, action) => {

                state.loading = false

                state.error =
                    action.error.message

            }
        )
    }
})
export default postSlice.reducer
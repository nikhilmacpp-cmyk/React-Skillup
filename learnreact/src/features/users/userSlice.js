import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    user:[],
    loading:false,
    error:null
}
export const fetchUser=createAsyncThunk(
    "users/fetchUsers",
    async () =>{
       const response = await fetch("https://jsonplaceholder.typicode.com/users");  
       const data = await response.json();
       return data 
    }
)

 const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(
            fetchUser.pending,
            (state)=>{
                state.loading = true
            }
        )
        builder.addCase(
            fetchUser.fulfilled,
            (state,action)=>{
                state.loading = false;
                state.user = action.payload
            }
        )
        builder.addCase(
            fetchUser.rejected,
            (state,action)=>{
                state.loading = false;
                state.error = action.error.message
            }
        )
    }
})

export default userSlice.reducer
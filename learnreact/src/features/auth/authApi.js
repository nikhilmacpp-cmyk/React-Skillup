import {apiSlice} from "../api/apiSlice";

export const authApi = 
apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        loginUser:
            builder.mutation({
                query:(credentials)=>({
                    url:"/posts",
                    method:"POST",
                    body:credentials
                })
            })
    })
})

export const {
    useLoginUserMutation
} = authApi
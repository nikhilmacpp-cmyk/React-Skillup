import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath:'api',
    tagTypes:["Users"],
    baseQuery:fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com"
    }),
    endpoints:(builder)=>({
        getUsers:builder.query({
            query:()=>"/users",
            providesTags:["Users"]
        }),

        addPost:builder.mutation({
        query:(newpost)=>({
            url:'/posts',
            method:'POST',
            body:newpost
        }),
        invalidatesTags:["Users"]
    })
    }),
})

export const {
  useGetUsersQuery,
  useAddPostMutation
} = apiSlice
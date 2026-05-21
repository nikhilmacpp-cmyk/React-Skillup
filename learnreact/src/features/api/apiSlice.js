import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com"
    }),
    endpoints:(builder)=>({
        getUsers:builder.query({
            query:()=>"/users"
        }),

        addPost:builder.mutation({
        query:(newpost)=>({
            url:'/posts',
            method:'POST',
            body:newpost
        })
    })
    })
})

export const {
  useGetUsersQuery,
  useAddPostMutation
} = apiSlice
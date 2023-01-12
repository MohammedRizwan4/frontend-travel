import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const authService = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:7800/api/"
    }),
    endpoints: (builder) => {
        return {
            authRegister: builder.mutation({
                query: (data) => {
                    return {
                        url: 'register',
                        method: 'POST',
                        body: data
                    }
                }
            })
        }
    }
})

export const { useAuthRegisterMutation } = authService;

export default authService;


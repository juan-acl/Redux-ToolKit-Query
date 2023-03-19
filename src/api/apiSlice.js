import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// fetchBaseQuery sirve para hacer las peticiones en vez de usar axios o fetch.
// React toolkit query se dice que vienen todos los datos desde un servidor. 


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: (builder) => ({ //Aqui se crean peticiones HTTP
    getTask: builder.query({
      query: () => '/tasks',
      providesTags: ['GetTasks'],
      transformResponse: response => response.sort((a, b) => b.id - a.id) //transformResponse sirve para manipular los datos del get
    }),
    postTask: builder.mutation({
      query: (newTask) => ({
        url: '/tasks',
        method: 'POST',
        body: newTask
      }),
      invalidatesTags: ['GetTasks']
    }),
    putTask: builder.mutation({
      query: (updateTask) => ({
        url: '/tasks/' + updateTask.id,
        method: 'PUT',
        body: updateTask,
      }),
      invalidatesTags: ['GetTasks']
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: '/tasks/' + id,
        method: 'DELETE',
      }),
      invalidatesTags: ['GetTasks']
    })
  })
});

export const { useGetTaskQuery, usePostTaskMutation, useDeleteTaskMutation, usePutTaskMutation} = apiSlice 

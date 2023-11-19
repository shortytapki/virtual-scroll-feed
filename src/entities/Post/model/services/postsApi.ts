import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Post } from '@entities/Post';

const POSTS_PAGE_LIMIT = 10;

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getPostsPage: builder.query<Post[], number>({
      query: (page) => `posts?_page=${page}&_limit=${POSTS_PAGE_LIMIT}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge(currentCacheData, responseData) {
        currentCacheData.push(...responseData);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPostById: builder.query<Post, string | undefined>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsPageQuery, useGetPostByIdQuery } = postsApi;

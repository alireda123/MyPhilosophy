/* eslint-disable quotes */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiforposts = createApi({
  reducerPath: "apiforposts",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getPost: build.query<any, void>({
      query: () => `/Posts`,
      providesTags: ["Posts"]
    }),
    getPostById: build.query<any, void>({
      query: (Id) => `/Posts/${Id}`,
      providesTags: ["Posts"]
    }),
    getPostByTopic: build.query<any, any>({
      query: (Topic) => `${Topic}`,
      providesTags: ["Posts"]
    }),
    getPostByUser: build.query<any, void>({
      query: () => "/User/userPosts",
      providesTags: ["Posts"]
    }),
    getUserData: build.query<any, void>({
      query: () => `/User`,
      providesTags: ["Posts"]
    }),
    createPost: build.mutation<any, object>({
      query: (post) => ({
        url: `/Posts`,
        method: `POST`,
        body: post,
      }),
      invalidatesTags: [{type: "Posts"}]
    }),
    createPostComment: build.mutation<any, any>({
      query: (comment) => ({
        url: `/Posts/Islamic/${comment.postId}`,
        method: `POST`,
        body: comment,
      }),
      invalidatesTags: [{type: "Posts"}]
    }),
  }),
});

export const { useGetPostQuery, useGetPostByIdQuery, useGetPostByTopicQuery, useGetUserDataQuery, useGetPostByUserQuery, useCreatePostMutation, useCreatePostCommentMutation } = apiforposts;

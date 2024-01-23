/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostTableApi_01_23_24Input = {
  id: string,
  title: string,
  content: string,
  username?: string | null,
  coverImage?: string | null,
};

export type PostTableApi_01_23_24 = {
  __typename: "PostTableApi_01_23_24",
  id: string,
  title: string,
  content: string,
  username?: string | null,
  coverImage?: string | null,
};

export type UpdatePostTableApi_01_23_24Input = {
  id: string,
  title?: string | null,
  content?: string | null,
  username?: string | null,
  coverImage?: string | null,
};

export type DeletePostTableApi_01_23_24Input = {
  id: string,
};

export type TablePostTableApi_01_23_24FilterInput = {
  id?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  content?: TableStringFilterInput | null,
  username?: TableStringFilterInput | null,
  coverImage?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type PostTableApi_01_23_24Connection = {
  __typename: "PostTableApi_01_23_24Connection",
  items?:  Array<PostTableApi_01_23_24 | null > | null,
  nextToken?: string | null,
};

export type CreatePostTableApi_01_23_24MutationVariables = {
  input: CreatePostTableApi_01_23_24Input,
};

export type CreatePostTableApi_01_23_24Mutation = {
  createPostTableApi_01_23_24?:  {
    __typename: "PostTableApi_01_23_24",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
  } | null,
};

export type UpdatePostTableApi_01_23_24MutationVariables = {
  input: UpdatePostTableApi_01_23_24Input,
};

export type UpdatePostTableApi_01_23_24Mutation = {
  updatePostTableApi_01_23_24?:  {
    __typename: "PostTableApi_01_23_24",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
  } | null,
};

export type DeletePostTableApi_01_23_24MutationVariables = {
  input: DeletePostTableApi_01_23_24Input,
};

export type DeletePostTableApi_01_23_24Mutation = {
  deletePostTableApi_01_23_24?:  {
    __typename: "PostTableApi_01_23_24",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
  } | null,
};

export type GetPostTableApi_01_23_24QueryVariables = {
  id: string,
};

export type GetPostTableApi_01_23_24Query = {
  getPostTableApi_01_23_24?:  {
    __typename: "PostTableApi_01_23_24",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
  } | null,
};

export type ListPostTableApi_01_23_24sQueryVariables = {
  filter?: TablePostTableApi_01_23_24FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostTableApi_01_23_24sQuery = {
  listPostTableApi_01_23_24s?:  {
    __typename: "PostTableApi_01_23_24Connection",
    items?:  Array< {
      __typename: "PostTableApi_01_23_24",
      id: string,
      title: string,
      content: string,
      username?: string | null,
      coverImage?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostTableApi_01_23_24SubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  username?: string | null,
  coverImage?: string | null,
};

export type OnCreatePostTableApi_01_23_24Subscription = {
  onCreatePostTableApi_01_23_24?:  {
    __typename: "PostTableApi_01_23_24",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
  } | null,
};

export type OnUpdatePostTableApi_01_23_24SubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  username?: string | null,
  coverImage?: string | null,
};

export type OnUpdatePostTableApi_01_23_24Subscription = {
  onUpdatePostTableApi_01_23_24?:  {
    __typename: "PostTableApi_01_23_24",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
  } | null,
};

export type OnDeletePostTableApi_01_23_24SubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  username?: string | null,
  coverImage?: string | null,
};

export type OnDeletePostTableApi_01_23_24Subscription = {
  onDeletePostTableApi_01_23_24?:  {
    __typename: "PostTableApi_01_23_24",
    id: string,
    title: string,
    content: string,
    username?: string | null,
    coverImage?: string | null,
  } | null,
};

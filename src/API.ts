/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostDataModelTestingInput = {
  title: string,
  content: string,
  coverImage?: string | null,
  username?: string | null,
  id?: string | null,
};

export type PostDataModelTesting = {
  __typename: "PostDataModelTesting",
  id?: string | null,
  title: string,
  content: string,
  coverImage?: string | null,
  username?: string | null,
};

export type UpdatePostDataModelTestingInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  coverImage?: string | null,
};

export type DeletePostDataModelTestingInput = {
  id: string,
};

export type TablePostDataModelTestingFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  content?: TableStringFilterInput | null,
  coverImage?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
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
};

export type PostDataModelTestingConnection = {
  __typename: "PostDataModelTestingConnection",
  items?:  Array<PostDataModelTesting | null > | null,
  nextToken?: string | null,
};

export type CreatePostDataModelTestingMutationVariables = {
  input: CreatePostDataModelTestingInput,
};

export type CreatePostDataModelTestingMutation = {
  createPostDataModelTesting?:  {
    __typename: "PostDataModelTesting",
    id?: string | null,
    title: string,
    content: string,
    coverImage?: string | null,
    username?: string | null,
  } | null,
};

export type UpdatePostDataModelTestingMutationVariables = {
  input: UpdatePostDataModelTestingInput,
};

export type UpdatePostDataModelTestingMutation = {
  updatePostDataModelTesting?:  {
    __typename: "PostDataModelTesting",
    id?: string | null,
    title: string,
    content: string,
    coverImage?: string | null,
    username?: string | null,
  } | null,
};

export type DeletePostDataModelTestingMutationVariables = {
  input: DeletePostDataModelTestingInput,
};

export type DeletePostDataModelTestingMutation = {
  deletePostDataModelTesting?:  {
    __typename: "PostDataModelTesting",
    id?: string | null,
    title: string,
    content: string,
    coverImage?: string | null,
    username?: string | null,
  } | null,
};

export type GetPostDataModelTestingQueryVariables = {
  id: string,
};

export type GetPostDataModelTestingQuery = {
  getPostDataModelTesting?:  {
    __typename: "PostDataModelTesting",
    id?: string | null,
    title: string,
    content: string,
    coverImage?: string | null,
    username?: string | null,
  } | null,
};

export type ListPostDataModelTestingsQueryVariables = {
  filter?: TablePostDataModelTestingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostDataModelTestingsQuery = {
  listPostDataModelTestings?:  {
    __typename: "PostDataModelTestingConnection",
    items?:  Array< {
      __typename: "PostDataModelTesting",
      id?: string | null,
      title: string,
      content: string,
      coverImage?: string | null,
      username?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostDataModelTestingSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  coverImage?: string | null,
};

export type OnCreatePostDataModelTestingSubscription = {
  onCreatePostDataModelTesting?:  {
    __typename: "PostDataModelTesting",
    id?: string | null,
    title: string,
    content: string,
    coverImage?: string | null,
    username?: string | null,
  } | null,
};

export type OnUpdatePostDataModelTestingSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  coverImage?: string | null,
};

export type OnUpdatePostDataModelTestingSubscription = {
  onUpdatePostDataModelTesting?:  {
    __typename: "PostDataModelTesting",
    id?: string | null,
    title: string,
    content: string,
    coverImage?: string | null,
    username?: string | null,
  } | null,
};

export type OnDeletePostDataModelTestingSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  coverImage?: string | null,
};

export type OnDeletePostDataModelTestingSubscription = {
  onDeletePostDataModelTesting?:  {
    __typename: "PostDataModelTesting",
    id?: string | null,
    title: string,
    content: string,
    coverImage?: string | null,
    username?: string | null,
  } | null,
};

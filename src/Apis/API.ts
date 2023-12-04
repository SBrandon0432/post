/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMyPostTableInput = {
  partitionKey: string,
  userName?: string | null,
  title: string,
  coverImage?: string | null,
  content: string,
};

export type MyPostTable = {
  __typename: "MyPostTable",
  partitionKey: string,
  userName?: string | null,
  title: string,
  coverImage?: string | null,
  content: string,
};

export type UpdateMyPostTableInput = {
  partitionKey: string,
  userName?: string | null,
  title?: string | null,
  coverImage?: string | null,
  content?: string | null,
};

export type DeleteMyPostTableInput = {
  partitionKey: string,
};

export type TableMyPostTableFilterInput = {
  partitionKey?: TableIDFilterInput | null,
  userName?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  coverImage?: TableStringFilterInput | null,
  content?: TableStringFilterInput | null,
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

export type MyPostTableConnection = {
  __typename: "MyPostTableConnection",
  items?:  Array<MyPostTable | null > | null,
  nextToken?: string | null,
};

export type CreateMyPostTableMutationVariables = {
  input: CreateMyPostTableInput,
};

export type CreateMyPostTableMutation = {
  createMyPostTable?:  {
    __typename: "MyPostTable",
    partitionKey: string,
    userName?: string | null,
    title: string,
    coverImage?: string | null,
    content: string,
  } | null,
};

export type UpdateMyPostTableMutationVariables = {
  input: UpdateMyPostTableInput,
};

export type UpdateMyPostTableMutation = {
  updateMyPostTable?:  {
    __typename: "MyPostTable",
    partitionKey: string,
    userName?: string | null,
    title: string,
    coverImage?: string | null,
    content: string,
  } | null,
};

export type DeleteMyPostTableMutationVariables = {
  input: DeleteMyPostTableInput,
};

export type DeleteMyPostTableMutation = {
  deleteMyPostTable?:  {
    __typename: "MyPostTable",
    partitionKey: string,
    userName?: string | null,
    title: string,
    coverImage?: string | null,
    content: string,
  } | null,
};

export type GetMyPostTableQueryVariables = {
  partitionKey: string,
};

export type GetMyPostTableQuery = {
  getMyPostTable?:  {
    __typename: "MyPostTable",
    partitionKey: string,
    userName?: string | null,
    title: string,
    coverImage?: string | null,
    content: string,
  } | null,
};

export type ListMyPostTablesQueryVariables = {
  filter?: TableMyPostTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMyPostTablesQuery = {
  listMyPostTables?:  {
    __typename: "MyPostTableConnection",
    items?:  Array< {
      __typename: "MyPostTable",
      partitionKey: string,
      userName?: string | null,
      title: string,
      coverImage?: string | null,
      content: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMyPostTableSubscriptionVariables = {
  partitionKey?: string | null,
  userName?: string | null,
  title?: string | null,
  coverImage?: string | null,
  content?: string | null,
};

export type OnCreateMyPostTableSubscription = {
  onCreateMyPostTable?:  {
    __typename: "MyPostTable",
    partitionKey: string,
    userName?: string | null,
    title: string,
    coverImage?: string | null,
    content: string,
  } | null,
};

export type OnUpdateMyPostTableSubscriptionVariables = {
  partitionKey?: string | null,
  userName?: string | null,
  title?: string | null,
  coverImage?: string | null,
  content?: string | null,
};

export type OnUpdateMyPostTableSubscription = {
  onUpdateMyPostTable?:  {
    __typename: "MyPostTable",
    partitionKey: string,
    userName?: string | null,
    title: string,
    coverImage?: string | null,
    content: string,
  } | null,
};

export type OnDeleteMyPostTableSubscriptionVariables = {
  partitionKey?: string | null,
  userName?: string | null,
  title?: string | null,
  coverImage?: string | null,
  content?: string | null,
};

export type OnDeleteMyPostTableSubscription = {
  onDeleteMyPostTable?:  {
    __typename: "MyPostTable",
    partitionKey: string,
    userName?: string | null,
    title: string,
    coverImage?: string | null,
    content: string,
  } | null,
};

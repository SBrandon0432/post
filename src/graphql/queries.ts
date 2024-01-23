/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPostTableApi_01_23_24 = /* GraphQL */ `query GetPostTableApi_01_23_24($id: String!) {
  getPostTableApi_01_23_24(id: $id) {
    id
    title
    content
    username
    coverImage
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPostTableApi_01_23_24QueryVariables,
  APITypes.GetPostTableApi_01_23_24Query
>;
export const listPostTableApi_01_23_24s = /* GraphQL */ `query ListPostTableApi_01_23_24s(
  $filter: TablePostTableApi_01_23_24FilterInput
  $limit: Int
  $nextToken: String
) {
  listPostTableApi_01_23_24s(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      content
      username
      coverImage
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostTableApi_01_23_24sQueryVariables,
  APITypes.ListPostTableApi_01_23_24sQuery
>;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPostDataModelTesting = /* GraphQL */ `query GetPostDataModelTesting($id: ID!) {
  getPostDataModelTesting(id: $id) {
    id
    title
    content
    coverImage
    username
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPostDataModelTestingQueryVariables,
  APITypes.GetPostDataModelTestingQuery
>;
export const listPostDataModelTestings = /* GraphQL */ `query ListPostDataModelTestings(
  $filter: TablePostDataModelTestingFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostDataModelTestings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      content
      coverImage
      username
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostDataModelTestingsQueryVariables,
  APITypes.ListPostDataModelTestingsQuery
>;

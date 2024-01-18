/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPostDataModelTesting = /* GraphQL */ `mutation CreatePostDataModelTesting($input: CreatePostDataModelTestingInput!) {
  createPostDataModelTesting(input: $input) {
    id
    title
    content
    coverImage
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostDataModelTestingMutationVariables,
  APITypes.CreatePostDataModelTestingMutation
>;
export const updatePostDataModelTesting = /* GraphQL */ `mutation UpdatePostDataModelTesting($input: UpdatePostDataModelTestingInput!) {
  updatePostDataModelTesting(input: $input) {
    id
    title
    content
    coverImage
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostDataModelTestingMutationVariables,
  APITypes.UpdatePostDataModelTestingMutation
>;
export const deletePostDataModelTesting = /* GraphQL */ `mutation DeletePostDataModelTesting($input: DeletePostDataModelTestingInput!) {
  deletePostDataModelTesting(input: $input) {
    id
    title
    content
    coverImage
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostDataModelTestingMutationVariables,
  APITypes.DeletePostDataModelTestingMutation
>;

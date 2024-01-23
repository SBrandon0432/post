/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPostTableApi_01_23_24 = /* GraphQL */ `mutation CreatePostTableApi_01_23_24(
  $input: CreatePostTableApi_01_23_24Input!
) {
  createPostTableApi_01_23_24(input: $input) {
    id
    title
    content
    username
    coverImage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostTableApi_01_23_24MutationVariables,
  APITypes.CreatePostTableApi_01_23_24Mutation
>;
export const updatePostTableApi_01_23_24 = /* GraphQL */ `mutation UpdatePostTableApi_01_23_24(
  $input: UpdatePostTableApi_01_23_24Input!
) {
  updatePostTableApi_01_23_24(input: $input) {
    id
    title
    content
    username
    coverImage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostTableApi_01_23_24MutationVariables,
  APITypes.UpdatePostTableApi_01_23_24Mutation
>;
export const deletePostTableApi_01_23_24 = /* GraphQL */ `mutation DeletePostTableApi_01_23_24(
  $input: DeletePostTableApi_01_23_24Input!
) {
  deletePostTableApi_01_23_24(input: $input) {
    id
    title
    content
    username
    coverImage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostTableApi_01_23_24MutationVariables,
  APITypes.DeletePostTableApi_01_23_24Mutation
>;

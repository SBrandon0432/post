/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePostDataModelTesting = /* GraphQL */ `subscription OnCreatePostDataModelTesting(
  $id: ID
  $title: String
  $content: String
  $coverImage: String
) {
  onCreatePostDataModelTesting(
    id: $id
    title: $title
    content: $content
    coverImage: $coverImage
  ) {
    id
    title
    content
    coverImage
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostDataModelTestingSubscriptionVariables,
  APITypes.OnCreatePostDataModelTestingSubscription
>;
export const onUpdatePostDataModelTesting = /* GraphQL */ `subscription OnUpdatePostDataModelTesting(
  $id: ID
  $title: String
  $content: String
  $coverImage: String
) {
  onUpdatePostDataModelTesting(
    id: $id
    title: $title
    content: $content
    coverImage: $coverImage
  ) {
    id
    title
    content
    coverImage
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostDataModelTestingSubscriptionVariables,
  APITypes.OnUpdatePostDataModelTestingSubscription
>;
export const onDeletePostDataModelTesting = /* GraphQL */ `subscription OnDeletePostDataModelTesting(
  $id: ID
  $title: String
  $content: String
  $coverImage: String
) {
  onDeletePostDataModelTesting(
    id: $id
    title: $title
    content: $content
    coverImage: $coverImage
  ) {
    id
    title
    content
    coverImage
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostDataModelTestingSubscriptionVariables,
  APITypes.OnDeletePostDataModelTestingSubscription
>;

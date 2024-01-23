/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePostTableApi_01_23_24 = /* GraphQL */ `subscription OnCreatePostTableApi_01_23_24(
  $id: String
  $title: String
  $content: String
  $username: String
  $coverImage: String
) {
  onCreatePostTableApi_01_23_24(
    id: $id
    title: $title
    content: $content
    username: $username
    coverImage: $coverImage
  ) {
    id
    title
    content
    username
    coverImage
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostTableApi_01_23_24SubscriptionVariables,
  APITypes.OnCreatePostTableApi_01_23_24Subscription
>;
export const onUpdatePostTableApi_01_23_24 = /* GraphQL */ `subscription OnUpdatePostTableApi_01_23_24(
  $id: String
  $title: String
  $content: String
  $username: String
  $coverImage: String
) {
  onUpdatePostTableApi_01_23_24(
    id: $id
    title: $title
    content: $content
    username: $username
    coverImage: $coverImage
  ) {
    id
    title
    content
    username
    coverImage
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostTableApi_01_23_24SubscriptionVariables,
  APITypes.OnUpdatePostTableApi_01_23_24Subscription
>;
export const onDeletePostTableApi_01_23_24 = /* GraphQL */ `subscription OnDeletePostTableApi_01_23_24(
  $id: String
  $title: String
  $content: String
  $username: String
  $coverImage: String
) {
  onDeletePostTableApi_01_23_24(
    id: $id
    title: $title
    content: $content
    username: $username
    coverImage: $coverImage
  ) {
    id
    title
    content
    username
    coverImage
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostTableApi_01_23_24SubscriptionVariables,
  APITypes.OnDeletePostTableApi_01_23_24Subscription
>;

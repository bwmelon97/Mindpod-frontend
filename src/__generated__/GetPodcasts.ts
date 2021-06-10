/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetPodcastsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPodcasts
// ====================================================

export interface GetPodcasts_getAllPodcasts_podcasts_host {
  __typename: "User";
  profileImg: string | null;
}

export interface GetPodcasts_getAllPodcasts_podcasts {
  __typename: "Podcast";
  id: number;
  updatedAt: any;
  title: string;
  host: GetPodcasts_getAllPodcasts_podcasts_host;
  description: string;
}

export interface GetPodcasts_getAllPodcasts {
  __typename: "PodcastsOutput";
  ok: boolean;
  error: string | null;
  podcasts: GetPodcasts_getAllPodcasts_podcasts[] | null;
}

export interface GetPodcasts {
  getAllPodcasts: GetPodcasts_getAllPodcasts;
}

export interface GetPodcastsVariables {
  input: GetPodcastsInput;
}

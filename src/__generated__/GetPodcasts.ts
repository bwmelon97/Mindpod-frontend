/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPodcasts
// ====================================================

export interface GetPodcasts_getAllPodcasts_podcasts_host {
  __typename: "User";
  email: string;
}

export interface GetPodcasts_getAllPodcasts_podcasts {
  __typename: "Podcast";
  id: number;
  updatedAt: any;
  title: string;
  category: string;
  description: string;
  host: GetPodcasts_getAllPodcasts_podcasts_host;
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

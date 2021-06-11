/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetPodcastsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetMyPodcasts
// ====================================================

export interface GetMyPodcasts_getMyPodcasts_podcasts {
  __typename: "Podcast";
  id: number;
  title: string;
  coverImg: string | null;
  updatedAt: any;
  description: string;
}

export interface GetMyPodcasts_getMyPodcasts {
  __typename: "PodcastsOutput";
  ok: boolean;
  error: string | null;
  totalCounts: number | null;
  totalPages: number | null;
  podcasts: GetMyPodcasts_getMyPodcasts_podcasts[] | null;
}

export interface GetMyPodcasts {
  getMyPodcasts: GetMyPodcasts_getMyPodcasts;
}

export interface GetMyPodcastsVariables {
  page: GetPodcastsInput;
}

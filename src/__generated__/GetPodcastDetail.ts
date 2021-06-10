/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPodcastDetail
// ====================================================

export interface GetPodcastDetail_getPodcastForListener_podcast_hashTags {
  __typename: "HashTag";
  name: string;
}

export interface GetPodcastDetail_getPodcastForListener_podcast_host {
  __typename: "User";
  email: string;
}

export interface GetPodcastDetail_getPodcastForListener_podcast_episodes {
  __typename: "Episode";
  id: number;
  title: string;
  createdAt: any;
  rating: number;
  audioFileLink: string;
  category: string;
}

export interface GetPodcastDetail_getPodcastForListener_podcast {
  __typename: "Podcast";
  createdAt: any;
  title: string;
  hashTags: GetPodcastDetail_getPodcastForListener_podcast_hashTags[];
  rating: number[];
  description: string;
  host: GetPodcastDetail_getPodcastForListener_podcast_host;
  episodes: GetPodcastDetail_getPodcastForListener_podcast_episodes[];
}

export interface GetPodcastDetail_getPodcastForListener {
  __typename: "PodcastOutput";
  ok: boolean;
  error: string | null;
  podcast: GetPodcastDetail_getPodcastForListener_podcast | null;
}

export interface GetPodcastDetail {
  getPodcastForListener: GetPodcastDetail_getPodcastForListener;
}

export interface GetPodcastDetailVariables {
  id: number;
}

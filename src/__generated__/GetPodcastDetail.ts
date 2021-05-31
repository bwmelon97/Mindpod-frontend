/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPodcastDetail
// ====================================================

export interface GetPodcastDetail_getPodcast_podcast_host {
  __typename: "User";
  email: string;
}

export interface GetPodcastDetail_getPodcast_podcast_episodes {
  __typename: "Episode";
  id: number;
  title: string;
  createdAt: any;
  rating: number;
  audioFileLink: string;
  category: string;
}

export interface GetPodcastDetail_getPodcast_podcast {
  __typename: "Podcast";
  createdAt: any;
  title: string;
  category: string;
  rating: number;
  description: string;
  host: GetPodcastDetail_getPodcast_podcast_host;
  episodes: GetPodcastDetail_getPodcast_podcast_episodes[];
}

export interface GetPodcastDetail_getPodcast {
  __typename: "PodcastOutput";
  ok: boolean;
  error: string | null;
  podcast: GetPodcastDetail_getPodcast_podcast | null;
}

export interface GetPodcastDetail {
  getPodcast: GetPodcastDetail_getPodcast;
}

export interface GetPodcastDetailVariables {
  id: number;
}

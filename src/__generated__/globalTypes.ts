/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRole {
  Host = "Host",
  Listener = "Listener",
}

export interface CheckEmailInput {
  email: string;
}

export interface CreateAccountInput {
  email: string;
  password: string;
  role: UserRole;
  profileImg?: string | null;
}

export interface GetPodcastsInput {
  page?: number | null;
}

export interface LoginInput {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

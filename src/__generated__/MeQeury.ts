/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRole } from "./globalTypes";

// ====================================================
// GraphQL query operation: MeQeury
// ====================================================

export interface MeQeury_me_user {
  __typename: "UserWithoutPW";
  role: UserRole;
}

export interface MeQeury_me {
  __typename: "SeeProfileOutput";
  ok: boolean;
  error: string | null;
  user: MeQeury_me_user | null;
}

export interface MeQeury {
  me: MeQeury_me;
}

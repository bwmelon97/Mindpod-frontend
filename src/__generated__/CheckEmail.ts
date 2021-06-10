/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckEmailInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CheckEmail
// ====================================================

export interface CheckEmail_checkEmail {
  __typename: "CheckEmailOutput";
  ok: boolean;
  error: string | null;
  isNewEmail: boolean | null;
}

export interface CheckEmail {
  checkEmail: CheckEmail_checkEmail;
}

export interface CheckEmailVariables {
  checkEmailInput: CheckEmailInput;
}

import { makeVar } from '@apollo/client'
import { UserRole } from '@gql-types/globalTypes'

type CreateAccountData = {
    email: string;
    password: string;
    role: UserRole;
    promileImg: string;
}

const defaultValue: CreateAccountData = {
    email: '',
    password: '',
    role: UserRole.Listener,
    promileImg: ''
}

export const createAccountDataVar = makeVar<CreateAccountData>(defaultValue)

type PathValidation = {
    isCheckedEmail: boolean;
    isCheckedDetail: boolean;
}

export const pathVaildationVar = makeVar<PathValidation>({
    isCheckedEmail: false,
    isCheckedDetail: false
})

export { default as HomePage } from './HomePage'
export { default as CreateAccountPage } from './CreateAccountPage'
export { default as LoginPage } from './LoginPage'
import React from "react";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { UserRole } from "@gql-types/globalTypes";
import { CreateAccount, CreateAccountVariables } from "@gql-types/CreateAccount";
import { BaseInput, FormContainer, LogoutPageWrapper } from "@components/FormComponents";
import { EMAIL_PATTERN, LOCALSTORAGE_TOKEN } from "@constants";
import Logo from "@components/Logo";
import { createAccountDataVar, pathVaildationVar } from ".";
import Button from "@components/Button";
import { authTokenVar, isLoggedInVar } from "@apollo-client";


export const CREATE_ACCOUNT_MUTATION = gql`
    mutation CreateAccount( $createAccountInput: CreateAccountInput! ) {
        createAccount(input: $createAccountInput) {
            ok
            error
            token
        }
    }
`;

type CreateAccountFormInput = {
    email: string;
    password: string;
    rePassword: string;
    role: UserRole;
}

function CreateAccountPage () {

    const history = useHistory()
    if ( !pathVaildationVar().isCheckedEmail ) {
        history.replace('/')
    }
    
    const onCompleted = ({ createAccount }: CreateAccount) => {
        const { ok, token } = createAccount;
        if ( ok && token ) {
            localStorage.setItem(LOCALSTORAGE_TOKEN, token)
            authTokenVar(token)
            isLoggedInVar(true)
            history.push('/')
        }
    }
    const [ 
        createAccountMutation, { loading, data: createAccountData } 
    ] = useMutation<CreateAccount, CreateAccountVariables>(CREATE_ACCOUNT_MUTATION, { onCompleted })
    

    const { register, handleSubmit, getValues, formState: { errors, isValid, touchedFields } } = useForm<CreateAccountFormInput>({
        mode: 'onChange',
        defaultValues: {
            email: createAccountDataVar().email,
            role: UserRole.Host
        }
    });

    const onSubmit = () => { 
        if (!loading) {
            const { email, password, role } = getValues();
            createAccountMutation({
                variables: {
                    createAccountInput: {
                        email, password, role
                    }
                }
            })
        }
    }

    return (
        <LogoutPageWrapper>
            <FormContainer>
                <Logo size='xl' />
                <h3 className='mt-4 text-xl' > 명상의 순간을 함께해요 </h3>

                <h4 className='mt-8 self-start text-2xl font-light' > Start Mindpod </h4>
                <h6 className='mt-2 mb-6 self-start text-lg font-light text-gray-600'> 
                    Please Fill in Your Password and Role
                </h6>

                <form className='grid gap-4 w-full mb-5' onSubmit={handleSubmit(onSubmit)} >
                    <BaseInput 
                        {...register('email', {
                            required: 'Email is required.',
                            pattern: EMAIL_PATTERN
                        })}
                        type='email'
                        placeholder='Email'
                    />
                    <BaseInput 
                        {...register('password', {
                            required: 'Password is required.',
                        })}
                        type='password'
                        placeholder='Password'
                        autoFocus={true}
                    />
                    <BaseInput 
                        {...register('rePassword', {
                            required: 'Please check the password.',
                            validate: value => value === getValues('password')
                        })}
                        type='password'
                        placeholder='Confirm Password'
                    />
                    <select
                        {...register('role', {
                            required: 'Role is required.'
                        })}
                        className='w-full px-5 py-3 border border-gray-200 focus:border-lime-700 focus:border-opacity-70 focus:outline-none transition duration-300'
                    >
                        { Object.keys(UserRole).map( (role, idx) => {
                            return (
                                <option key={idx}>
                                    {role}
                                </option>
                            )
                        }) }
                    </select>

                    { touchedFields.email && errors.email?.type === 'pattern' && <p className='text-red-500' role='alert' > Invaild Email Pattern </p> }
                    { errors.email?.type === 'required' && <p className='text-red-500' role='alert'> {errors.email.message} </p> }
                    { errors.password?.type === 'required' && <p className='text-red-500' role='alert'> {errors.password.message} </p> }
                    { errors.rePassword?.type === 'required' && <p className='text-red-500' role='alert'> {errors.rePassword.message} </p> }
                    { touchedFields.rePassword && errors.rePassword?.type === 'validate' && <p className='text-red-500' role='alert'> Passwords are not match each other. </p> }
                    
                    <Button actionText={'Next'} isLoading={loading} isVaild={isValid} />
                    { createAccountData?.createAccount.error && <p className='text-red-500' role='alert'> {createAccountData?.createAccount.error} </p> }
                </form>
            </FormContainer>
        </LogoutPageWrapper>
    )
}

export default CreateAccountPage
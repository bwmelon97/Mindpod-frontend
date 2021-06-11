import React from "react";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { loginMutation, loginMutationVariables } from "@gql-types/loginMutation";
import { EMAIL_PATTERN, LOCALSTORAGE_TOKEN } from "@constants";
import { authTokenVar, isLoggedInVar } from "@apollo-client";
import { useHistory } from "react-router-dom";
import { BaseInput, FormContainer, LogoutPageWrapper } from "@components/FormComponents";
import StyledLink from "@components/StyledLink";
import Logo from "@components/Logo";
import Button from "@components/Button";


export const LOGIN_MUTATION = gql`
    mutation loginMutation($loginInput: LoginInput!) {
        login(input: $loginInput) {
            ok
            error
            token
        }
    }
`

type LoginFormInput = {
    email: string;
    password: string;
}

function LoginPage () {

    const history = useHistory();
    
    const onCompleted = ({ login }: loginMutation) => {
        const { ok, token } = login;
        if (ok && token) {
            localStorage.setItem(LOCALSTORAGE_TOKEN, token)
            authTokenVar(token)
            isLoggedInVar(true)
            history.push('/gate')
        }
    }
    const [
        loginMutation,
        { loading, data: LoginMutationResult }
    ] = useMutation <
        loginMutation, 
        loginMutationVariables
    > (LOGIN_MUTATION, { onCompleted });
    
    const { 
        register, handleSubmit, getValues, 
        formState: { errors, touchedFields, isValid } 
    } = useForm<LoginFormInput>({
        mode: "onChange"
    });
    const onSubmit = () => { 
        if (!loading) {
            const { email, password } = getValues()
            loginMutation({
                variables: {
                    loginInput: { email, password }
                }
            })
        }
    }

    return (
        <LogoutPageWrapper>
            <FormContainer>
                <Logo size='xl' />
                <h3 className='mt-4 text-xl' > 명상의 순간을 함께해요 </h3>

                <h4 className='mt-8 self-start text-2xl font-light' > Welcome back ! </h4>
                <h6 className='mt-2 mb-6 self-start text-lg font-light text-gray-600'> Start with Email and Password </h6>

                <form className='grid gap-6 w-full mb-5' onSubmit={handleSubmit(onSubmit)} >
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
                            required: 'Password is required.'
                        })}
                        type='password'
                        placeholder='Password'
                    />
                    { touchedFields.email && errors.email?.type === 'pattern' && <p className='text-red-500' role='alert' > Invaild Email Pattern </p> }
                    { errors.email?.type === 'required' && <p className='text-red-500' role='alert'> {errors.email.message} </p> }
                    { errors.password?.type === 'required' && <p className='text-red-500' role='alert'> {errors.password.message} </p> }
                    { LoginMutationResult?.login.error && <p className='text-red-500' role='alert'> {LoginMutationResult?.login.error} </p> }
                    
                    <Button isVaild={isValid} isLoading={loading} actionText='Login' />
                </form>
                <div>
                    <span> New to Mindpod? </span> 
                    <StyledLink to='/' linkText='Create Account' />
                </div>
            </FormContainer>
        </LogoutPageWrapper>
    )
}

export default LoginPage
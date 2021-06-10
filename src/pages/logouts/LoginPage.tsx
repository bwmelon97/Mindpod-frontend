import React from "react";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { loginMutation, loginMutationVariables } from "@gql-types/loginMutation";
import { EMAIL_PATTERN, LOCALSTORAGE_TOKEN } from "@constants";
import { authTokenVar, isLoggedInVar } from "@apollo-client";
import { Link, useHistory } from "react-router-dom";
import { BaseInput } from "@components/FormComponents";


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
    const { register, handleSubmit, getValues, formState: { errors } } = useForm<LoginFormInput>({
        mode: "onChange"
    });
    
    const onCompleted = ({ login }: loginMutation) => {
        const { ok, token } = login;
        if (ok && token) {
            localStorage.setItem(LOCALSTORAGE_TOKEN, token)
            authTokenVar(token)
            isLoggedInVar(true)
            history.push('/main')
        }
    }
    const [
        loginMutation,
        { loading, data: LoginMutationResult }
    ] = useMutation<loginMutation, loginMutationVariables>(LOGIN_MUTATION, { onCompleted });
    
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
        <div className='bg-gray-200 flex justify-center h-screen items-center'>
            <div className='bg-white w-full max-w-xl flex flex-col items-center py-16 px-10 shadow-xl rounded-xl'>
                <h3 className='mb-10 text-2xl font-light select-none' > Login </h3>
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
                    { errors.email?.message && <p className='text-red-500' role='alert' > {errors.email.message} </p> }
                    { errors.email?.type === 'pattern' && <p className='text-red-500' role='alert' > Invaild Email Pattern </p> }
                    { errors.password?.message && <p className='text-red-500' role='alert'> {errors.password.message} </p> }
                    <button
                        className='w-full px-5 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white focus:outline-none'
                        role='button'
                    > 
                        { loading ? 'Loading...' : 'Login' } 
                    </button>
                    { LoginMutationResult?.login.error && <p className='text-red-500' role='alert'> {LoginMutationResult?.login.error} </p> }
                </form>
                <div>
                    <span> New to Mindpod? </span> 
                    <Link to='/' className='text-purple-600 hover:underline' > Create Account </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
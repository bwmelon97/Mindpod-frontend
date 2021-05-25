import React from "react";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { loginMutation, loginMutationVariables } from "../__generated__/loginMutation";


const LOGIN_MUTATION = gql`
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

    const { register, handleSubmit, getValues, formState: { errors } } = useForm<LoginFormInput>();
    
    const onCompleted = ({ login }: loginMutation) => {
        console.log( login.token )
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
                <form className='grid gap-6 w-full' onSubmit={handleSubmit(onSubmit)} >
                    <input 
                        {...register('email', {
                            required: 'Email is required.'
                        })}
                        type='email'
                        className='w-full px-5 py-3 rounded-md ring-2 ring-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none'
                        placeholder='Email'
                    />
                    <input 
                        {...register('password', {
                            required: 'Password is required.'
                        })}
                        type='password'
                        className='w-full px-5 py-3 rounded-md ring-2 ring-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none'
                        placeholder='Password'
                    />
                    { errors.email?.message && <p className='text-red-500'> {errors.email.message} </p> }
                    { errors.password?.message && <p className='text-red-500'> {errors.password.message} </p> }
                    <button
                        className='w-full px-5 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white focus:outline-none'
                    > 
                        { loading ? 'Loading...' : 'Login' } 
                    </button>
                    { LoginMutationResult?.login.error && <p className='text-red-500'> {LoginMutationResult?.login.error} </p> }
                </form>
            </div>
        </div>
    )
}

export default LoginPage
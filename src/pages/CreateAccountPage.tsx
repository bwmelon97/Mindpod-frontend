import React from "react";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { UserRole } from "../__generated__/globalTypes";
import { CreateAccount, CreateAccountVariables } from "../__generated__/CreateAccount";


const CREATE_ACCOUNT_MUTATION = gql`
    mutation CreateAccount( $createAccountInput: CreateAccountInput! ) {
        createAccount(input: $createAccountInput) {
            ok
            error
        }
    }
`;

type CreateAccountFormInput = {
    email: string;
    password: string;
    role: UserRole;
}

function CreateAccountPage () {

    const { register, handleSubmit, getValues, formState: { errors } } = useForm<CreateAccountFormInput>();

    const onCompleted = ({ createAccount }: CreateAccount) => {
        const { ok } = createAccount;
        if ( ok ) {
            console.log('Success to Create Account')
        }
    }
    const [ 
        createAccountMutation, { loading, data: createAccountData } 
    ] = useMutation<CreateAccount, CreateAccountVariables>(CREATE_ACCOUNT_MUTATION, { onCompleted })

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
        <div className='bg-gray-200 flex justify-center h-screen items-center'>
            <div className='bg-white w-full max-w-xl flex flex-col items-center py-16 px-10 shadow-xl rounded-xl'>
                <h3 className='mb-10 text-2xl font-light select-none' > Create Account </h3>
                <form className='grid gap-6 w-full mb-5' onSubmit={handleSubmit(onSubmit)} >
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
                    <select
                        {...register('role', {
                            required: 'Role is required.'
                        })}
                        className='w-full px-5 py-3 rounded-md ring-2 ring-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none'
                    >
                        { Object.keys(UserRole).map( (role, idx) => {
                            return (
                                <option key={idx}>
                                    {role}
                                </option>
                            )
                        }) }
                    </select>
                    { errors.email?.message && <p className='text-red-500'> {errors.email.message} </p> }
                    { errors.password?.message && <p className='text-red-500'> {errors.password.message} </p> }
                    { errors.role?.message && <p className='text-red-500'> {errors.role.message} </p> }
                    { createAccountData?.createAccount.error && <p className='text-red-500'> {createAccountData?.createAccount.error} </p> }
                    <button
                        className='w-full px-5 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white focus:outline-none'
                    > 
                        { loading ? 'Loading...' : 'Create Account' } 
                    </button>
                </form>
                <div>
                    <span> Do you have account? </span> 
                    <Link to='/login' className='text-purple-600 hover:underline' > Login </Link>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountPage
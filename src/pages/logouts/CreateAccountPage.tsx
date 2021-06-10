import React from "react";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { UserRole } from "@gql-types/globalTypes";
import { CreateAccount, CreateAccountVariables } from "@gql-types/CreateAccount";
import { BaseInput } from "@components/FormComponents";
import { EMAIL_PATTERN } from "@constants";
import Logo from "@components/Logo";


export const CREATE_ACCOUNT_MUTATION = gql`
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

    const { register, handleSubmit, getValues, formState: { errors } } = useForm<CreateAccountFormInput>({
        mode: 'onChange',
        defaultValues: {
            role: UserRole.Listener
        }
    });

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
        <div className='flex justify-center h-screen'>
            <div className='bg-white w-full max-w-xl flex flex-col items-center pt-10 px-10 lg:pt-20'>
                <Logo size='xl' />
                <h3 className='mt-4 text-xl' > 명상의 순간을 함께해요 </h3>


                <h3 className='mb-10 text-2xl font-light select-none' > </h3>
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
                    { errors.email?.message && <p className='text-red-500' role='alert'> {errors.email.message} </p> }
                    { errors.email?.type === 'pattern' && <p className='text-red-500' role='alert' > Invaild Email Pattern </p> }
                    { errors.password?.message && <p className='text-red-500' role='alert'> {errors.password.message} </p> }
                    <button
                        className='w-full px-5 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white focus:outline-none'
                    > 
                        { loading ? 'Loading...' : 'Create Account' } 
                    </button>
                    { createAccountData?.createAccount.error && <p className='text-red-500' role='alert'> {createAccountData?.createAccount.error} </p> }
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
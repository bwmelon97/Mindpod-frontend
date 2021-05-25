import React from "react";
import { useForm } from "react-hook-form";


type LoginFormInput = {
    email: string;
    password: string;
}

function LoginPage () {

    const { register, handleSubmit, getValues, formState: { errors } } = useForm<LoginFormInput>();
    const onSubmit = () => { console.log(getValues()) }

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
                        Login 
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
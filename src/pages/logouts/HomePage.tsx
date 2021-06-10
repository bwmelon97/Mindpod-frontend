import React from "react";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { BaseInput, FormContainer, LogoutPageWrapper } from "@components/FormComponents";
import { EMAIL_PATTERN } from "@constants";
import Logo from "@components/Logo";
import { CheckEmail, CheckEmailVariables } from "@gql-types/CheckEmail";
import Button from "@components/Button";
import { createAccountDataVar, pathVaildationVar } from ".";
import StyledLink from "@components/StyledLink";


export const CREATE_ACCOUNT_MUTATION = gql`
    mutation CheckEmail( $checkEmailInput: CheckEmailInput! ) {
        checkEmail(input: $checkEmailInput) {
            ok
            error
            isNewEmail
        }
    }
`;

type EmailInput = {
    email: string;
}

function HomePage () {

    const history = useHistory();    
    const { register, handleSubmit, getValues, formState: { errors, isValid, touchedFields } } = useForm<EmailInput>({
        mode: 'onChange',
    });

    const onCompleted = ({ checkEmail }: CheckEmail) => {
        const { ok, isNewEmail } = checkEmail;
        if ( ok && isNewEmail ) {
            createAccountDataVar({
                ...createAccountDataVar(),
                email: getValues('email')
            })
            pathVaildationVar({
                isCheckedEmail: true,
                isCheckedDetail: false
            })
            history.push('/create-account')
        }
    }
    const [ 
        createAccountMutation, { loading, data: checkEmailResult } 
    ] = useMutation<CheckEmail, CheckEmailVariables>(CREATE_ACCOUNT_MUTATION, { onCompleted })

    const onSubmit = () => { 
        if (!loading) {
            const { email } = getValues();
            createAccountMutation({
                variables: {
                    checkEmailInput: {
                        email
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
                <h6 className='mt-2 mb-6 self-start text-lg font-light text-gray-600'> Please Write Your Email (required) </h6>


                <form className='grid gap-6 w-full mb-5' onSubmit={handleSubmit(onSubmit)} >
                    <BaseInput 
                        {...register('email', {
                            required: 'Email is required.',
                            pattern: EMAIL_PATTERN
                        })}
                        type='email'
                        placeholder='Email'
                    />
                    { touchedFields.email && errors.email?.type === 'pattern' && <p className='text-red-500' role='alert' > Invaild Email Pattern </p> }
                    { errors.email?.type === 'required' && <p className='text-red-500' role='alert'> {errors.email.message} </p> }
                    { checkEmailResult?.checkEmail.error && <p className='text-red-500' role='alert'> {checkEmailResult?.checkEmail.error} </p> }
                    { checkEmailResult?.checkEmail.isNewEmail === false && <p className='text-red-500' role='alert'> User with that email has already existed. </p> }
                    
                    <Button isVaild={isValid} isLoading={loading} actionText='Next' />
                </form>
                <div>
                    <span> Do you have account? </span> 
                    <StyledLink to='/login' linkText='Login' />
                </div>
            </FormContainer>
        </LogoutPageWrapper>
    )
}

export default HomePage
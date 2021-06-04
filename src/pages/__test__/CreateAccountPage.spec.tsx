import { ApolloProvider } from "@apollo/client";
import { UserRole } from "@gql-types/globalTypes";
import { CreateAccountPage } from "@pages";
import { CREATE_ACCOUNT_MUTATION } from "@pages/CreateAccountPage";
import { render, RenderResult, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMockClient, MockApolloClient } from "mock-apollo-client";
import { BrowserRouter } from "react-router-dom";


describe('<CreateAccountPage />', () => {
    let renderResult: RenderResult;
    let mockClient: MockApolloClient

    beforeEach(async () => {
        await waitFor(() => {
            mockClient = createMockClient()
            renderResult = render (
                <ApolloProvider client={mockClient} >
                    <BrowserRouter>
                        <CreateAccountPage />
                    </BrowserRouter>
                </ApolloProvider>
            ) 
        })
    })
    
    it('should render ok', () => {
        const { getAllByText } = renderResult
        getAllByText(/account/i);
    })

    it('Display form errors', async () => {
        const { getByPlaceholderText, getByRole } = renderResult;
        const emailInput = getByPlaceholderText(/email/i)
        const submitBtn = getByRole('button')

        await waitFor(() => {
            userEvent.type(emailInput, 'Invaild@EmailInput')
        })
        let errorMsg = getByRole('alert');
        expect(errorMsg).toHaveTextContent('Invaild Email Pattern')

        await waitFor(() => {
            userEvent.clear(emailInput)
        })
        errorMsg = getByRole('alert');
        expect(errorMsg).toHaveTextContent('Email is required')

        await waitFor(() => {
            userEvent.type(emailInput, 'vaild@Email.com')
            userEvent.click(submitBtn)
        })
        errorMsg = getByRole('alert');
        expect(errorMsg).toHaveTextContent('Password is required')
    })

    it('Submits form & Call Mutation', async () => {
        const { getByPlaceholderText, getByRole } = renderResult;
        const emailInput = getByPlaceholderText(/email/i)
        const passwordInput = getByPlaceholderText(/password/i)
        const submitBtn = getByRole('button')
        
        const formData = {
            email: 'vaild@email.com',
            password: '1234',
            role: UserRole.Listener
        }

        const mockedMutationResponse = jest.fn().mockResolvedValue({
            data: {
                createAccount: {
                    ok: true,
                    error: 'oh no'
                }
            }
        })
        mockClient.setRequestHandler(CREATE_ACCOUNT_MUTATION, mockedMutationResponse)

        await waitFor(() => {
            userEvent.type(emailInput, formData.email)
            userEvent.type(passwordInput, formData.password)
            userEvent.click(submitBtn)
        })

        expect(mockedMutationResponse).toHaveBeenCalledTimes(1);
        expect(mockedMutationResponse).toHaveBeenCalledWith({
            createAccountInput: { ...formData }
        });

        const errorMsg = getByRole('alert');
        expect(errorMsg).toHaveTextContent('oh no')
        expect(submitBtn).toHaveTextContent(/create account/i);
    })
})
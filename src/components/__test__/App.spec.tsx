import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { isLoggedInVar } from '@apollo-client'
import App from '@components/App'


const LOGGED_OUT = 'logged-out'
const LOGGED_IN  = 'logged-in'

jest.mock(
    '@routers/LoggedOutRouter', 
    () => () => <span> {LOGGED_OUT} </span>
)
jest.mock(
    '@routers/LoggedInRouter', 
    () => () => <span> {LOGGED_IN} </span>
)

describe("<App />", () => {
    it('should be render <LoggedOutRouter />', () => {
        const { getByText } = render( <App /> )
        getByText(LOGGED_OUT)
    })
    it('should be render <LoggedInRouter />', async () => {
        const { getByText } = render( <App /> )
        await waitFor(() => {
            isLoggedInVar(true);
        })
        getByText(LOGGED_IN)
    })
})
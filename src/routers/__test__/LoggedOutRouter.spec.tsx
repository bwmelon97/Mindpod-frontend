import { MockedProvider } from "@apollo/client/testing";
import { LoggedOutRouter } from "@routers"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"


describe('<LoggedOutRouter />', () => {
    it('should render OK', () => {
        const { getByText, debug } = render(
        <BrowserRouter>
            <MockedProvider>
                <LoggedOutRouter />
            </MockedProvider>
        </BrowserRouter>
        )
        getByText(/login/i)
    })
})
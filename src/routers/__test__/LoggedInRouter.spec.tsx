import { MockedProvider } from "@apollo/client/testing";
import { LoggedInRouter } from "@routers"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"


describe('<LoggedInRouter />', () => {
    it('should render OK', () => {
        const { getByText } = render(
        <BrowserRouter>
            <MockedProvider>
                <LoggedInRouter />
            </MockedProvider>
        </BrowserRouter>
        )
        getByText(/mindpod/i)
    })
})
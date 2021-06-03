import Header from "@components/Header"
import { render } from "@testing-library/react"


describe('<Header />', () => {
    it('should renders Ok', () => {
        const { getByText } = render( <Header /> )
        getByText(/mindpod/i)
    })    
})
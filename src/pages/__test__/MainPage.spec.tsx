import { MockedProvider, MockedResponse } from "@apollo/client/testing"
import MainPage, { GET_PODCASTS } from "@pages/client/MainPage"
import { render, RenderResult, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"


describe('<MainPage />', () => {
    let renderResult: RenderResult

    it('should render loading...', () => {
        const { getByText } = render(
            <BrowserRouter>
                <MockedProvider mocks={[
                    {
                        request: {
                            query: GET_PODCASTS
                        }
                    }
                ]}>
                    <MainPage />
                </MockedProvider>
            </BrowserRouter>
        )

        getByText(/loading.../)
    })

    it('should render page', async () => {
        const mock: MockedResponse = {
            request: {
                query: GET_PODCASTS
            },
            result: {
                data: {
                    getAllPodcasts: {
                        ok: true,
                        error: null,
                        podcasts: [{
                            id: 1,
                            updatedAt: 'new Date()',
                            title: 'test',
                            category: 'test',
                            description: 'test',
                        }]
                    }
                }
            }
        }

        await waitFor(async () => {
            const { getAllByText } = render(
                <BrowserRouter>
                    <MockedProvider mocks={[ mock ]}>
                        <MainPage />
                    </MockedProvider>
                </BrowserRouter>
            )

            await new Promise(resolve => setTimeout(resolve, 0));    
            getAllByText('test')
        })
    })
    
})
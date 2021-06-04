import { MockedProvider } from "@apollo/client/testing"
import PodcastDetailPage, { GET_PODCAST_DETAIL } from "@pages/client/PodcastDetailPage"
import { render, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

jest.mock('react-router', () => {
    const realModule = jest.requireActual('react-router');
    return {
        ...realModule,
        useParams: () => ({ id: '1' })
    }
})

describe('<PodcastDetailPage />', () => {

    it('should render loading...', () => {
        const { getByText } = render(
            <BrowserRouter>
                <MockedProvider mocks={[
                    {
                        request: {
                            query: GET_PODCAST_DETAIL
                        }
                    }
                ]}>
                    <PodcastDetailPage />
                </MockedProvider>
            </BrowserRouter>
        )

        getByText(/loading.../)
    })

    it('should render page', async () => {
        const mock = {
            request: {
                query: GET_PODCAST_DETAIL,
                variables: {
                    id: 1
                }
            },
            result: {
                data: {
                    getPodcast: {
                        ok: true,
                        error: null,
                        podcast: {
                            createdAt: 'new Date()',
                            title: 'test',
                            category: 'test',
                            rating: 1,
                            description: 'test',
                            host: {
                                email: 'test@user.com',
                            },
                            episodes: [{
                                id: 1,
                                title: 'test',
                                createdAt: 'new Date()',
                                rating: 0,
                                audioFileLink: 'wow',
                                category: 'test',
                            }],
                        }
                    }
                }
            }
        }
        await waitFor(async () => {
            const { getAllByText } = render(
                <MockedProvider mocks={[mock]}>
                    <BrowserRouter>
                        <PodcastDetailPage />
                    </BrowserRouter>
                </MockedProvider>
            )
            await new Promise((resolve) => setTimeout(resolve, 0));

            getAllByText('test')
        })

    })
})
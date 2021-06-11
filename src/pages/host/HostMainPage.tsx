import { gql, useQuery } from "@apollo/client";
import { GetMyPodcasts, GetMyPodcastsVariables } from "@gql-types/GetMyPodcasts";
import React from "react";
import { Link } from "react-router-dom";

const GET_MY_PODCASTS = gql`
    query GetMyPodcasts($page: GetPodcastsInput!) {
        getMyPodcasts(input: $page) {
            ok
            error
            totalCounts
            totalPages
            podcasts {
                id
                title
                coverImg
                updatedAt
                description
            }
        }
    }
`

const HostMainPage: React.FC = () => {
    const { loading, data } = useQuery<GetMyPodcasts, GetMyPodcastsVariables>(GET_MY_PODCASTS, {
        variables: {
            page: {
                page: 1
            }
        }
    }) 

    if (!data || loading) {
        return <div className='h-screen flex items-center justify-center'> loading... </div>
    }

    const { 
        getMyPodcasts: { 
            podcasts 
        } 
    } = data

    return ( 
        <div className='h-screen pt-16 pb-4 px-4'>
            <div className='flex flex-col' >
                <h3 className='text-2xl mb-5' > My Podcast List </h3>

                {podcasts?.map((pc, idx) => (
                    <div className='w-full mb-2 flex flex-col border py-3 px-4'>
                        <Link 
                            to={`/h/podcast/${pc.id}`} 
                            className='text-xl hover:text-lime-600'
                        > {pc.title} </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HostMainPage
import React from "react";
import { useQuery } from "@apollo/client";
import { GetPodcasts } from "@gql-types/GetPodcasts";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const GET_PODCASTS = gql`
    query GetPodcasts {
        getAllPodcasts {
            ok
            error
            podcasts {
                id
                updatedAt
                title
                category
                description
            }
        }
    }
`;


function MainPage () {
    const { loading, data } = useQuery<GetPodcasts>(GET_PODCASTS)

    if (!data || loading) {
        return (
            <div className='flex justify-center items-center'>
                loading...
            </div>
        )
    }

    const { 
        getAllPodcasts: { podcasts } 
    } = data;

    return (
        <div className='w-full' >
            { podcasts?.map( (pc, idx) => (
                <div key={idx} className='bg-white my-1 py-4 px-4' >
                    <Link to={`/podcast/${pc.id}`}> { pc.title } </Link>
                    <p
                        className='break-words'                    
                    > { pc.description } </p>

                </div>
            )) }
        </div>
    )
}

export default MainPage;
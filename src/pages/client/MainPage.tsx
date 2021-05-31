import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";

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
                host {
                    email
                }
            }
        }
    }
`;


function MainPage () {
    const { loading, data } = useQuery(GET_PODCASTS)

    if (!data && loading) {
        return (
            <div className='flex justify-center items-center'>
                loading...
            </div>
        )
    }

    console.log(data)

    return (
        <div>
            Main
        </div>
    )
}

export default MainPage;
import React from "react";
import gql from "graphql-tag";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GetPodcastDetail, GetPodcastDetailVariables } from "@gql-types/GetPodcastDetail";


const GET_PODCAST_DETAIL = gql`
    query GetPodcastDetail ($id: Float!) {
        getPodcast(id: $id) {
            ok
            error
            podcast {
                createdAt
                title
                category
                rating
                description
                # host {
                #     email
                # }
                episodes {
                    id
                    title
                    createdAt
                    rating
                    # audioFileLink
                    category
                }
            }
        }
    }
`

type Param = {
    id: string;
}

function PodcastDetail () {
    const { id } = useParams<Param>()
    const { loading, data, error } = useQuery<
        GetPodcastDetail, 
        GetPodcastDetailVariables
    >(GET_PODCAST_DETAIL, { variables: { id: +id } }) 

    if (error) {
        console.log(error)
        return <div> {error.message} </div>
    }
    if (!data || loading) {
        return <div> loading... </div>
    }

    console.log(data)

    return (
        <div>
            Podcast Detail: {id}
        </div>
    )
}

export default PodcastDetail;
import React from "react";
import gql from "graphql-tag";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GetPodcastDetail, GetPodcastDetailVariables } from "@gql-types/GetPodcastDetail";


export const GET_PODCAST_DETAIL = gql`
    query GetPodcastDetail ($id: Float!) {
        getPodcastForListener(id: $id) {
            ok
            error
            podcast {
                createdAt
                title
                hashTags {
                    name
                }
                rating
                description
                host {
                    email
                }
                episodes {
                    id
                    title
                    createdAt
                    rating
                    audioFileLink
                    category
                }
            }
        }
    }
`

type Param = {
    id: string;
}

function PodcastDetailPage () {
    const { id } = useParams<Param>()
    const { loading, data, error } = useQuery<
        GetPodcastDetail, 
        GetPodcastDetailVariables
    >(GET_PODCAST_DETAIL, { variables: { id: +id } }) 

    if (!data || loading) {
        return <div> loading... </div>
    }

    const {
        getPodcastForListener: { 
            podcast
        }
    } = data;

    return (
        <div className='h-screen bg-white pt-12'>
            <div className='px-4 py-6 bg-gray-100'>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <div className='bg-gray-300 w-10 h-10 rounded-full mr-3' ></div>
                        <div>
                            <h4> Username </h4>
                            <h5 className='text-xs text-gray-500' > {podcast?.createdAt} </h5>
                        </div>
                    </div>
                    <div>
                        <button
                            className='bg-black text-white py-2 px-4 text-sm rounded-md'    
                        > 
                            Subscribe 
                        </button>
                    </div>
                </div>

                <h2 className='mt-8 text-2xl' > {podcast?.title} </h2>
                <p className='mt-4 break-words' > {podcast?.description} </p>

                {/* 댓글창 (유튜브처럼 열고 닫기) */}

            </div>

            <div className='bg-white px-4 py-6'>
                <h2 className='border-b border-gray-300 text-2xl pb-4'> Episodes </h2>
                {/* Episode 개수 나타내기 */}

                {podcast?.episodes.map((ep, idx) => (
                    <div key={idx} className='border-b border-gray-300 py-4'>
                        <h5 className='text-sm text-gray-500 mb-2'> {ep.createdAt} </h5>
                        <h3 className='text-xl mb-3'> {ep.title} </h3>
                        <div className='flex items-center'>
                            <button 
                                className='border border-gray-300 mr-5 py-1 px-4 rounded-full text-sm' 
                            > 
                                Play 34:06 
                            </button>
                            <div> O O O O O </div>
                            <div className='ml-5'> 좋아요 </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PodcastDetailPage;
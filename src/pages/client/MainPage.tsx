import React from "react";
import { useQuery } from "@apollo/client";
import { GetPodcasts } from "@gql-types/GetPodcasts";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

export const GET_PODCASTS = gql`
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
        <div className='w-full pt-12' >
            { podcasts?.map( (pc, idx) => (
                <div key={idx} className='bg-white my-1 py-4 px-4 flex flex-col' >
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <div className='bg-gray-300 w-10 h-10 rounded-full mr-3' ></div>
                            <div>
                                <h4> Username </h4>
                                <h5 className='text-xs text-gray-500' > {pc.updatedAt} </h5>
                            </div>
                        </div>
                        {/* <div> {pc.category} </div> */}
                    </div>

                    <div className='mt-5' >
                        <Link 
                            to={`/podcast/${pc.id}`}
                            className='text-xl font-semibold break-words hover:text-indigo-700'    
                        > 
                            { pc.title } 
                        </Link>
                    </div>
                    <p
                        className='mt-2 break-words'                    
                    > { pc.description } </p>

                </div>
            )) }
        </div>
    )
}

export default MainPage;
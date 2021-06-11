import { gql, useQuery } from "@apollo/client";
import { MeQeury } from "@gql-types/MeQeury";

const ME_QUERY = gql`
    query MeQeury {
        me {
            ok
            error
            user {
                role
            }
        }
    }
`

const useMeQuery = () => {
    const { loading, data } = useQuery<MeQeury>(ME_QUERY)
    return {
        loading, data
    }
}

export default useMeQuery;
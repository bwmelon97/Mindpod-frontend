import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GQL_ENDPOINT, LOCALSTORAGE_TOKEN } from '@constants';

const token = localStorage.getItem(LOCALSTORAGE_TOKEN)
export const isLoggedInVar = makeVar(Boolean(token))
export const authTokenVar = makeVar(token)

const httpLink = createHttpLink({
    uri: GQL_ENDPOINT
})

const authLink = setContext( (_, {headers}) => ({
    headers: {
        ...headers,
        "x-jwt": authTokenVar() || ""
    }
}) )

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
});
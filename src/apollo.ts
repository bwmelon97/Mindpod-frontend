import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedInvar = makeVar(false)
export const client = new ApolloClient({
    uri: 'https://s-pod-backend.herokuapp.com/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true
});
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://s-pod-backend.herokuapp.com/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true
});
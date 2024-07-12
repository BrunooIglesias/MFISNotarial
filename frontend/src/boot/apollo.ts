import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { ApolloClients } from '@vue/apollo-composable';
import { provide } from 'vue';

const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

export function provideApollo() {
    provide(ApolloClients, {
        default: apolloClient,
    });
}

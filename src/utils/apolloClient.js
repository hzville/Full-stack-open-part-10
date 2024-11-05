import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const createApolloClient = () => {
  const apollo_uri = Constants.expoConfig.extra.APOLLO_URI;
  return new ApolloClient({
    uri:`${apollo_uri}:4000/graphql`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
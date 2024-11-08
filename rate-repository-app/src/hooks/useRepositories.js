import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES, GET_SINGLE_REPOSITORY } from '../graphql/queries';

const getVariables = (order, filter) => {
  switch (order) {
    case 'latests':
      return {orderBy: 'CREATED_AT', orderDirection: 'DESC', searchKeyword: filter};
    case 'high':
      return {orderBy: 'RATING_AVERAGE', orderDirection: 'DESC', searchKeyword: filter};
    case 'low':
      return {orderBy: 'RATING_AVERAGE', orderDirection: 'ASC', searchKeyword: filter};
    default:
      return {orderBy: 'CREATED_AT', orderDirection: 'DESC', searchKeyword: filter};
  }
};


const useRepositories = (order, filter) => {
  const [repositories, setRepositories] = useState();
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
      variables: getVariables(order, filter),
      fetchPolicy: 'cache-and-network',
    });

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading, error };
};

const useSingleRepositoryId = (id) => {
  const [repository, setRepository] = useState();
  const { data, loading, error} = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { repositoryId: id},
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (data) {
      setRepository(data.repository);
    }
  }, [data]);

  return { repository, loading, error};

};

export { useRepositories, useSingleRepositoryId };
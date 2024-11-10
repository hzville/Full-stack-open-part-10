import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';


const useGetMe = (includeReviews = false) => {
  const [user, setUser] = useState();
  const { data, loading, error, refetch } = useQuery(GET_ME, {
    variables: { includeReviews },
  });

  useEffect(() => {
    if (data) {
      setUser(data.me);
    }
  });

  return { user, loading, error, refetch};
};

export default useGetMe;
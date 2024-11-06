import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';


const useGetMe = () => {
  const [user, setUser] = useState();
  const { data, loading, error } = useQuery(GET_ME);

  useEffect(() => {
    if (data) {
      setUser(data.me);
    }
  });

  return { user, loading, error};
};

export default useGetMe;
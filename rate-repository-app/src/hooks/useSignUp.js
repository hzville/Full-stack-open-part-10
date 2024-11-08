import { useMutation } from "@apollo/client";
import { SIGN_UP_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP_USER);

  const SignUp = async ({ username, password }) => {
    const { data } = await mutate({ variables: { "user": {"username": username,"password": password}}});
    return data;
  };

  return [SignUp, result];
};

export default useSignUp;
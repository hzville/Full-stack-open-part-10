import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({
    repositoryOwner, 
    repositoryName, 
    repositoryRating, 
    repositoryReview
  }) => {
    const { data } = await mutate({
      variables: { "review": {
        "ownerName": repositoryOwner,
        "repositoryName": repositoryName,
        "rating": Number(repositoryRating),
        "text": repositoryReview
      }}
    });
    return data;
  };

  return [createReview, result];
};

export default useCreateReview;
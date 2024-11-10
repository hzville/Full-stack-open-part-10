import { DELETE_REVIEW } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (reviewId) => {
    await mutate({ variables: {"deleteReviewId": reviewId}});
  };
  return [deleteReview, result];
};

export default useDeleteReview;
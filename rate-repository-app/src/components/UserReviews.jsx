import { FlatList } from "react-native";
import useGetMe from "../hooks/useGetMe";
import ReviewItem from "./ReviewItem";

const UserReviews = () => {
  const { user } = useGetMe(true);

  const reviewNodes = user ? user.reviews.edges.map(edge => edge.node) : [];
  
  return (
    <FlatList
    data={reviewNodes}
    renderItem={({ item }) => <ReviewItem review={item} />}
    keyExtractor={({ id }) => id}
    />
  );
};

export default UserReviews;
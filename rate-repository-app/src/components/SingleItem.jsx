import { Text, FlatList } from "react-native";
import { useParams } from "react-router-native";
import { useSingleRepositoryId } from "../hooks/useRepositories";
import ReviewItem from "./ReviewItem";
import SingleRepositoryInfo from "./SingleRepositoryInfo";

const SingleView = () => {
  const { id } = useParams();
  const { repository } = useSingleRepositoryId(id);

  if (!repository) return <Text>Repository not found</Text>;

  const reviews = repository.reviews ? repository.reviews.edges.map(edge => edge.node) : [];

  return (
    <FlatList
    data={reviews}
    renderItem={({ item }) => <ReviewItem review={item} />}
    keyExtractor={({ id }) => id}
    ListHeaderComponent={() => <SingleRepositoryInfo repository={repository} />}
    />
  );
};

export default SingleView;
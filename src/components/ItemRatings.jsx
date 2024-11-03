import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 2,
  },
});

const countFormatter = (count) => {
  return count >= 1000 ? `${(count/1000).toFixed(1)}k` : count.toString();
};

const ItemRatings = ({stargazersCount, forksCount, reviewCount, ratingAverage}) => {
  return (
    <View style={styles.container}>
      <Text> Stars: {countFormatter(stargazersCount)} </Text> 
      <Text> Forks: {countFormatter(forksCount)} </Text>
      <Text> Reviews: {countFormatter(reviewCount)} </Text>
      <Text> Rating: {countFormatter(ratingAverage)} </Text>
    </View>
  );
};

export default ItemRatings;
import { View, StyleSheet } from 'react-native';
import theme from '../themes/theme';
import ItemDescription from './ItemDescription';
import ItemRatings from './ItemRatings';

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    margin: 5,
    padding: 5,
    fontFamily: theme.fonts.main
  },
});

const RepositoryItem = ({item}) => {
  return (
    <View style={styles.itemContainer} testID="repositoryItem">
      <ItemDescription
        fullName={item.fullName}
        description={item.description}
        language={item.language}
        ownerAvatarUrl={item.ownerAvatarUrl} 
      />
      <ItemRatings
        stargazersCount={item.stargazersCount}
        forksCount={item.forksCount}
        reviewCount={item.reviewCount}
        ratingAverage={item.ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
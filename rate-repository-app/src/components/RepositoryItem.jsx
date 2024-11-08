import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../themes/theme';
import ItemDescription from './ItemDescription';
import ItemRatings from './ItemRatings';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    margin: 5,
    padding: 5,
    fontFamily: theme.fonts.main,
  },
  pressableContainer: {
    width: '100%'
  }
});


const RepositoryItem = ({item}) => {
  const navigate = useNavigate();

  return (
    <Pressable 
      style={styles.pressableContainer} 
      onPress={() => navigate(`/single-view/${item.id}`)}
    >
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
    </Pressable>
  );
};

export default RepositoryItem;
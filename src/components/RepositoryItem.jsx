import { Text, StyleSheet } from 'react-native';
import theme from '../themes/theme';

const style = StyleSheet.create({
  items: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    fontFamily: theme.fonts.main,
    color: theme.colors.black,
    padding: 5,
  }
});

const RepositoryItem = ({item}) => {
  return (
    <Text style={style.items}>
      Full name: {item.fullName}
      {'\n'}
      Description: {item.description}
      {'\n'}
      Language: {item.language}
      {'\n'}
      Stars: {item.stargazersCount}
      {'\n'}
      Forks: {item.forksCount}
      {'\n'}
      Reviews: {item.reviewCount}
      {'\n'}
      Rating: {item.ratingAverage}
    </Text>
  );
};

export default RepositoryItem;
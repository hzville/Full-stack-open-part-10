import { Text, View, StyleSheet } from "react-native";
import theme from "../themes/theme";
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
  ratingCircle: {
    width: 50,
    height: 50,
    borderColor: theme.colors.blue,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  ratingText: {
    color: theme.colors.blue,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
  reviewUser: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.body,
  },
  reviewContent: {        
    paddingLeft: 10,
    maxWidth: '80%',
  },
  reviewText: {
    flexWrap: 'wrap',
    fontSize: theme.fontSizes.body,
  },
});

const ReviewItem = ({review}) => {
  if (!review) return <Text>No reviews yet</Text>;
  return (
    <View style={styles.container}>
      <View style={styles.ratingCircle}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.reviewContent}>
        { 
          review.user?.username
          ? <Text style={styles.reviewUser}>{review.user.username}</Text>
          : <Text style={styles.reviewUser}>{review.repository.fullName}</Text>
        }
        <Text>{format(new Date(review.createdAt), "dd.MM.yyyy")}</Text>
        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;

import { Text, View, Pressable, StyleSheet, Alert } from "react-native";
import theme from "../themes/theme";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
  viewRepository: {
    height: 45,
    borderRadius: 5,
    backgroundColor: theme.colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  deleteReview: {
    height: 45,
    borderRadius: 5,
    backgroundColor: theme.colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    padding: 5,
  },
});

const ReviewButtons = ({ review, refetch }) => {
  const navigate = useNavigate();
  const [deleteReviewHook] = useDeleteReview();

  const deleteReview = () => {
    Alert.alert('Delete review','Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Delete', 
        onPress: async () =>  {
          await deleteReviewHook(review.id);
          refetch();
        } 
      }
    ]);
  };
  
  return (
    <View style={styles.buttonsContainer}>
      <Pressable 
      onPress={() => navigate(`/single-view/${review.repository.id}`)} 
      style={styles.viewRepository}
      >
        <Text style={styles.buttonText}>View repository</Text>
      </Pressable>
      <Pressable 
      onPress={() => deleteReview()}
      style={styles.deleteReview}
      >
        <Text style={styles.buttonText}>Delete review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewButtons;
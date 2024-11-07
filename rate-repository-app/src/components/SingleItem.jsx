import { Pressable, Text, View, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import { useSingleRepositoryId } from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import * as Linking from 'expo-linking';
import theme from "../themes/theme";


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  openUrlButton: {
    height: 45,
    width: '95%',
    borderRadius: 5,
    backgroundColor: theme.colors.blue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts.main,
  },
});


const SingleView = () => {
  const { id } = useParams();
  const { repository } = useSingleRepositoryId(id);

  if (!repository) return <Text>Repository not found</Text>;

  return(
    <View style={styles.container}>
      <RepositoryItem item={repository} />
      <Pressable onPress={() => Linking.openURL(repository.url)} style={styles.openUrlButton}>
        <Text style={styles.buttonText}> Open in GitHub </Text>
      </Pressable>
    </View>
  );
};

export default SingleView;
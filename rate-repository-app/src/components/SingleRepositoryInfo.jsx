import { View, Pressable, Text, StyleSheet } from "react-native";
import * as Linking from 'expo-linking';
import RepositoryItem from "./RepositoryItem";
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


const SingleRepositoryInfo = ({repository}) => {

  return(
    <View style={styles.container}>
      <RepositoryItem item={repository} />
      <Pressable onPress={() => Linking.openURL(repository.url)} style={styles.openUrlButton}>
        <Text style={styles.buttonText}> Open in GitHub </Text>
      </Pressable>
    </View>
  );
};

export default SingleRepositoryInfo;
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../themes/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 2,
  },
  itemMainInfo: {
    maxWidth: 250,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  fullName: {
    fontWeight: theme.fontWeights.bold,
  },
  language: {
    backgroundColor: theme.colors.languageBlue,
    alignSelf: 'flex-start',
    borderRadius: 2,
    color: theme.colors.white,
    padding: 1
  },
});

const ItemDescription = ({fullName, description, language, ownerAvatarUrl}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: ownerAvatarUrl}}></Image>
      <View style={styles.itemMainInfo}>
        <Text style={styles.fullName}> {fullName} </Text>
        <Text style={styles.description}> {description} </Text>
        <Text style={styles.language}> {language} </Text>
      </View>
    </View>
  );
};

export default ItemDescription;
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../themes/theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backGroundGrey,
    height: 100,
  },
  scrollView: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <AppBarTab header={'Repositories'} linkTo={'/'} />
        <AppBarTab header={'Sign in'} linkTo={'/signin'} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
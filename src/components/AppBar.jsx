import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../themes/theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backGroundGrey,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab header={'Repositories'} linkTo={'/'} />
      <AppBarTab header={'Sign in'} linkTo={'/signin'} />
    </View>);
};

export default AppBar;
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../themes/theme';
import AppBarTab from './AppBarTab';
import useGetMe from '../hooks/useGetMe';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

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
  const { user } = useGetMe();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOutUser = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/sign-in');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <AppBarTab header={'Repositories'} linkTo={'/'} />
        {user ?  (
          <>
            <AppBarTab header={'Create a review'} linkTo={"/create-review"}/>
            <AppBarTab header={'Sign out'} onPress={signOutUser} />
          </>
        ) : (
          <>
            <AppBarTab header={'Sign in'} linkTo={'/sign-in'} />
            <AppBarTab header={'Sign up'} linkTo={'/sign-up'} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
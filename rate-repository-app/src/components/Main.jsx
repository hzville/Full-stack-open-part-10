import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../themes/theme';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import SingleView from './SingleItem';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backGroundLightGrey,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/singleView/:id" element={<SingleView/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../themes/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '95%',
    borderColor: theme.colors.inputBorderGrey,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: theme.fontSizes.subheading,
    margin: 10,
  },
  signInButton: {
    height: 45,
    width: '95%',
    borderRadius: 5,
    backgroundColor: theme.colors.blue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
  },
});

const SignIn = () => {
  
  const authUser = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      username: '', 
      password: '',
    },
    onSubmit: authUser,
  });


  return (
    <View style={styles.container}>
      <TextInput
      placeholder="Username"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
      style={styles.input}
      />
      <TextInput
      placeholder="Password"
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
      secureTextEntry
      style={styles.input}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.signInButton}>
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
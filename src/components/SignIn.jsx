import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../themes/theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: theme.colors.inputBorderGrey,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: theme.fontSizes.subheading,
    margin: 5,
    fontFamily: theme.fonts.main
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
    fontFamily: theme.fonts.main,
  },
  errorText: {
    color: theme.colors.red,
    alignSelf: 'flex-start',
    marginBottom: 10
  },
  inputError: {
    borderColor: theme.colors.red,
  }
});

const SignIn = () => {

  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
      username: yup.string().required('Username is required'),
      password: yup.string().required('Password is required')
    });
  
  const authUser = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }

  };

  const formik = useFormik({
    initialValues: {
      username: '', 
      password: '',
    },
    validationSchema,
    onSubmit: authUser,
  });


  return (
    <View style={styles.container}>
      <TextInput
      placeholder="Username"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
      style={[styles.input, formik.errors.username && formik.touched.username && styles.inputError]}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}
      <TextInput
      placeholder="Password"
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
      secureTextEntry
      style={[styles.input, formik.errors.password && formik.touched.password && styles.inputError]}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.signInButton}>
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
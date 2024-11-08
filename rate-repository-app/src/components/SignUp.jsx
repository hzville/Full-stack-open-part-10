import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../themes/theme';
import * as yup from 'yup';
import useSignUp from '../hooks/useSignUp';
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
  signUpButton: {
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

const validationSchema = yup.object().shape({
  username: yup.string()
  .required('Username is required')
  .min(5, 'Username must be at least 5 characters')
  .max(30, 'Username cannot exceed 30 characters'),
  password: yup.string().required('Password is required')
  .min(5, 'Password must be at least 5 characters')
  .max(30, 'Password cannot exceed 30 characters'),
  passwordConfirmation: yup.string()
  .required('Password confirmation is required')
  .oneOf([yup.ref('password'), null], 'Passwords must match each other')
});

export const SignUpContainer = ({createNewUser}) => {

  const formik = useFormik({
    initialValues: {
      username: '', 
      password: '',
      passwordConfirmation: '',
    },
    validationSchema,
    onSubmit: createNewUser,
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
      <TextInput
      placeholder="Password confirmation"
      value={formik.values.passwordConfirmation}
      onChangeText={formik.handleChange('passwordConfirmation')}
      secureTextEntry
      style={[styles.input, formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && styles.inputError]}
      />
      {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && (
        <Text style={styles.errorText}>{formik.errors.passwordConfirmation}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.signUpButton}>
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {

  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  
  const createNewUser = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer createNewUser={createNewUser} />;

};

export default SignUp;
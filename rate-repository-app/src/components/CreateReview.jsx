import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../themes/theme';
import * as yup from 'yup';
import { useNavigate } from "react-router-native";
import useCreateReview from '../hooks/useCreateReview';

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

const validationSchema = yup.object().shape({
  repositoryOwner: yup.string().required('Repository owner is required'),
  repositoryName: yup.string().required('Repository name is required'),
  repositoryRating: yup.number()
    .required('Rating is required')
    .min(0,'Enter rating between 0-100')
    .max(100, 'Enter rating between 0-100 ')
    .typeError('Rating must be a number'),
});

export const CreateReviewContainer = ({createReview}) => {

  const formik = useFormik({
    initialValues: {
      repositoryOwner: '', 
      repositoryName: '',
      repositoryRating: '',
      repositoryReview: '',
    },
    validationSchema,
    onSubmit: createReview,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Repository owner name"
        value={formik.values.repositoryOwner}
        onChangeText={formik.handleChange('repositoryOwner')}
        style={[styles.input, formik.errors.repositoryOwner && formik.touched.repositoryOwner && styles.inputError]}
      />
      {formik.touched.repositoryOwner && formik.errors.repositoryOwner && (
        <Text style={styles.errorText}>{formik.errors.repositoryOwner}</Text>
      )}
      <TextInput
        placeholder="Repository name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
        style={[styles.input, formik.errors.repositoryName && formik.touched.repositoryName && styles.inputError]}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={styles.errorText}>{formik.errors.repositoryName}</Text>
      )}
      <TextInput
        placeholder="Rating between 0 and 100"
        value={formik.values.repositoryRating}
        onChangeText={formik.handleChange('repositoryRating')}
        style={[styles.input, formik.errors.repositoryRating && formik.touched.repositoryRating && styles.inputError]}
      />
      {formik.touched.repositoryRating && formik.errors.repositoryRating && (
        <Text style={styles.errorText}>{formik.errors.repositoryRating}</Text>
      )}
      <TextInput
        placeholder="Review"
        value={formik.values.repositoryReview}
        multiline
        onChangeText={formik.handleChange('repositoryReview')}
        style={[styles.input, formik.errors.repositoryReview && formik.touched.repositoryReview && styles.inputError]}
      />
      {formik.touched.repositoryReview && formik.errors.repositoryReview && (
        <Text style={styles.errorText}>{formik.errors.repositoryReview}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.signInButton}>
        <Text style={styles.text}>Create review</Text>
      </Pressable>
    </View>
  );
};

const CreateReview = () => {

  const [createReviewHook] = useCreateReview();
  const navigate = useNavigate();
  
  const createReview = async (values) => {
    const { 
      repositoryOwner, 
      repositoryName,
      repositoryRating,
      repositoryReview 
    } = values;

    try {
      const result = await createReviewHook({ 
        repositoryOwner, 
        repositoryName,
        repositoryRating,
        repositoryReview
      });
      navigate(`/single-view/${result.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer createReview={createReview} />;

};

export default CreateReview;
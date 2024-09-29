import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
  Button,
  TextField,
  Container,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import { addPerson } from '@/redux/slices/form/formSlice';
import { validationSchema } from './validationSchema.js';

export const CustomForm = () => {
  const dispatch = useDispatch();
  const { formState, items } = useSelector((state) => state.form);

  console.log(items);

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={formState}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values) => {
          dispatch(addPerson(values));
        }}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form>
            <Field
              as={TextField}
              name="firstName"
              label="First Name"
              fullWidth
              margin="normal"
              value={values.firstName}
              onChange={handleChange}
              autoComplete="off"
              error={touched.firstName && Boolean(errors.firstName)}
            />
            <ErrorMessage
              name="firstName"
              component="div"
              style={{ color: 'red', fontSize: '12px' }}
            />

            <Field
              as={TextField}
              name="lastName"
              label="Last Name"
              fullWidth
              margin="normal"
              value={values.lastName}
              onChange={handleChange}
              autoComplete="off"
              error={touched.lastName && Boolean(errors.lastName)}
            />
            <ErrorMessage
              name="lastName"
              component="div"
              style={{ color: 'red', fontSize: '12px' }}
            />

            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              margin="normal"
              value={values.email}
              onChange={handleChange}
              autoComplete="off"
              error={touched.email && Boolean(errors.email)}
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: 'red', fontSize: '12px' }}
            />

            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Gender</FormLabel>
              <Field name="gender">
                {({ field }) => (
                  <RadioGroup
                    aria-label="gender"
                    {...field}
                    name="gender"
                    value={field.value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                )}
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                style={{ color: 'red', fontSize: '12px' }}
              />
            </FormControl>

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

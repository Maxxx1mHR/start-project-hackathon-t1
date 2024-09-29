import * as yup from 'yup';

export const validationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  gender: yup.string().required(),
});

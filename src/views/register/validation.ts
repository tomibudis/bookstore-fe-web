import * as yup from "yup";

const registerFormSchema = yup.object().shape({
  fullName: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
});

export default registerFormSchema;

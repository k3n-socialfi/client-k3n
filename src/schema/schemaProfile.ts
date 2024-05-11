import * as yup from "yup";

export const schemaProfile = yup
  .object({
    fullName: yup.string().required(),
    gender: yup.string().required(),
    birthday: yup.string().required(),
    email: yup.string().required().email(),
    phoneNumber: yup.number().required(),
    location: yup.string().required(),
    jobTitle: yup.string().required(),
    bio: yup.string().required(),
  })
  .required();

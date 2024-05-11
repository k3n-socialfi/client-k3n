import * as yup from "yup";

export const schemaProfile = yup
  .object({
    fullName: yup.string().required(),
    gender: yup.string().required(),
    birthday: yup.string().required(),
    email: yup.string().required(),
    phoneNumber: yup.string().required(),
    location: yup.string().required(),
    jobTitle: yup.string().required(),
    bio: yup.string().required(),
    // twitter: yup.string().required(),
    // tiktok: yup.string().required(),
    // youtube: yup.string().required(),
    // facebook: yup.string().required(),
  })
  .required();

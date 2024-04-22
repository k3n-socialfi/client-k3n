import * as yup from "yup";

export const createServicesSchema_ = yup.object().shape({
  platform: yup.string().trim().required("Select platform require"),
  projectName: yup.string().trim().required("Services name require"),
  jobDescription: yup
    .string()
    .trim()
    .required("Services Description require"),
  price: yup.string().trim().required("Price require"),
  currency: yup.string().trim().required("Currency require"),
  paymentMethod: yup.string().trim().required("Payment method require"),
  tag: yup.string().trim()
});

import * as yup from "yup";

export const createServicesSchema_ = yup.object().shape({
  platform: yup.string().trim().required("Select platform require"),
  serviceName: yup.string().trim().required("Campaign name require"),
  description: yup
    .string()
    .trim()
    .required("Campaign description require"),
    serviceFee: yup.string().trim().required("Price require"),
  currency: yup.string().trim().required("Currency require"),
  paymentMethod: yup.string().trim().required("Payment method require"),
  // tag: yup.string().trim().required("Tag require"),
});

import * as yup from "yup";

export const requestCollaborationSchema_ = yup.object().shape({
  typeOfRequest: yup.string().trim().required("Type of request require"),
  fullName: yup.string().trim().required("Your full name require"),
});

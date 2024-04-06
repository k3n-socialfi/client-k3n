import * as yup from "yup";

export const createCampaignSchema_ = yup.object().shape({
  selectPlatform: yup.string().trim().required("Select platform require"),
  campaignName: yup.string().trim().required("Campaign name require"),
  campaignDescription: yup
    .string()
    .trim()
    .required("Campaign description require"),
  price: yup.string().trim().required("Price require"),
  currency: yup.string().trim().required("Currency require"),
  paymentMethod: yup.string().trim().required("Payment method require"),
  // tag: yup.string().trim().required("Tag require"),
});

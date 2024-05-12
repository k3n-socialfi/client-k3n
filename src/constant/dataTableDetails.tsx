export const DATA_HEAD_CP = [
  "Rank",
  "Service",
  "Client Project",
  "Date",
  "Price",
  "Status",
  "Action",
];

export const DATA_COMPLETED_PROJECT = [
  {
    id: 1,
    service: "X content yufg...",
    kol: "Elena",
    date: "March 27, 2024",
    price: "$7.160",
    status: "pendingPayment",
    action: "pay",
  },
  {
    id: 2,
    service: "X content yufg...",
    kol: "Elena",
    date: "March 27, 2024",
    price: "$7.160",
    status: "inProgress",
    action: "pay",
  },
  {
    id: 3,
    service: "X content yufg...",
    kol: "Elena",
    date: "March 27, 2024",
    price: "$7.160",
    status: "canceled",
    action: "view",
  },
];

export const ENUM_STATUS_OFFER_BUTTON = {
  Pending: "Accept",
  Progress: "Complete",
  Completed: "Completed",
};

export const ENUM_STATUS_OFFER = {
  Pending: "Pending",
  Progress: "Progress",
  Completed: "Completed",
  Canceled: "Canceled",
};

export const ENUM_STATUS_OFFER_COLOR = {
  Pending: "#25002D",
  Progress: "#3EAABE",
  Completed: "#F23581",
  Canceled: "#F23581",
};

export const ENUM_STATUS_OFFER_BG = {
  Pending: "#F6CCFF",
  Progress: "#EBFCFF",
  Completed: "#FFD7F4",
  Canceled: "#FFD7F4",
};

export interface ICompletedProfileAction {
  Pending?: string;
  Progress?: string;
}

export const textAction: ICompletedProfileAction = {
  Pending: "Pay",
  Progress: "View",
};

export const colorAction: ICompletedProfileAction = {
  Pending: "#82EBFF",
  Progress: "rgba(130, 235, 255, 1)",
};

export const bgAction: ICompletedProfileAction = {
  Pending: "#393939",
  Progress: "#393939",
};

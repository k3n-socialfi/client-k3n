export const DATA_HEAD_CP = [
  "No",
  "Service",
  "KOL",
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

export interface ICompletedProfileStatus {
  // [_: string]: string;
  pendingPayment?: string;
  inProgress?: string;
  canceled?: string;
}

export const textStatus: ICompletedProfileStatus = {
  pendingPayment: "Pending Payment",
  inProgress: "InProgress",
  canceled: "Canceled",
};

export const colorStatus: ICompletedProfileStatus = {
  pendingPayment: "#25002D",
  inProgress: "#3EAABE",
  canceled: "#F23581",
};

export const bgStatus: ICompletedProfileStatus = {
  pendingPayment: "#F6CCFF",
  inProgress: "#EBFCFF",
  canceled: "#FFD7F4",
};

export interface ICompletedProfileAction {
  pay?: string;
  view?: string;
}

export const textAction: ICompletedProfileAction = {
  pay: "Pay",
  view: "View",
};

export const colorAction: ICompletedProfileAction = {
  pay: "#82EBFF",
  view: "#EBFCFF",
};

export const bgAction: ICompletedProfileAction = {
  pay: "#393939",
  view: "#393939",
};

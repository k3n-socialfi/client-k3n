import { IconK3NToken, IconSOL, IconUSDT } from "@/assets/icons";

export const DATAPLATFORM = [
    { id: 1, label: "Twitter", value: "Twitter" },
    { id: 2, label: "Tiktok", value: "Tiktok" },
    { id: 3, label: "Youtube", value: "Youtube" },
    { id: 4, label: "Threads", value: "Threads" },
];

export const DATACURRENCY = [
    { id: 1, label: "USDT", value: "USDT", icon: <IconUSDT /> },
  { id: 2, label: "SOLANA(SOL)", value: "SOLANA(SOL)", icon: <IconSOL /> },
  { id: 3, label: "K3N Token", value: "K3N Token", icon: <IconK3NToken /> },
];

export const DATAPAYMENTMETHOD = [
    { id: 1, label: "One-time payment", value: "One-time payment" },
    { id: 2, label: "Package payment", value: "Package payment" },
    { id: 3, label: "Recurring payment", value: "Recurring payment" },
    { id: 4, label: "Installment payment", value: "Installment payment" },
];
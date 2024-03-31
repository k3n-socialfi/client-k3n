import {
  IconBoot,
  IconChangelog,
  IconCreateOffer,
  IconDashboard,
  IconDocs,
  IconFeedback,
  IconHolderBenefit,
  IconKOLs,
  IconMarketingServices,
  IconViewOffer,
  IconWeb3Projects,
} from "@/assets/icons";

export const DATASIDEBAR = [
  {
    id: 1,
    label: "Discover",
    color: "#DB3678",
    colorArrow: "#DB3678",
    icon: "",
    children: [
      {
        id: 11,
        label: "KOls",
        icon: <IconKOLs />,
        link: "/kols",
      },
      {
        id: 12,
        label: "Web3 Projects",
        icon: <IconWeb3Projects />,
        link: "/",
      },
      {
        id: 13,
        label: "Marketing Services",
        icon: <IconMarketingServices />,
        link: "/",
      },
      {
        id: 14,
        label: "Top 100 Ranking",
        icon: <IconMarketingServices />,
        link: "/top-ranking",
      },
    ],
  },
  {
    id: 2,
    label: "Offer Board",
    color: "#DB3678",
    colorArrow: "#DB3678",
    icon: "",
    children: [
      {
        id: 21,
        label: "Create Offer",
        icon: <IconCreateOffer />,
        link: "",
      },
      {
        id: 22,
        label: "View Offer",
        icon: <IconViewOffer />,
        link: "",
      },
    ],
  },
  {
    id: 3,
    label: "Comming soon",
    color: "#FFD7F4",
    colorArrow: "#FFD7F4",
    icon: "",
    children: [
      {
        id: 31,
        label: "Dashboard",
        icon: <IconDashboard />,
        link: "",
      },
      {
        id: 32,
        label: "Boot",
        icon: <IconBoot />,
        link: "",
      },
      {
        id: 33,
        label: "Holder Benefit",
        icon: <IconHolderBenefit />,
        link: "",
      },
    ],
  },
];
export const DATASIDEBARBOTTOM = [
  { id: 1, label: "Docs", icon: <IconDocs /> },
  { id: 2, label: "Changelog", icon: <IconChangelog /> },
  { id: 3, label: "Feedback", icon: <IconFeedback /> },
];

import {
  IconETH,
  IconLinkedIn,
  IconSOL,
  IconSui,
  IconTikTok,
  IconTop1,
  IconTop2,
  IconTop3,
  IconTwitter2,
  IconYouTube,
} from "@/assets/icons";
import { Avatar } from "@mui/material";

import Avatars from "@/assets/images/Avatar.png";

function createData(
  rank?: any,
  talent?: string,
  point?: number | string,
  ProofOfExperiences?: any,
  Organization?: any,
  location?: any,
  gender?: any,
  platform?: any,
  sector?: any
) {
  return {
    rank,
    talent,
    point,
    ProofOfExperiences,
    Organization,
    location,
    gender,
    platform,
    sector,
  };
}

const arrayLength = 100;

const containerArray: any[] = Array.from({ length: arrayLength }, (_, i) =>
  createData(
    i + 4,
    `william John Smith ${i + 4}`,
    `${9901 + i}`,
    {
      proposals: 2,
      ongoing: 5,
      completed: 2,
    },
    [
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
    ],
    {
      area: "asia",
      country: "vietnam",
      city: "Hanoi",
    },
    {
      gender: i % 2 == 0 ? "male" : "female",
      bgColor: i % 2 == 0 ? "#416158" : "#6D3A4F",
    },
    [
      { logo: <IconTikTok /> },
      { logo: <IconTwitter2 /> },
      { logo: <IconYouTube /> },
      { logo: <IconLinkedIn /> },
    ],
    [{ logo: <IconSui /> }, { logo: <IconETH /> }, { logo: <IconSOL /> }]
  )
);

const dataTop = [
  createData(
    <IconTop1 />,
    "Elena",
    9901,
    {
      proposals: 2,
      ongoing: 5,
      completed: 2,
    },
    [
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
    ],
    {
      area: "asia",
      country: "vietnam",
      city: "Hanoi",
    },
    {
      gender: "male",
      bgColor: "#416158",
    },
    [
      {
        logo: <IconTikTok />,
      },
      {
        logo: <IconTwitter2 />,
      },
      {
        logo: <IconYouTube />,
      },
      {
        logo: <IconLinkedIn />,
      },
    ],
    [
      {
        logo: <IconSui />,
      },
      {
        logo: <IconETH />,
      },
      {
        logo: <IconSOL />,
      },
    ]
  ),
  createData(
    <IconTop2 />,
    "Miles",
    9901,

    {
      proposals: 2,
      ongoing: 5,
      completed: 2,
    },

    [
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
    ],
    {
      area: "asia",
      country: "vietnam",
      city: "Hanoi",
    },
    {
      gender: "male",
      bgColor: "#416158",
    },
    [
      {
        logo: <IconTikTok />,
      },
      {
        logo: <IconTwitter2 />,
      },
      {
        logo: <IconYouTube />,
      },
      {
        logo: <IconLinkedIn />,
      },
    ],
    [
      {
        logo: <IconSui />,
      },
      {
        logo: <IconETH />,
      },
      {
        logo: <IconSOL />,
      },
    ]
  ),
  createData(
    <IconTop3 />,
    "POE",
    9901,
    {
      proposals: 2,
      ongoing: 5,
      completed: 2,
    },
    [
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
      {
        logo: (
          <Avatar
            sx={{ width: 35, height: 35 }}
            alt="avatar"
            src={Avatars.src}
          />
        ),
      },
    ],
    {
      area: "asia",
      country: "vietnam",
      city: "Hanoi",
    },
    {
      gender: "female",
      bgColor: "#6D3A4F",
    },
    [
      {
        logo: <IconTikTok />,
      },
      {
        logo: <IconTwitter2 />,
      },
      {
        logo: <IconYouTube />,
      },
      {
        logo: <IconLinkedIn />,
      },
    ],
    [
      {
        logo: <IconSui />,
      },
      {
        logo: <IconETH />,
      },
      {
        logo: <IconSOL />,
      },
    ]
  ),
];

export const rows = [...dataTop, ...containerArray];

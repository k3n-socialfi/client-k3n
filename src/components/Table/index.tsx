"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Divider, Typography } from "@mui/material";
import styled from "styled-components";
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

export interface ITableTopRankingProps {
  backgroundColor?: string;
}

export default function TableTopRanking(props: ITableTopRankingProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyleTableRow>
            <StyleTableCell align="left">
              <CellAll>Rank</CellAll>
            </StyleTableCell>
            <StyleTableCell width={100}>
              <CellAll>
                <StyleItems>
                  Talent
                  <StyleTextSearch type="text" placeholder="Search" />
                </StyleItems>
              </CellAll>
            </StyleTableCell>
            <StyleTableCell align="center">
              <CellAll>Points</CellAll>
            </StyleTableCell>
            <StyleTableCell align="center">
              <CellProof>
                Proof of Experiences
                <StyleTabs>
                  <StyleProposals>Proposals</StyleProposals>
                  <StyleOngoing>Ongoing</StyleOngoing>
                  <StyleCompleted>Completed</StyleCompleted>
                </StyleTabs>
              </CellProof>
            </StyleTableCell>
            <StyleTableCell align="left">
              <CellAll>Organization</CellAll>
            </StyleTableCell>
            <StyleTableCell align="left">
              <CellAll>Location</CellAll>
            </StyleTableCell>
            <StyleTableCell align="left">
              <CellAll>Gender</CellAll>
            </StyleTableCell>
            <StyleTableCell align="left">
              <CellAll>Platform</CellAll>
            </StyleTableCell>
            <StyleTableCell align="center">Sector</StyleTableCell>
          </StyleTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.rank}
              sx={{
                // "&:last-child td, &:last-child th": {
                //   border: 0,
                // },\
                borderBottom: "5px solid rgba(0, 0, 0, 0.5)",
                background: "#3D3D3D",
              }}
            >
              <TableCell component="th" scope="row">
                <Rank>{row.rank}</Rank>
              </TableCell>

              <TableCell component="th" scope="row">
                <Talent>
                  <Avatar sx={{ width: 35, height: 35 }} alt="avatar" src="" />
                  {row.talent}
                </Talent>
              </TableCell>

              <TableCell align="left">
                <Point>{row.point}</Point>
              </TableCell>
              <TableCell align="left">
                <ProofOfExp>
                  <Typography color={"#5DCFB4"}>
                    {row.ProofOfExperiences.proposals}
                  </Typography>
                  <Typography color={"#E47961"}>
                    {row.ProofOfExperiences.ongoing}
                  </Typography>
                  <Typography color={"#CAE461"}>
                    {row.ProofOfExperiences.completed}
                  </Typography>
                </ProofOfExp>
              </TableCell>
              <TableCell align="left">
                <Organization>
                  {row?.Organization?.map((item: any) => item?.logo)}
                </Organization>
              </TableCell>
              <TableCell align="left">
                <Location>
                  <LocationChild>{row.location.area}</LocationChild>
                  <LocationChild>{row.location.country}</LocationChild>
                  <LocationChild>{row.location.city}</LocationChild>
                </Location>
              </TableCell>
              <TableCell align="left">
                <Gender>
                  <GenderChild backgroundColor={row.gender.bgColor}>
                    {row.gender.gender}
                  </GenderChild>
                </Gender>
              </TableCell>
              <TableCell align="left">
                <Platform>
                  {row.platform.map((item: any) => (
                    <>{item.logo}</>
                  ))}
                </Platform>
              </TableCell>
              <TableCell align="left">
                <Sector>
                  {row.sector.map((item: any) => (
                    <>{item.logo}</>
                  ))}
                </Sector>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function createData(
  rank?: any,
  talent?: string,
  point?: number,
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

const rows = [
  createData(
    <IconTop1 />,
    "william John Smith",
    9901,
    {
      proposals: 2,
      ongoing: 5,
      completed: 2,
    },
    [
      {
        logo: <Avatar sx={{ width: 35, height: 35 }} alt="avatar" src="" />,
      },
      {
        logo: <Avatar sx={{ width: 35, height: 35 }} alt="avatar" src="" />,
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
    "william John Smith",
    9901,

    {
      proposals: 2,
      ongoing: 5,
      completed: 2,
    },

    [
      {
        logo: <Avatar sx={{ width: 35, height: 35 }} alt="avatar" src="" />,
      },
      {
        logo: <Avatar sx={{ width: 35, height: 35 }} alt="avatar" src="" />,
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
    "william John Smith",
    9901,
    {
      proposals: 2,
      ongoing: 5,
      completed: 2,
    },
    [
      {
        logo: <Avatar sx={{ width: 35, height: 35 }} alt="avatar" src="" />,
      },
      {
        logo: <Avatar sx={{ width: 35, height: 35 }} alt="avatar" src="" />,
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
  createData(
    4,
    "william John Smith",
    9901,
    {
      proposals: 2,
      ongoing: 5,
      completed: 2,
    },
    [
      {
        logo: <Avatar sx={{ width: 35, height: 35 }} alt="avatar" src="" />,
      },
      {
        logo: <Avatar sx={{ width: 35, height: 35 }} alt="avatar" src="" />,
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
];

const StyleItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  /* width: 100px; */
`;
const StyleTableRow = styled(TableRow)`
  background-color: #3f3e45;
  margin: 4px 0;
`;
const StyleTableCell = styled(TableCell)`
  color: #ffd7f4;
  font-weight: 700;
  /* border-left: 1px solid #ffd7f4; */
`;
const StyleCompleted = styled.div`
  color: #cae461;
`;
const StyleOngoing = styled.div`
  color: #e47961;
`;
const StyleProposals = styled.div`
  color: #61e4c5;
`;
const StyleTabs = styled.div`
  display: flex;
  justify-content: space-around;
`;
const StyleTextSearch = styled.input`
  width: 213px;
  height: 24px;
  background: #b9b9b9;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 16px;
  border: #b9b9b9;
`;

const CellAll = styled.div`
  border-right: 2px #b9b9b9 solid;
  padding: 10px;
`;

const CellProof = styled.div`
  border-right: 2px #b9b9b9 solid;
  padding: 0 20px;
`;

const Rank = styled.div`
  display: flex;
  justify-content: center;
  border-right: 2px #b9b9b9 solid;
  color: #fff;
  padding: 0 20px 0 0;
`;

const Talent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  font-size: larger;
  gap: 10px;
  border-right: 2px #b9b9b9 solid;
  color: #fff;
  padding: 10px;
  white-space: nowrap;
`;

const Point = styled.div`
  border-right: 2px #b9b9b9 solid;
  color: #fff;
  padding: 10px;
`;

const ProofOfExp = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  border-right: 2px #b9b9b9 solid;
  color: #fff;
  padding: 10px;
`;

const Organization = styled.div`
  display: flex;
  gap: 5px;
  border-right: 2px #b9b9b9 solid;
  color: #fff;
  padding: 10px;
`;

const Location = styled.div`
  display: flex;
  gap: 5px;
  border-right: 2px #b9b9b9 solid;
  color: #fff;
  padding: 10px;
`;

const LocationChild = styled.div`
  padding: 5px;
  background: #4c5270;
  border-radius: 10px;
`;

const Gender = styled.div`
  border-right: 2px #b9b9b9 solid;
  color: #fff;
  padding: 10px;
`;

const GenderChild = styled.div<ITableTopRankingProps>`
  display: flex;
  gap: 5px;
  justify-content: center;
  padding: 5px 0;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

const Platform = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border-right: 2px #b9b9b9 solid;
  color: #fff;
  padding: 10px;
`;

const Sector = styled.div`
  display: flex;
  gap: 10px;
  color: #fff;
  padding: 10px;
`;

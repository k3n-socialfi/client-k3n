"use client";
import { IconArrowUpTop } from "@/assets/icons";
import { rows } from "@/constant/dataMockupTableTopRanking";
import { Avatar, AvatarGroup, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";
import Avatars from "@/assets/images/Avatar.png";

export interface ITableTopRankingProps {
  backgroundColor?: string;
}

export default function TableTopRanking(props: ITableTopRankingProps) {
  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyleTableRow>
            <CustomTableCell align="center">
              <CellAll>Rank</CellAll>
            </CustomTableCell>
            <CustomTableCell width={100}>
              <CellAll>
                <StyleItems>
                  Talent
                  <StyleTextSearch type="text" placeholder="Search" />
                </StyleItems>
              </CellAll>
            </CustomTableCell>
            <CustomTableCell align="center">
              <CellAll>Points</CellAll>
            </CustomTableCell>
            <CustomTableCell align="center">
              <CellProof>Proof of Experiences</CellProof>
            </CustomTableCell>
            <CustomTableCell align="left">
              <CellAll>Organization</CellAll>
            </CustomTableCell>
            <CustomTableCell align="left">
              <CellAll>Location</CellAll>
            </CustomTableCell>
            <CustomTableCell align="left">
              <CellAll>Gender</CellAll>
            </CustomTableCell>
            <CustomTableCell align="left">
              <CellAll>Platform</CellAll>
            </CustomTableCell>
            <CustomTableCell align="center" style={{ borderRight: "0px" }}>
              Chains
            </CustomTableCell>
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
              <CustomTableCell component="th" scope="row">
                <Rank>
                  <UpTop>
                    <IconArrowUpTop />
                    <Typography fontSize={11} color={"#54F209"}>
                      +12
                    </Typography>
                  </UpTop>
                  {row.rank}
                </Rank>
              </CustomTableCell>

              <CustomTableCell component="th" scope="row">
                <Talent>
                  <Avatar
                    sx={{ width: 35, height: 35 }}
                    alt="avatar"
                    src={Avatars.src}
                  />
                  {row.talent}
                </Talent>
              </CustomTableCell>

              <CustomTableCell align="left">
                <Point>{row.point}</Point>
              </CustomTableCell>
              <CustomTableCell align="left">
                <ProofOfExp>
                  <Typography color={"#E47961"}>
                    {row.ProofOfExperiences.ongoing}
                  </Typography>
                </ProofOfExp>
              </CustomTableCell>
              <CustomTableCell align="left">
                <Organization>
                  <AvatarGroup max={3} total={(row?.Organization).length}>
                    {row?.Organization?.map((item: any) => item?.logo)}
                  </AvatarGroup>
                </Organization>
              </CustomTableCell>
              <CustomTableCell align="left">
                <Location>
                  <LocationChild>{row.location.area}</LocationChild>
                  <LocationChild>{row.location.country}</LocationChild>
                  <LocationChild>{row.location.city}</LocationChild>
                </Location>
              </CustomTableCell>
              <CustomTableCell align="left">
                <Gender>
                  <GenderChild backgroundColor={row.gender.bgColor}>
                    {row.gender.gender}
                  </GenderChild>
                </Gender>
              </CustomTableCell>
              <CustomTableCell align="left">
                <Platform>
                  {row.platform.map((item: any) => (
                    <>{item.logo}</>
                  ))}
                </Platform>
              </CustomTableCell>
              <CustomTableCell align="left" style={{ borderRight: "0px" }}>
                <Sector>
                  <AvatarGroup max={3} total={(row?.sector).length}>
                    {row.sector.map((item: any) => item.logo)}
                  </AvatarGroup>
                </Sector>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

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
const CustomTableCell = styled(TableCell)`
  color: #ffd7f4;
  font-weight: 700;
  border-right: 1px solid #ffd7f4;
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
  /* border-right: 2px #b9b9b9 solid; */
  padding: 10px;
`;

const CellProof = styled.div`
  /* border-right: 2px #b9b9b9 solid; */
  white-space: nowrap;
  padding: 0 20px;
`;

const Rank = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  /* border-right: 2px #b9b9b9 solid; */
  color: #fff;
  padding: 20px;
`;

const UpTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const Talent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  font-size: larger;
  gap: 10px;
  /* border-right: 2px #b9b9b9 solid; */
  color: #fff;
  padding: 10px;
  white-space: nowrap;
`;

const Point = styled.div`
  /* border-right: 2px #b9b9b9 solid; */
  color: #fff;
  padding: 10px;
`;

const ProofOfExp = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  /* border-right: 2px #b9b9b9 solid; */
  color: #fff;
  padding: 10px;
`;

const Organization = styled.div`
  display: flex;
  gap: 5px;
  /* border-right: 2px #b9b9b9 solid; */
  color: #fff;
  padding: 10px;
`;

const Location = styled.div`
  display: flex;
  gap: 5px;
  /* border-right: 2px #b9b9b9 solid; */
  color: #fff;
  padding: 10px;
`;

const LocationChild = styled.div`
  padding: 5px;
  background: #4c5270;
  border-radius: 10px;
`;

const Gender = styled.div`
  /* border-right: 2px #b9b9b9 solid; */
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
  /* border-right: 2px #b9b9b9 solid; */
  color: #fff;
  padding: 10px;
`;

const Sector = styled.div`
  display: flex;
  gap: 10px;
  color: #fff;
  padding: 10px;
`;

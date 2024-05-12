import { IconArrowDownChange, IconArrowUpChange } from "@/assets/icons";
import { DATA_HEAD_CP } from "@/constant/dataMockupCompletedProject";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import dayjs from "dayjs"

interface ICompletedProjectProps {
  arrowChange?: string;
  listProjects?: any
}

const CompletedProject = (props: ICompletedProjectProps) => {
  const { listProjects } = props

  return (
    <Container>
      <StyleTitle>Mentioned Project</StyleTitle>
      <TableContainer component={Paper} sx={{ width: "auto", marginLeft: "40px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRowHeadCustom>
              {DATA_HEAD_CP.map((item, index) => (
                <CustomTableHeadCell
                  key={index}
                  align={`${item === "Project" ? "left" : "center"}`}
                >
                  <CellAll>{item}</CellAll>
                </CustomTableHeadCell>
              ))}
            </TableRowHeadCustom>
          </TableHead>
          <TableBody>
            {listProjects?.map((row: any, index: number) => (
              <TableRowBodyCustom key={row?.id}>
                <CustomTableBodyCell component="th" scope="row" align="center">
                  {index + 1}
                </CustomTableBodyCell>

                <CustomTableBodyCell component="th" scope="row">
                  <Project>
                    <Avatar
                      sx={{ width: 35, height: 35 }}
                      alt={`avatar_${row?.fullName}`}
                      src={row?.image}
                    />
                    {row?.tokenName}
                  </Project>
                </CustomTableBodyCell>

                <CustomTableBodyCell align="center">
                  {dayjs(row?.firstTweetDate).format("MMMM D, YYYY")}
                </CustomTableBodyCell>
                <CustomTableBodyCell align="center">
                  {row?.shillPrice?.toLocaleString() || "-"}
                </CustomTableBodyCell>
                <CustomTableBodyCell align="center">
                  {row?.ath?.toLocaleString() || "-"}
                </CustomTableBodyCell>
                <CustomTableBodyCell align="center">
                  {row?.currentPrice?.toLocaleString() || "-"}
                </CustomTableBodyCell>
                <CustomTableBodyCell align="center">
                  <Change arrowChange={row?.pnl}>
                    {row?.pnl &&
                      <ChangeArrow>
                        {row?.pnl >= 0 ? (
                          <IconArrowUpChange />
                        ) : (
                          <IconArrowDownChange />
                        )}
                      </ChangeArrow>}
                    <ChangeNumber>{row?.pnl?.toLocaleString() || "-"}</ChangeNumber>
                  </Change>
                </CustomTableBodyCell>
              </TableRowBodyCustom>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {listProjects < 1 &&
        <DescriptionNotData>
          {`You don't have any work services yet.`}
        </DescriptionNotData>
      }
    </Container>
  );
};

const DescriptionNotData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #f23581;
  padding-top: 24px;
`;
const Container = styled.div`
  padding: 24px 14px;
  width: 100%;
`
const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  padding: 24px 0;
  @media (max-width: 520px) {
    font-size: 20px;
    padding-bottom: 0px;
  } 
`

const TableRowHeadCustom = styled(TableRow)`
  background-color: #3f3e45;
  margin: 4px 0;
  border-bottom: 5px solid rgba(0, 0, 0, 0.5);
`;

const CustomTableHeadCell = styled(TableCell)`
  color: #ffd7f4 !important;
  font-weight: 700;
`;

const CustomTableBodyCell = styled(TableCell)`
  background-color: var(--background-primary) !important;
  color: #fff !important;
  font-weight: 700;
  white-space: nowrap;
`;

const CellAll = styled.div`
  padding: 5px 10px;
  font-size: 18px !important;
  background-color: #393939;
  white-space: nowrap;
`;

const TableRowBodyCustom = styled(TableRow)`
  border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  background-color: #3d3d3d;
`;

const Project = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const Change = styled.div<ICompletedProjectProps>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  color: ${(props) => (props?.arrowChange === "up" ? "#54F209" : "#F95A2C")};
`;

const ChangeArrow = styled.div``;
const ChangeNumber = styled.div``;

export default CompletedProject;

import { IconArrowDownStatus } from "@/assets/icons";
import {
  bgAction,
  bgStatus,
  colorAction,
  colorStatus,
  DATA_COMPLETED_PROJECT,
  DATA_HEAD_CP,
  ICompletedProfileAction,
  ICompletedProfileStatus,
  textAction,
  textStatus,
} from "@/constant/dataMockupCompletedProfile";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "styled-components";

interface ICompletedProjectProps {
  arrowChange?: string;
}

interface IStatus {
  status?: string;
  action?: string;
}

const CompletedProject = (props: ICompletedProjectProps) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        marginTop: "12px",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRowHeadCustom>
            {DATA_HEAD_CP.map((item, index) => (
              <CustomTableHeadCell
                key={index}
                align={`${item === "Service" ? "left" : "center"}`}
              >
                {item === "Status" ? (
                  <CellStatus>
                    <NameItem>{item}</NameItem>
                    <IconCustom>
                      <IconArrowDownStatus />
                    </IconCustom>
                  </CellStatus>
                ) : (
                  <CellAll>{item}</CellAll>
                )}
              </CustomTableHeadCell>
            ))}
          </TableRowHeadCustom>
        </TableHead>
        <TableBody>
          {DATA_COMPLETED_PROJECT.map((row: any, index: number) => (
            <TableRowBodyCustom key={row?.id}>
              <CustomTableBodyCell component="th" scope="row" align="center">
                {index + 1}
              </CustomTableBodyCell>

              <CustomTableBodyCell component="th" scope="row">
                {row?.service}
              </CustomTableBodyCell>

              <CustomTableBodyCell align="center">
                {row?.kol}
              </CustomTableBodyCell>

              <CustomTableBodyCell align="center">
                {row?.date}
              </CustomTableBodyCell>

              <CustomTableBodyCell align="center">
                {row?.price}
              </CustomTableBodyCell>

              <CustomTableBodyCell align="center">
                <StatusCustom status={row?.status}>
                  {textStatus[row?.status as keyof ICompletedProfileStatus]}
                </StatusCustom>
              </CustomTableBodyCell>

              <CustomTableBodyCell align="center">
                <ActionCustom action={row?.action}>
                  {textAction[row?.action as keyof ICompletedProfileAction]}
                </ActionCustom>
              </CustomTableBodyCell>
            </TableRowBodyCustom>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const TableRowHeadCustom = styled(TableRow)`
  background-color: #3f3e45;
  margin: 4px 0;
  border-bottom: 5px solid rgba(0, 0, 0, 0.5);
`;

const CustomTableHeadCell = styled(TableCell)`
  color: #ffd7f4 !important;
  font-weight: 700;
  font-size: 18px;
`;

const CustomTableBodyCell = styled(TableCell)`
  color: #fff !important;
  font-weight: 700;
  white-space: nowrap;
  font-size: 16px;
`;

const StatusCustom = styled.div<IStatus>`
  color: ${(props) =>
    colorStatus[props?.status as keyof ICompletedProfileStatus] ??
    "#fff !important"};
  background-color: ${(props) =>
    bgStatus[props?.status as keyof ICompletedProfileStatus] ?? "none"};
  border-radius: 50px;
  padding: 5px 0;
`;

const ActionCustom = styled.div<IStatus>`
  color: ${(props) =>
    colorAction[props?.action as keyof ICompletedProfileAction] ??
    "#fff !important"};
  background-color: ${(props) =>
    bgAction[props?.action as keyof ICompletedProfileAction] ?? "none"};
  border-radius: 50px;
  padding: 5px 0;
`;

const CellAll = styled.div`
  padding: 5px 10px;
  font-size: 18px !important;
  background-color: #393939;
  white-space: nowrap;
`;

const CellStatus = styled(CellAll)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NameItem = styled.div`
  display: flex;
  width: 60%;
  justify-content: end;
`;

const IconCustom = styled.div`
  display: flex;
  width: 40%;
  justify-content: end;
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

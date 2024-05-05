import { IconArrowDownStatus } from "@/assets/icons";
import {
  bgAction,
  colorAction,
  DATA_HEAD_CP,
  ENUM_STATUS_OFFER,
  ENUM_STATUS_OFFER_BG,
  ENUM_STATUS_OFFER_BUTTON,
  ENUM_STATUS_OFFER_COLOR,
  ICompletedProfileAction,
} from "@/constant/dataMockupCompletedProfile";
import { useMyProfileContext } from "@/contexts/MyProfileConext";
import useServiceContract from "@/modules/payment/hooks/useServiceContract";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import dayjs from "dayjs";
import styled from "styled-components";
import useMyOffer from "../../hooks/useMyOffer";

interface ICompletedProjectProps {
  arrowChange?: string;
}

interface IStatus {
  status?: string;
  action?: string;
}

const CompletedProject = (props: ICompletedProjectProps) => {
  const { dataPersonal } = useMyProfileContext();
  const { listOffer, acceptOffer, isLoading } = useMyOffer();
  const { completedServiceContract } = useServiceContract();

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
          {listOffer.length > 0 &&
            listOffer.map((item: any, index) => {
              return (
                <TableRowBodyCustom key={index}>
                  <CustomTableBodyCell
                    component="th"
                    scope="row"
                    align="center"
                  >
                    {index + 1}
                  </CustomTableBodyCell>

                  <CustomTableBodyCell component="th" scope="row">
                    {item?.job?.projectName}
                  </CustomTableBodyCell>

                  <CustomTableBodyCell align="center">
                    {dataPersonal?.fullName}
                  </CustomTableBodyCell>

                  <CustomTableBodyCell align="center">
                    {dayjs(item?.job?.createdAt).format("MMMM D, YYYY")}
                  </CustomTableBodyCell>

                  <CustomTableBodyCell align="center">
                    {item?.job?.price}
                  </CustomTableBodyCell>

                  <CustomTableBodyCell align="center">
                    <StatusCustom status={item?.job.jobState}>
                      {
                        ENUM_STATUS_OFFER[
                          item?.job.jobState as keyof typeof ENUM_STATUS_OFFER
                        ]
                      }
                    </StatusCustom>
                  </CustomTableBodyCell>

                  <CustomTableBodyCell align="center">
                    {item.job.jobState !== ENUM_STATUS_OFFER.Completed && (
                      <ActionCustom
                        action={item.job.jobState}
                        onClick={() =>
                          item.job.jobState === ENUM_STATUS_OFFER.Pending
                            ? acceptOffer({
                                jobId: item.job.jobId,
                                subscriber: dataPersonal.userId,
                                creator: item?.job?.creator,
                              })
                            : completedServiceContract(item)
                        }
                      >
                        {isLoading
                          ? "Loading..."
                          : ENUM_STATUS_OFFER_BUTTON[
                              item.job
                                .jobState as keyof typeof ENUM_STATUS_OFFER_BUTTON
                            ]}
                      </ActionCustom>
                    )}
                  </CustomTableBodyCell>
                </TableRowBodyCustom>
              );
            })}
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
    ENUM_STATUS_OFFER_COLOR[
      props?.status as keyof typeof ENUM_STATUS_OFFER_COLOR
    ] ?? "#fff !important"};
  background-color: ${(props) =>
    ENUM_STATUS_OFFER_BG[props?.status as keyof typeof ENUM_STATUS_OFFER_BG] ??
    "none"};
  border-radius: 50px;
  padding: 5px 0;
`;

const ActionCustom = styled.div<IStatus>`
  cursor: pointer;
  color: ${(props) =>
    colorAction[props?.action as keyof ICompletedProfileAction] ??
    "#fff !important"};
  background-color: ${(props) =>
    bgAction[props?.action as keyof ICompletedProfileAction] ?? "none"};
  border-radius: 50px;
  padding: 5px 0;
  width: 100px;
  padding: 4px 16px;
  margin: auto;
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

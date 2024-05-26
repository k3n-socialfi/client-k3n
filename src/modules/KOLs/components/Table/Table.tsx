"use client";
import {
  IconDown,
  IconDownFill,
  IconFilter,
  IconNFT,
  IconReset,
  IconStar,
  IconStarKols,
  IconVerify,
  IconThunder,
  IconArrowUpTop,
} from "@/assets/icons";
import IconUnverify from "@/assets/icons/IconUnverify";
import Chips from "@/components/Chip";
import {
  FOLLOWER_RANGE,
  OPTIONS_KYC,
  TAGS,
  TYPE_OF_KOL,
} from "@/constant/FilterData";
import { DATA_TOP } from "@/constant/dataMockupTop";
import { useHomeContext } from "@/contexts/HomeContext";
import {
  Autocomplete,
  Avatar,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

export interface ITableTopRankingProps {
  backgroundColor?: string;
}

interface IPropItemFillter {
  color?: string;
}

interface IPCustomTableCell {
  background?: string;
  padding?: string;
  borderLeftColor?: string;
  isBorderLeft?: boolean;
}

export default function TableTrending(props: ITableTopRankingProps) {
  const { kols: dataTableKols, isLoading, totalItemKols } = useHomeContext();
  const { push, replace } = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [count, setCount] = useState(0);
  const [typeOfKols, setTypeOfKols] = useState("");

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    push(path + "?" + createQueryString("limit", event.target.value ?? 10));
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);

    push(path + "?" + createQueryString("page", newPage ?? 1));
  };

  const path = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    replace(path, undefined);
  }, []);

  const data = dataTableKols?.map((item) => {
    return {
      name: item?.fullName,
      badge: item?.twitterInfo?.verificationStatus,
      follower: item?.twitterInfo?.followers,
      totalPoints: item?.twitterInfo?.totalPoints,
      minPrice: "0",
      maxPrice: "100",
      review: item?.review ?? "0",
      tags: item.tags,
      avatar: item?.twitterInfo?.avatar,
      href: `profile/${item?.username}`,
    };
  });

  const createQueryString = useCallback(
    (name: string, value: string | number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value.toString());

      return params.toString();
    },
    [searchParams],
  );

  const createAnyQueryString = useCallback(
    (names: string[], values: string[]) => {
      const params = new URLSearchParams(searchParams.toString());
      for (let i = 0; i < names?.length; i++) {
        params.set(names[i], values[i]);
      }
      return params.toString();
    },
    [searchParams],
  );

  return (
    <div>
      <Filter>
        <ItemFilters color="#fff">
          <IconFilter />
          Filters by
        </ItemFilters>
        <Autocomplete
          size="small"
          id="grouped-type-kol"
          options={TYPE_OF_KOL}
          getOptionLabel={(option) => option.title}
          onChange={(event, val) =>
            push(path + "?" + createQueryString("type", val?.value ?? ""))
          }
          popupIcon={<IconDown />}
          sx={{
            height: 40,
            width: 250,
            color: "#FFF",
            label: { color: "#FFF" },
          }}
          // value={typeOfKols}
          renderInput={(params) => (
            <TextField
              {...params}
              // inputValue={type ?? ""}
              // value={type ?? ""}
              label="Type of KOLs"
              sx={{ input: { color: "#FFF" } }}
            />
          )}
        />
        <Autocomplete
          popupIcon={<IconDown />}
          size="small"
          id="grouped-demo"
          options={OPTIONS_KYC}
          getOptionLabel={(option) => option.title}
          onChange={(event, val) =>
            push(
              path +
              "?" +
              createQueryString("kyc", val?.value?.toString() ?? ""),
            )
          }
          sx={{
            height: 40,
            width: 250,
            color: "#FFF",
            label: { color: "#FFF" },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="KYC"
              sx={{ input: { color: "#FFF" } }}
            />
          )}
        />
        {/* <Autocomplete
          popupIcon={<IconDown />}
          size="small"
          id="grouped-demo"
          options={FOLLOWER_RANGE}
          getOptionLabel={(option) => option.title}
          onChange={async (event, val) =>
            push(
              path +
                "?" +
                createAnyQueryString(
                  ["lowerLimit", "upperLimit"],
                  [val?.value.lowerLimit ?? "", val?.value.upperLimit ?? ""],
                ),
            )
          }
          sx={{
            height: 40,
            width: 250,
            color: "#FFF",
            label: { color: "#FFF" },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Follower"
              sx={{ input: { color: "#FFF" } }}
            />
          )}
        /> */}
        <Autocomplete
          popupIcon={<IconDown />}
          size="small"
          id="grouped-demo"
          options={TAGS}
          multiple
          getOptionLabel={(option) => option.title}
          onChange={(event, val) => {
            const value = val.map((item) => item.value);
            push(
              path + "?" + createQueryString("tags", value.toString() ?? ""),
            );
          }}
          sx={{
            height: 40,
            width: 250,
            color: "#FFF",
            label: { color: "#FFF" },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tags"
              sx={{ input: { color: "#FFF" } }}
            />
          )}
        />
        <ItemFilters
          color="#82EBFF"
          onClick={() => replace(path, undefined)}
          style={{ cursor: "pointer" }}
        >
          <IconReset />
          Reset Filter
        </ItemFilters>
      </Filter>
      <TableContainer
        component={Paper}
        sx={{ width: "100%", background: "#000" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <CustomTableRow>
              <CustomTh align="center">Rank</CustomTh>
              <CustomTh padding="0 40px" align="left" isBorderLeft={true}>
                KOL
              </CustomTh>
              <CustomTh align="center" isBorderLeft={true}>
                KYC Badge
              </CustomTh>
              <CustomTh padding="25px 56px" align="center" isBorderLeft={true}>
                X Follower
              </CustomTh>
              <CustomTh align="center" sortDirection="asc" isBorderLeft={true}>
                <Fillter>
                  Shill score
                  <IconDownFill />
                </Fillter>
              </CustomTh>
              {/* <CustomTh align="center">
                <Fillter>
                  Reviews
                  <IconDownFill />
                </Fillter>
              </CustomTh> */}
              <CustomTh align="center" isBorderLeft={true}>
                Tags
              </CustomTh>
            </CustomTableRow>
          </TableHead>

          <TableBody>
            {data.map((row: any, index) => (
              <TableRow
                onClick={() => {
                  push(row?.href);
                }}
                key={index}
                sx={{
                  borderBottom: "5px solid rgba(0, 0, 0, 0.5)",
                  background: "#000",
                  cursor: "pointer",
                }}
              >
                <CustomTableCell>
                  <Rank>
                    <UpTop>
                      <IconArrowUpTop />
                      <Typography fontSize={11} color={"#54F209"}>
                        +12
                      </Typography>
                    </UpTop>
                    {DATA_TOP[index] ?? index + 1}
                  </Rank>
                </CustomTableCell>
                <CustomTableCell
                  borderLeftColor="#50505f"
                  align="center"
                  style={{ borderLeft: "0px" }}
                >
                  <NameKOL>
                    <Avatar
                      sx={{ width: 35, height: 35 }}
                      alt="avatar"
                      src={row?.avatar}
                    />
                    {row?.name}
                  </NameKOL>
                </CustomTableCell>
                <CustomTableCell borderLeftColor="#50505f" align="center">
                  <Cell>
                    {row?.badge ? (
                      <>
                        <IconVerify />
                        Verified
                      </>
                    ) : (
                      <>
                        <IconUnverify />
                        Unverified
                      </>
                    )}
                  </Cell>
                </CustomTableCell>
                <CustomTableCell
                  borderLeftColor="#50505f"
                  // background="#191D24"
                  align="center"
                >
                  <Cell>{row?.follower}</Cell>
                </CustomTableCell>
                <CustomTableCell borderLeftColor="#50505f" align="center">
                  <Cell>
                    {row?.totalPoints ? (
                      <>
                        <IconThunder />
                        {row?.totalPoints}
                      </>
                    ) : (
                      <></>
                    )}
                  </Cell>
                </CustomTableCell>
                <CustomTableCell borderLeftColor="#50505f" align="center">
                  <Tags>
                    {row?.tags.map(
                      (item: string, index: number) =>
                        item && (
                          <Chips
                            key={item}
                            label={item}
                            variant="outlined"
                            sx={{
                              color: `${index === 0
                                  ? "#F23581"
                                  : index === 1
                                    ? "#3EAABE"
                                    : "#25002D"
                                }`,
                              backgroundColor: `${index === 0
                                  ? "#ffd7f4"
                                  : index === 1
                                    ? "#EBFCFF"
                                    : "#F6CCFF"
                                }`,
                              "&.MuiChip-root": {
                                height: "24px",
                              },
                            }}
                          />
                        ),
                    )}
                  </Tags>
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          sx={{ padding: "50px", backgroundColor: "#000", color: "#FFF" }}
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={totalItemKols}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows per page"
        />
      </TableContainer>
    </div>
  );
}

const ItemFilters = styled.div<IPropItemFillter>`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => (color ? color : "#fff")};
  width: 15%;
  font-size: 14px !important;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  background: var(--Card-Card, rgba(25, 29, 36, 1));
  color: #fff;
  margin-bottom: 12px;
  border-radius: 8px;
  padding: 8px 0;
`;
const CustomTableRow = styled(TableRow)`
  background-color: #000;
`;

const CustomTh = styled(TableCell) <IPCustomTableCell>`
  color: #ffd7f4 !important;
  font-weight: 700;
  border-left: ${({ isBorderLeft, borderLeftColor }) =>
    isBorderLeft &&
    `1px solid ${borderLeftColor ? borderLeftColor : "#ffd7f4"} `};
  padding: ${({ padding }) => (padding ? padding : "unset")};
  background: ${({ background }) => (background ? background : "transparent")};
  white-space: nowrap;
  &:first {
    border-left: unset;
  }
`;

const CustomTableCell = styled(TableCell) <IPCustomTableCell>`
  color: #ffd7f4 !important;
  font-weight: 700;
  padding: ${({ padding }) => (padding ? padding : "unset")};
  background: ${({ background }) => (background ? background : "transparent")};
  white-space: nowrap;
`;

const Fillter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

const Cell = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
`;

const NameKOL = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  font-size: larger;
  gap: 10px;
  color: #fff;
  padding: 10px;
  white-space: nowrap;
`;

const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  color: #fff;
  padding: 10px;
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

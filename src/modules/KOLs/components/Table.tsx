"use client";
import {
  IconFilter,
  IconReset,
  IconVerify,
  IconStar,
  IconNFT,
} from "@/assets/icons";
import { useHomeContext } from "@/contexts/HomeContext";
import { Avatar } from "@mui/material";
import {
  Chip,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
  Autocomplete,
  TextField,
} from "@mui/material";
import styled from "styled-components";

export interface ITableTopRankingProps {
  backgroundColor?: string;
}

const top100Films = [
  { title: "A The Shawshank Redemption", year: 1994 },
  { title: "B The Godfather", year: 1972 },
  { title: "C The Godfather: Part II", year: 1974 },
  { title: "D The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "E Schindler's List", year: 1993 },
  { title: "A Pulp Fiction", year: 1994 },
];

export default function TableTrending(props: ITableTopRankingProps) {
  const { featureKols: dataTableKols } = useHomeContext();
  const data = dataTableKols?.map((item) => {
    return {
      name: item?.fullName,
      badge: "",
      follower: item?.twitterInfo?.followers,
      price: 0,
      review: "",
      tags: [],
      avatar: item?.twitterInfo?.avatar,
    };
  });
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <div>
      <Filter>
        <ItemFilters>
          <IconFilter />
          Filters by
        </ItemFilters>
        <Autocomplete
          size="small"
          id="grouped-demo"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          sx={{
            height: 40,
            width: 250,
            color: "#FFF",
            label: { color: "#FFF" },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="KOLs"
              sx={{ input: { color: "#FFF" } }}
            />
          )}
        />
        <Autocomplete
          size="small"
          id="grouped-demo"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          sx={{
            height: 40,
            width: 250,
            color: "#FFF",
            label: { color: "#FFF" },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="KYC Badge"
              sx={{ input: { color: "#FFF" } }}
            />
          )}
        />
        <Autocomplete
          size="small"
          id="grouped-demo"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          sx={{
            height: 40,
            width: 250,
            color: "#FFF",
            label: { color: "#FFF" },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="X Follower"
              sx={{ input: { color: "#FFF" } }}
            />
          )}
        />
        <Autocomplete
          size="small"
          id="grouped-demo"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
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
        <ItemFilters>
          <IconReset />
          Reset Filter
        </ItemFilters>
      </Filter>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <CustomTableRow>
              <CustomTableCell align="left" style={{ borderLeft: "0px" }}>
                KOL
              </CustomTableCell>
              <CustomTableCell align="center">KYC Badge</CustomTableCell>
              <CustomTableCell align="center">X Follower</CustomTableCell>
              <CustomTableCell
                align="center"
                sortDirection="asc"
                padding="none"
              >
                Price
              </CustomTableCell>
              <CustomTableCell align="center">Reviews</CustomTableCell>
              <CustomTableCell align="center">Tags</CustomTableCell>
            </CustomTableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any, index) => (
              <TableRow
                key={index}
                sx={{
                  borderBottom: "5px solid rgba(0, 0, 0, 0.5)",
                  background: "#3D3D3D",
                }}
              >
                <CustomTableCell align="center" style={{ borderLeft: "0px" }}>
                  <NameKOL>
                    <Avatar
                      sx={{ width: 35, height: 35 }}
                      alt="avatar"
                      src={row?.avatar}
                    />
                    {row?.name}
                  </NameKOL>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Cell>
                    {row?.badge ? (
                      <>
                        <IconVerify />
                        {row?.badge}
                      </>
                    ) : (
                      <></>
                    )}
                  </Cell>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Cell>{row?.follower}</Cell>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Cell>
                    {row?.price ? (
                      <>
                        <IconNFT />
                        {row?.price}
                      </>
                    ) : (
                      <></>
                    )}
                  </Cell>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Cell>
                    {row?.review ? (
                      <>
                        <IconStar />
                        {row?.review}
                      </>
                    ) : (
                      <></>
                    )}
                  </Cell>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Tags>
                    {row?.tags.map((item: string, index: number) => (
                      <ItemTags key={index}>{item}</ItemTags>
                    ))}
                  </Tags>
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const ItemFilters = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  color: #82ebff;
  width: 15%;
  font-size: 14px !important;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  background-color: #9b9ae526;
  color: #fff;
  margin-bottom: 12px;
  border-radius: 8px;
  padding: 8px 0;
`;
const CustomTableRow = styled(TableRow)`
  background-color: #3f3e45;
`;

const CustomTableCell = styled(TableCell)`
  color: #ffd7f4;
  font-weight: 700;
  border-left: 1px solid #ffd7f4;
`;

const Cell = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
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

const ItemTags = styled.div`
  padding: 5px;
  background: #4c5270;
  border-radius: 10px;
`;

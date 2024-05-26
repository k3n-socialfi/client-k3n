"use client";
import {
  IconDown,
  IconFilter,
  IconReset,
  IconThunder,
  IconArrowUpTop,
  IconSearch
} from "@/assets/icons";
import { ButtonPrimary } from "@/components/ButtonCustom";
import {
  FOLLOWER_RANGE,
  OPTION_SHILL_SCORE,
  TAGS,
  TYPE_OF_KOL,
} from "@/constant/FilterData";
import { DATA_TOP } from "@/constant/dataMockupTop";
import {
  Autocomplete,
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  AvatarGroup,
  Pagination,
  InputAdornment,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getTopRanking } from "../../services";
import { IFeatureKols } from "@/interface/featureKols.interface";
import SkeletonTableTopRanking from "@/components/Skeleton/TableTopRanking";
import Tags from "@/components/Tags";
import Sliders from "@/components/Sliders";
import TagList from "@/components/TagList";

export interface ITableTopRankingProps {
  backgroundColor?: string;
}

interface IPropItemFillter {
  color?: string;
  arrowChange?: any;
}

interface IPCustomTableCell {
  background?: string;
  padding?: string;
  borderLeftColor?: string;
  isBorderLeft?: boolean;
}

const defaultFilter = {
  page: 0,
  limit: 20,
  top: 100,
  type: undefined,
  minFollower: undefined,
  maxFollower: undefined,
  minShillScore: undefined,
  maxShillScore: undefined,
  tags: undefined,
  shillScore: undefined,
  mentionedProject: undefined
}

export default function TableTopRanking(props: ITableTopRankingProps) {
  const { push } = useRouter();
  const [page, setPage] = useState(0);
  const [listRanking, setListRanking] = useState<any>();
  const [filter, setFilter] = useState<any>(defaultFilter);
  const [isFilter, setIsFilter] = useState(false)
  const [loading, setLoading] = useState(false)
  const [valueFollower, setValueFollower] = useState<number[]>([1000000, 7000000]);
  const [valueShillScore, setValueShillScore] = useState<number[]>([100, 700]);

  const handleSelect = (key: string, val: any) => {
    setFilter((prevFilter: any) => {
      if (key === "followerX") {
        return {
          ...prevFilter,
          minFollower: val?.minFollower,
          maxFollower: val?.maxFollower
        };
      }
      if (key === "shillScore") {
        return {
          ...prevFilter,
          minShillScore: val?.minShillScore,
          maxShillScore: val?.maxShillScore
        };
      }
      return {
        ...prevFilter,
        [key]: val,
      };
    });
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };

  const fetchData = async () => {
    setLoading(true)
    try {
      const { data } = await getTopRanking({ page: page, limit: 20, top: 100 });
      setListRanking(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false)
    }
  };

  const fetchDataFilter = async () => {
    setLoading(true)
    try {
      const { data } = await getTopRanking(filter);
      setListRanking(data.data);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    if (isFilter) {
      fetchDataFilter();
      setIsFilter(false);
    }
  }, [filter, isFilter]);

  const data = listRanking?.users?.map((item: IFeatureKols) => {
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
      type: item?.type,
      chain: item?.mentionedProject?.chain,
      pnl: "-20",
      groupAvatar: [
        "https://pbs.twimg.com/profile_images/1737288264292192256/6Y4tIHTt_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1709981405462007808/LFOshtt2_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1558604195783229440/vEARoxwC_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1737288264292192256/6Y4tIHTt_400x400.jpg"
      ]
    };
  });

  return (
    <div>
      <Filter>
        <FilterBy color="#fff"><IconFilter />Filter by</FilterBy>
        <CustomAutocomplete
          size="small"
          id="grouped-type-kol"
          options={TYPE_OF_KOL}
          getOptionLabel={(option: any) => option.title}
          onChange={(event, val: any) => handleSelect('type', val ? val.value : null)}
          popupIcon={<IconDown />}
          sx={{ height: 40, width: 220, }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Type of KOLs"
              sx={{ input: { color: "#FFF", fontSize: "14px" } }}
            />
          )}
        />
        <Flex>
          <CustomAutocomplete
            popupIcon={<IconDown />}
            size="small"
            id="grouped-demo"
            options={FOLLOWER_RANGE}
            getOptionLabel={(option: any) => option.title}
            onChange={(event, val: any) => handleSelect('followerX', val ? val.value : null)}
            sx={{ height: 40, width: 250, }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Follower"
                sx={{ input: { color: "#FFF" } }}
              />
            )}
          />
          <Sliders setValueFollower={setValueFollower} valueFollower={valueFollower} setFilter={setFilter} maxNumberFollower={10000000} isFollower={true} />
        </Flex>
        <CustomAutocomplete
          sx={{ height: 40, width: 220, color: "#FFF" }}
          popupIcon={<IconDown />}
          size="small"
          id="grouped-demo"
          options={TAGS}
          multiple
          getOptionLabel={(option: any) => option.title}
          onChange={(event, val: any) => handleSelect('tags', val ? val?.map((item: any) => item.value) : null)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tags"
              sx={{ span: { color: "#FFF" } }}
            />
          )}
        />
        <Flex>
          <CustomAutocomplete
            popupIcon={<IconDown />}
            size="small"
            id="grouped-demo"
            options={OPTION_SHILL_SCORE}
            getOptionLabel={(option: any) => option.title}
            onChange={(event, val: any) => handleSelect('shillScore', val ? val.value : null)}
            sx={{ height: 40, width: 220 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Shill score"
                sx={{ input: { color: "#FFF" } }}
              />
            )}
          />
          <Sliders setValueShillScore={setValueShillScore} valueShillScore={valueShillScore} setFilter={setFilter} maxNumberShillScore={1000} isShillScore={true} />
        </Flex>
        <Flex>
          <CustomTextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch />
                </InputAdornment>
              ),
            }}
            size="small"
            label="Mentioned Project"
            placeholder="Search..."
            sx={{ fieldset: { color: "#FFF" }, input: { color: "#FFF" } }}
            onChange={(event: any) => handleSelect("mentionedProject", event ? event.target.value : null)}
          />
        </Flex>
        <ItemFilters color="#82EBFF" onClick={() => fetchData()} style={{ cursor: "pointer" }}>
          <IconReset />
          Reset Filter
        </ItemFilters>
        <ButtonPrimary onClick={() => setIsFilter(true)} borderRadius="16px" style={{ padding: "0px 24px", height: "24px" }}>Apply</ButtonPrimary>
      </Filter>
      {!loading ?
        (<TableContainer
          component={Paper}
          sx={{ width: "100%", backgroundColor: "rgba(25, 29, 36, 1)" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <CustomTableRow>
                <CustomTh align="center">Rank</CustomTh>
                <CustomTh padding="0 24px" align="left" isBorderLeft={true}>
                  KOL
                </CustomTh>
                <CustomTh align="center" isBorderLeft={true}>
                  Type
                </CustomTh>
                <CustomTh padding="12px" align="center" isBorderLeft={true}>
                  Mentioned Project
                </CustomTh>
                <CustomTh align="center" sortDirection="asc" isBorderLeft={true}>
                  #X Follower
                </CustomTh>
                <CustomTh align="center" isBorderLeft={true}>
                  Shill score
                </CustomTh>
                <CustomTh align="center" isBorderLeft={true}>
                  7D change
                </CustomTh>
                <CustomTh align="center" isBorderLeft={true}>
                  Chain
                </CustomTh>
                <CustomTh align="center" isBorderLeft={true}>
                  Tags
                </CustomTh>
              </CustomTableRow>
            </TableHead>
            <TableBody>
              {data?.map((row: any, index: number) => (
                <TableRow
                  onClick={() => {
                    push(row?.href);
                  }}
                  key={index}
                  sx={{
                    borderBottom: "2px solid #b4baca2b",
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

                    align="left"
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
                  <CustomTableCell align="center">
                    {row?.type}
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <CustomAvatarGroup total={24}>
                      {row?.groupAvatar?.map((item: string, index: number) => (
                        <Avatar key={index} sx={{ width: 30, height: 30 }} alt="Trevor Henderson" src={item} />
                      ))}
                    </CustomAvatarGroup>
                  </CustomTableCell>
                  <CustomTableCell
                    align="center"
                  >
                    <Cell>{row?.follower}</Cell>
                  </CustomTableCell>
                  <CustomTableCell align="center">
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
                  <CustomTableCell align="center">
                    <Change arrowChange={row?.pnl}>
                      {row?.pnl > 0 ? `+${row?.pnl?.toLocaleString()}%` : `${row?.pnl?.toLocaleString()}%`}
                    </Change>
                  </CustomTableCell>
                  <CustomTableCell align="center" style={{ fontWeight: "700" }}>
                    {row?.chain}
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <Chip>
                      {/* {row?.tags && <Tags dataTag={row?.tags} />} */}
                      {row?.tags && <TagList tags={row?.tags} />}
                    </Chip>
                  </CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <CustomPagination count={listRanking?.totalPages} page={page + 1} onChange={handleChangePage} />
        </TableContainer>) : (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
            <SkeletonTableTopRanking key={row} />
          ))
        )}
    </div>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px
`
const CustomTextField = styled(TextField)`
  .MuiInputBase-input{
    background-color: rgba(70, 78, 99, 1) !important; 
    color: #FFF !important;
    font-size: 12px !important;
  }
  label{
    color: #FFF !important;
  }
  background-color: rgba(70, 78, 99, 1); 
  border-radius: 8px;
`
const Chip = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding: 7.5px 0;
  max-width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  text-overflow: ellipsis;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CustomPagination = styled(Pagination)`
  background: #080a0c !important;
  padding: 12px 0 !important;
    ul{
    justify-content: center !important;
  }
  .Mui-selected{
    background-color:  #E9E9E9 !important; 
    color: #F23581 !important;
  }
  ul>li>button{
    color: #FFF !important;
  }
`
const CustomAutocomplete = styled(Autocomplete)`
  height: 40;
  width: 250;
  color: #FFF,
  div > label, div> input{ 
    color: #FFF !important;
  };
  div{ 
  background-color: rgba(70, 78, 99, 1); 
  border-radius: 8px;
  label{
    color: #FFF !important;
  }
}
`
const CustomAvatarGroup = styled(AvatarGroup)`
  justify-content: center;
  .MuiAvatarGroup-avatar{
    width: 30px !important;
    height: 30px !important;
    font-size: 10px !important;
    font-weight: 700 !important;
    color: #25002D !important;
    background-color: #F6CCFF !important;
  }
`
const Change = styled.div<IPropItemFillter>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  color: ${(props) => (props?.arrowChange > 0 ? "#6BDF61" : "#FF5656")};
`;

const FilterBy = styled.div<IPropItemFillter>`
  display: flex;
  gap: 4px;
  justify-content: center;
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: 12px !important;
`;

const ItemFilters = styled.div<IPropItemFillter>`
  display: flex;
  gap: 4px;
  justify-content: center;
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: 13px !important;
  &:hover {
    transform: scale(0.9);
    color: red;
    transition: all 0.5s;
    font-weight: 700;
  }
`;

const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  background: var(--Card-Card, rgba(25, 29, 36, 1));
  color: #fff;
  margin-bottom: 12px;
  border-radius: 8px;
  padding: 12px 0;
`;
const CustomTableRow = styled(TableRow)` 
  background-color: rgba(25, 29, 36, 1);
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
  border-bottom: 0.25px solid #B4BACA !important;
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 350px;
`;


const Rank = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 4px;
`;

const UpTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

"use client";
import styled from "styled-components";
import CardPopularServices from "../components/CardPopularServices";
import {
  IconChevronDown,
  IconFilter,
  IconReset,
  IconSearch,
} from "@/assets/icons";
import { Autocomplete, TextField, Typography } from "@mui/material";
import CardServices from "../components/CardServices";
import { useServicesContext } from "@/modules/services/context/ServicesContext";
import CardServicesSkeleton from "../components/CardServices/CardServicesSkeleton";
import PopularServicesSkeleton from "../components/CardPopularServices/PopularServicesSkeleton";
import LoadingSkeleton from "@/components/LoadingSkeleton";

const top100Films = [
  { title: "A The Shawshank Redemption", year: 1994 },
  { title: "B The Godfather", year: 1972 },
  { title: "C The Godfather: Part II", year: 1974 },
  { title: "D The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "E Schindler's List", year: 1993 },
  { title: "A Pulp Fiction", year: 1994 },
];
export default function Services() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  const { dataServices, isLoading, dataPopularServices } = useServicesContext();

  return (
    <StyleContainerServices>
      <StylePopularServices>
        <StylePopularHeading>
          {isLoading ? (
            <LoadingSkeleton width="300px" height="40px" radius="10px" />
          ) : (
            <Typography variant="h4">Popular Services</Typography>
          )}
        </StylePopularHeading>
        <StyleWrapperPopularCard>
          {isLoading && dataPopularServices
            ? [0, 1, 2, 3].map((item) => {
                return <PopularServicesSkeleton key={item} />;
              })
            : dataPopularServices?.map((item: any) => {
                return (
                  <CardPopularServices
                    key={item?.jobId}
                    dataPopularServices={item}
                  />
                );
              })}
        </StyleWrapperPopularCard>
      </StylePopularServices>
      <StyleAllServices>
        <StyleAllServicesHeading>
          {isLoading ? (
            <>
              <LoadingSkeleton width="300px" height="40px" radius="10px" />
              <LoadingSkeleton width="500px" height="40px" radius="20px" />
            </>
          ) : (
            <>
              <Typography variant="h4">All Services</Typography>
              <SearchAllServices>
                <SearchServicesIcon>
                  <IconSearch />
                </SearchServicesIcon>
                <TextSearch>
                  <TextFieldCustoms type="text" placeholder="Search" />
                </TextSearch>
                <SearchServicesIcon>
                  <IconChevronDown />
                </SearchServicesIcon>
              </SearchAllServices>
            </>
          )}
        </StyleAllServicesHeading>
        <StyleWrapperContent>
          {isLoading ? (
            <LoadingSkeleton width="700px" height="60px" radius="10px" />
          ) : (
            <StyleFillterServices>
              <Filter>
                <ItemFilters>
                  <IconFilter />
                  Filters by
                </ItemFilters>
                <Autocomplete
                  size="small"
                  id="grouped-demo"
                  options={options.sort(
                    (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
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
                      label="Platform"
                      sx={{ input: { color: "#FFF" } }}
                    />
                  )}
                />
                <Autocomplete
                  size="small"
                  id="grouped-demo"
                  options={options.sort(
                    (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
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
                      label="Chain"
                      sx={{ input: { color: "#FFF" } }}
                    />
                  )}
                />

                <ItemFilters>
                  <IconReset />
                  Reset Filter
                </ItemFilters>
              </Filter>
            </StyleFillterServices>
          )}
          <StyleWrapperCardServices>
            {isLoading && !dataServices
              ? [0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
                  return <CardServicesSkeleton key={item} />;
                })
              : dataServices?.map((item: any) => {
                  return (
                    <CardServices key={item?.jobId} dataCardServices={item} />
                  );
                })}
          </StyleWrapperCardServices>
        </StyleWrapperContent>
      </StyleAllServices>
    </StyleContainerServices>
  );
}

const StyleContainerServices = styled.div``;

const StylePopularServices = styled.div``;

const StylePopularHeading = styled.div`
  font-weight: bold;
  color: #fff;
  margin-bottom: 50px;
`;
const StyleWrapperPopularCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 1285px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const StyleAllServices = styled.div`
  @media (max-width: 660px) {
    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px; */
  }
  @media (max-width: 610px) {
  }
  @media (max-width: 390px) {
  }
`;

const StyleAllServicesHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  width: 100%;
  color: #fff;
  margin-bottom: 20px;
  @media (max-width: 660px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
`;

const SearchAllServices = styled.div`
  background: #b9b9b9;
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 395px;
  padding: 5px 10px;
  border-radius: 16px;
  width: 20%;
  @media (max-width: 1599px) {
    width: 30%;
  }
  @media (max-width: 820px) {
    min-width: 350px;
  }
  @media (max-width: 660px) {
    min-width: 300px;
  }
  @media (max-width: 610px) {
    width: 100%;
    order: 3;
  }
  @media (max-width: 390px) {
    min-width: 150px;
    order: 3;
  }
`;

const SearchServicesIcon = styled.div`
  color: #798395;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextSearch = styled.div`
  width: 100%;
  input {
    width: 100%;
  }
`;

const TextFieldCustoms = styled.input`
  border: none;
  outline: none;
  background: none;
  flex: 1;
  color: #fff;
`;

const StyleWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyleFillterServices = styled.div`
  width: 70%;
  margin-top: 50px;
  margin-bottom: 25px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const StyleWrapperCardServices = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 660px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
  @media (max-width: 660px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
`;

const ItemFilters = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  color: #82ebff;
  width: 15%;
  font-size: 14px !important;
  @media (max-width: 660px) {
    width: 200px;
  }
`;

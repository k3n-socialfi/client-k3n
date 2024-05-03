import LoadingSkeleton from "@/components/LoadingSkeleton";
import React, { useMemo } from "react";
import styled from "styled-components";

type Props = { dataMetrics: any; isLoading: boolean };

const KeyMetricsV2 = (props: Props) => {
  const { dataMetrics, isLoading } = props;

  const ethDate = useMemo(() => {
    const dateString = dataMetrics?.athDate;
    const date = new Date(dateString);

    const formattedAthDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
      .getSeconds()
      .toString()
      .padStart(2, "0")}.${date.getMilliseconds().toString().padStart(3, "0")}`;
    return formattedAthDate;
  }, [dataMetrics?.athDate]);

  return isLoading ? (
    <LoadingSkeleton width="200px" height="20px" />
  ) : (
    <Container>
      <TittleMain>Key Metrics</TittleMain>
      <BoxCustom>
        <ItemKeyMetrics>
          <TittleItem>Price</TittleItem>
          <ValueItem>${dataMetrics?.price ?? 0}</ValueItem>
        </ItemKeyMetrics>
        <ItemKeyMetrics>
          <TittleItem>Circulating Supply</TittleItem>
          <ValueItem>{dataMetrics?.circulatingSupply ?? 0}</ValueItem>
        </ItemKeyMetrics>
        <ItemKeyMetrics>
          <TittleItem>Max Supply</TittleItem>
          <ValueItem>{dataMetrics?.maxSupply ?? 0}</ValueItem>
        </ItemKeyMetrics>
        <ItemKeyMetrics>
          <TittleItem>Volume 24h</TittleItem>
          <ValueItem>{dataMetrics?.volume24h ?? 0}</ValueItem>
        </ItemKeyMetrics>
        <ItemKeyMetrics>
          <TittleItem>Market Cap</TittleItem>
          <ValueItem>{dataMetrics?.marketCap ?? 0}</ValueItem>
        </ItemKeyMetrics>
        <ItemKeyMetrics>
          <TittleItem>ATH</TittleItem>
          <ValueItem>${dataMetrics?.ath ?? 0}</ValueItem>
        </ItemKeyMetrics>
        <ItemKeyMetrics>
          <TittleItem>ATH Date</TittleItem>
          <ValueItem>{ethDate ?? 0}</ValueItem>
        </ItemKeyMetrics>
        <ItemKeyMetrics>
          <TittleItem>FDV</TittleItem>
          <ValueItem>{dataMetrics?.fdv ?? 0}</ValueItem>
        </ItemKeyMetrics>
        <ItemKeyMetrics>
          <TittleItem>TVL</TittleItem>
          <ValueItem>{dataMetrics?.tvl ?? 0}</ValueItem>
        </ItemKeyMetrics>
      </BoxCustom>
    </Container>
  );
};

export default KeyMetricsV2;

const Container = styled.div`
  padding: 20px;
`;

const TittleMain = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  padding-bottom: 24px;
`;

const BoxCustom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
  flex-wrap: wrap;
`;

const ItemKeyMetrics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #393939;
  padding: 12px 40px;
  border-radius: 20px;
`;
const TittleItem = styled.div`
  font-size: 16px;
  color: #b9b9b9;
  font-weight: 600;
  line-height: 21px;
`;

const ValueItem = styled.div`
  font-size: 24px;
  color: #82ebff;
  font-weight: 700;
`;

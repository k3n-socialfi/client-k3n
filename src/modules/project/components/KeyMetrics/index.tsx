import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useBoolean } from "@/hooks/useBoolean";
import styled from "styled-components";

export default function KeyMetrics({ isLoading, dataProjectDetail }: any) {
  const openModal = useBoolean();
  return (
    <>
      {isLoading ? (
        <LoadingSkeleton width="200px" height="20px" />
      ) : (
        <StyleTitle>Key Metrics</StyleTitle>
      )}
      <StyleOverview>
        <StyleLeft>
          <PrimaryTitleLeft>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="100px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>Price </StyleDesOverview>
                  <StyleSubTitle>
                    ${dataProjectDetail?.price ?? 0}
                  </StyleSubTitle>
                </>
              )}
            </StyleContentOverview>

            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>Circulating Supply</StyleDesOverview>
                  <StyleSubTitle>65,845,582,624,539 BONK</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
          </PrimaryTitleLeft>
          <PrimaryTitleLeft>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>Max Supply</StyleDesOverview>
                  <StyleSubTitle>93,526,183,276,778</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>Total Supply</StyleDesOverview>
                  <StyleSubTitle>93,526,183,276,778</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>ATH </StyleDesOverview>
                  <StyleSubTitle>$0.044547</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>ATH Date </StyleDesOverview>
                  <StyleSubTitle>Mar 5, 2024 </StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
          </PrimaryTitleLeft>
        </StyleLeft>

        <StyleRight>
          <PrimaryTitleRight>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>Volume 24h</StyleDesOverview>
                  <StyleSubTitle>$239,41M</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>Market Cap</StyleDesOverview>
                  <StyleSubTitle>$1,71B</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
          </PrimaryTitleRight>
          <PrimaryTitleRight>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>FDV</StyleDesOverview>
                  <StyleSubTitle>$2,42B</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
            <StyleContentOverview>
              {isLoading ? (
                <>
                  <LoadingSkeleton width="200px" height="20px" />
                </>
              ) : (
                <>
                  <StyleDesOverview>TVL</StyleDesOverview>
                  <StyleSubTitle>-</StyleSubTitle>
                </>
              )}
            </StyleContentOverview>
          </PrimaryTitleRight>
        </StyleRight>
        {openModal.value && (
          <div style={{ width: "300ox", height: "300px" }}>
            {/* <ModalRequestCollaboration openHireMe={openModal.onFalse} /> */}
          </div>
        )}
      </StyleOverview>
    </>
  );
}

const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 650px) {
    align-items: center;
  }
`;

const StyleOverview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 20px;
  gap: 100px;
  @media (max-width: 1120px) {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media (max-width: 420px) {
    flex-wrap: wrap;
  }
`;

const StyleLeft = styled.div`
  width: 70%;
  margin-left: -20px;
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 420px) {
  }
`;

const StyleRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 420px) {
  }
`;

const PrimaryTitleLeft = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 40px;
  padding: 24px 0;
  @media (max-width: 1024px) {
    overflow: visible;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
`;
const StyleContentOverview = styled.div``;

const StyleDesOverview = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #b9b9b9;
  white-space: nowrap;
`;

const StyleSubTitle = styled.div`
  padding-top: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #82ebff;
  white-space: nowrap;
`;

const PrimaryTitleRight = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 40px;
  padding: 24px 0;
`;

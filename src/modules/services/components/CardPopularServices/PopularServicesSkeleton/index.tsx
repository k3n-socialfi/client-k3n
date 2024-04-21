import LoadingSkeleton from "@/components/LoadingSkeleton";
import Image from "next/image";
import styled from "styled-components";

export default function PopularServicesSkeleton() {
  return (
    <StyleSelection>
      <StyleForm>
        <LoadingSkeleton width="150px" height="20px" radius="10px" />
        <LoadingSkeleton width="100%" height="50px" radius="10px" />
        <LoadingSkeleton width="150px" height="20px" radius="10px" />

        <StyleChips>
          <LoadingSkeleton width="100px" height="30px" radius="20px" />
          <LoadingSkeleton width="100px" height="30px" radius="20px" />
          <LoadingSkeleton width="100px" height="30px" radius="20px" />
          <LoadingSkeleton width="100px" height="30px" radius="20px" />
        </StyleChips>
        <Transfer>
          <LoadingSkeleton width="150px" height="150px" radius="20px" />
          <RightTransfer>
            <Options>
              <LoadingSkeleton width="150px" height="30px" radius="5px" />
            </Options>
            <LoadingSkeleton width="100%" height="1px" radius="0px" />
            <Options>
              <LoadingSkeleton width="150px" height="30px" radius="5px" />
            </Options>
            <LoadingSkeleton width="100%" height="40px" radius="15px" />
          </RightTransfer>
        </Transfer>
      </StyleForm>
    </StyleSelection>
  );
}

const StyleSelection = styled.div`
  border-radius: 8px;
`;

const StyleForm = styled.div`
  width: 580px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #b9b9b9;
  padding: 24px;
  border-radius: 8px;
  @media (max-width: 660px) {
    width: 380px;
  }
  @media (max-width: 420px) {
    width: 300px;
  }
`;

const ServicesTitle = styled.div`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #393939;
  border-radius: 12px;
  color: #82ebff;
  width: fit-content;
`;

const SubTitle = styled.div`
  padding-top: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #b9b9b9;
`;
const StyleChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 4px 0;
  color: #ffff !important;
`;

const Transfer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

const RightTransfer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #82ebff;
`;

const TitlePrice = styled.div`
  color: #82ebff;
  font-size: 16px;
  font-weight: 500;
`;

const StyleItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #393939;
  padding: 5px;
  border-radius: 5px;
  @media (max-width: 660px) {
    flex-wrap: wrap;
  }
`;

const StyleTotal = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  gap: 10px;
`;

const StyleDesOverview = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #b9b9b9;
`;

const StyleSubTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #82ebff;
`;

const StyleIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

import LoadingSkeleton from "@/components/LoadingSkeleton";
import Image from "next/image";
import styled from "styled-components";

export default function CardServicesSkeleton() {
  return (
    <StyleWrapperCard>
      <LoadingSkeleton width="100%" height="130px" radius="10px" />
      <CardContent>
        <CardWrapperTitle>
          <LoadingSkeleton width="100%" height="30px" radius="0px" />
          <LoadingSkeleton width="100%" height="60px" radius="0px" />
        </CardWrapperTitle>
        <CardBottom>
          <LoadingSkeleton width="100%" height="50px" radius="20px" />
        </CardBottom>
      </CardContent>
    </StyleWrapperCard>
  );
}

const StyleWrapperCard = styled.div`
  padding: 10px;
  width: 350px;
  height: 475px;
  background: #464646;
  border-radius: 8px;
`;

const CardImage = styled(Image)`
  width: 100%;
`;
const CardContent = styled.div`
  width: 100%;
  height: 70%;
  gap: 5px;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`;
const CardBottom = styled.div`
  width: 100%;
`;

const ServicesTitle = styled.div`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border-radius: 12px;
  color: #82ebff;
  width: fit-content;
`;

const SubTitle = styled.div`
  padding-top: 8px;
  font-size: 16px;
  line-height: 24px;
  color: #b9b9b9;
  margin-left: 10px;
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

const CardWrapperTitle = styled.div`
  width: 100%;
  gap: 5px;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

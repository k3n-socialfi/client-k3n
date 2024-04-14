import styled from "styled-components";
import imageCard from "@/assets/images/image-card-service.svg";
import Image from "next/image";
import { Checkbox, Divider, Typography } from "@mui/material";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { useRouter } from "next/navigation";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CardServices() {
  const router = useRouter();

  return (
    <StyleWrapperCard>
      <CardImage height={130} src={imageCard} alt="igs" />
      <CardContent>
        <ServicesTitle>Short Video on Tiktok</ServicesTitle>
        <SubTitle>
          Dont miss the chance to make your brand go viral with my 2.5M Tiktok
          followers!
        </SubTitle>
        <CardBottom>
          <Options>
            <Price>$7,450</Price>
            <Checkbox {...label} />
          </Options>
          <Divider sx={{ borderColor: "#B9B9B9 " }} />
          <Options>
            <TitlePrice>One time payment</TitlePrice>
            <Checkbox {...label} defaultChecked />
          </Options>
          <ButtonPrimary
            style={{ width: "100%" }}
            onClick={() => router.push("/services/payment")}
          >
            <Typography sx={{ p: "8px 0" }}>Hire Me</Typography>
          </ButtonPrimary>
        </CardBottom>
      </CardContent>
    </StyleWrapperCard>
  );
}

const StyleWrapperCard = styled.div`
  padding: 10px;
  width: 300px;
  background: #464646;
  border-radius: 8px;
`;
const CardImage = styled(Image)`
  width: 100%;
`;
const CardContent = styled.div`
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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

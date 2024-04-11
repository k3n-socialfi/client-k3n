import { ButtonPrimary } from "@/components/ButtonCustom";
import Chips from "@/components/Chip";
import { Checkbox, Divider, Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import tiktokImage from "@/assets/images/image-tiktok.svg";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function CardPopularServices() {
  const IMG2 = tiktokImage;

  return (
    <StyleSelection>
      <StyleForm>
        <ServicesTitle>Short Video on Tiktok</ServicesTitle>
        <SubTitle>
          Don't miss the chance to make your brand go viral with my 2.5M Tiktok
          followers!
        </SubTitle>
        <StyleChips>
          <Chips
            label="Tiktok"
            variant="outlined"
            sx={{ color: "#F23581", backgroundColor: "#FFD7F4" }}
          />
          <Chips
            label="Researcher"
            variant="outlined"
            sx={{ color: "#3EAABE", backgroundColor: "#EBFCFF" }}
            color="primary"
          />
          <Chips
            label="Ethereum"
            variant="outlined"
            sx={{ color: "#F23581", backgroundColor: "#FFD7F4" }}
            color="secondary"
          />
          <Chips
            label="Solana Ecosystem"
            color="secondary"
            sx={{ color: "#25002D", backgroundColor: "#F6CCFF" }}
          />
        </StyleChips>
        <Transfer>
          <StyleServicesImg width={150} height={130} src={IMG2} alt="igs" />
          <RightTransfer>
            <Options>
              <Price>$7,450</Price>
              <Checkbox {...label} />
            </Options>
            <Divider sx={{ borderColor: "#B9B9B9 " }} />
            <Options>
              <TitlePrice>One time payment</TitlePrice>
              <Checkbox {...label} defaultChecked />
            </Options>
            <ButtonPrimary style={{ width: "100%" }}>
              <Typography sx={{ p: "8px 0" }}>Hire Me</Typography>
            </ButtonPrimary>
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

const StyleServicesImg = styled(Image)`
  border-radius: 8px;
  margin-top: 12px;
`;

const RightTransfer = styled.div`
  width: 100%;
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

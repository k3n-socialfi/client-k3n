import imageCard from "@/assets/images/image-card-service.svg";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { useBoolean } from "@/hooks/useBoolean";
import { TService } from "@/types/service";
import { Box, Checkbox, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface IPropCardServices {
  dataCardServices: TService;
}
export default function CardServices({ dataCardServices }: IPropCardServices) {
  const openModalPayment = useBoolean();
  const router = useRouter();
  return (
    <StyleWrapperCard>
      <CardImage height={130} src={imageCard} alt="igs" />
      <CardContent>
        <CardWrapperTitle>
          <ServicesTitle>{dataCardServices?.projectName}</ServicesTitle>
          <SubTitle>{dataCardServices?.jobDescription}</SubTitle>
        </CardWrapperTitle>
        <CardBottom>
          <Options>
            <Price>${dataCardServices?.price}</Price>
            <Checkbox {...label} />
          </Options>
          <Divider sx={{ borderColor: "#B9B9B9 " }} />
          <Options>
            <TitlePrice>{dataCardServices?.paymentMethod}</TitlePrice>
            <Checkbox {...label} defaultChecked />
          </Options>
          <ButtonPrimary
            style={{ width: "100%" }}
            onClick={() =>
              router.push(`/services/payment/${dataCardServices?.jobId}`)
            }
          >
            <Typography sx={{ p: "8px 0" }}>Hire Me</Typography>
          </ButtonPrimary>
        </CardBottom>
      </CardContent>
    </StyleWrapperCard>
  );
}

const ModalBoxCustom = styled(Box)`
  overflow-x: scroll;
  height: 750px;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #2e2e2e;
  border: 1px solid #2e2e2e;
  color: #fff;
  box-shadow: 24;
  padding: 80px 40px;
`;

const StyleWrapperCard = styled.div`
  padding: 10px;
  width: 300px;
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

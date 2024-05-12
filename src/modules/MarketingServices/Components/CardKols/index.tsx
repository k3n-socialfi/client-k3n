import { IconEdit } from "@/assets/icons";
import { ButtonPrimary, ButtonSecondary } from "@/components/ButtonCustom";
import { LinkCustom } from "@/components/CardFeaturedKOLs/style";
import { useServicesContext } from "@/modules/services/context/ServicesContext";
import { Checkbox, Divider, Typography } from "@mui/material";
import { truncate } from "fs/promises";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { StringSchema } from "yup";

interface IPropsCardKosl {
  image?: string;
  projectName?: string;
  price?: string;
  paymentMethod?: string;
  jobId?: String;
}
export default function CardKols({
  image,
  paymentMethod,
  price,
  projectName,
  jobId,
}: IPropsCardKosl) {
  const router = useRouter();
  const IMG2 =
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <StyleForm>
      <StyleServicesImg
        width={345}
        height={240}
        src={image ?? IMG2}
        alt="igs"
      />
      <Content>
        <Title>{projectName}</Title>
        <Transfer>
          <RightTransfer>
            <Options style={{ flexWrap: "wrap" }}>
              <ContentPrice>
                <Prices>Price:</Prices>
                <Price>${price}</Price>
              </ContentPrice>
              <Checkbox {...label} defaultChecked sx={{ color: "wheat" }} />
            </Options>
            <Divider sx={{ borderColor: "#B9B9B9 " }} />
            <Options>
              <TitlePrice>
                {paymentMethod === "onetimePayment" && "One time payment"}
              </TitlePrice>
              <Checkbox {...label} defaultChecked sx={{ color: "pink" }} />
            </Options>
            <Options>
              <CustomButtonPrimary
                onClick={() => router.push(`/services/payment/${jobId}`)}
                borderRadius="10px"
                fullWidth={true}
              >
                Make an Offer
              </CustomButtonPrimary>
            </Options>
          </RightTransfer>
        </Transfer>
      </Content>
    </StyleForm>
  );
}

const ContentPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const CustomButtonPrimary = styled(ButtonSecondary)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  &:hover {
    transform: scale(0.9);
    transition: all 0.5s;
  }
`;

const Prices = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
`;
const Content = styled.div`
  padding: 12px;
`;

const StyleServicesImg = styled(Image)`
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;
const Transfer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  @media (max-width: 520px) {
    gap: 8px;
  }
`;
const Options = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;
const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #82ebff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 520px) {
    font-size: 14px;
  }
`;
const TitlePrice = styled.div`
  color: #82ebff;
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 520px) {
    font-size: 11px;
  }
`;
const RightTransfer = styled.div`
  width: 100%;
`;

const StyleForm = styled.div`
  width: 345px;
  height: 500px;
  gap: 12px;
  border-radius: 14px;
  box-shadow: 3px 3px 5px rgba(242, 53, 129, 1),
    -3px -3px 5px rgba(130, 235, 255, 0.63);
  @media (max-width: 520px) {
    width: 360px;
    height: 438px;
    padding: 12px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #82ebff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 520px) {
    font-size: 14px;
    padding-bottom: 0px;
  }
`;

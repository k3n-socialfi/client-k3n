import { IconEdit } from "@/assets/icons";
import { ButtonPrimary, ButtonSecondary } from "@/components/ButtonCustom";
import { LinkCustom } from "@/components/CardFeaturedKOLs/style";
import { useServicesContext } from "@/modules/services/context/ServicesContext";
import { Checkbox, Divider, Typography } from "@mui/material";
import { truncate } from "fs/promises";
import Image from "next/image";
import styled from "styled-components";
import { StringSchema } from "yup";

interface IPropsCardKosl {
  image?: string;
  projectName?: string;
  price?: string;
  paymentMethod?: string;
}
export default function CardKols({
  image,
  paymentMethod,
  price,
  projectName,
}: IPropsCardKosl) {
  const IMG2 =
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <LinkCustom href="">
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
                <CustomButtonPrimary borderRadius="10px" fullWidth={true}>
                  {/* <IconEdit /> */}
                  Make an Offer
                </CustomButtonPrimary>
              </Options>
            </RightTransfer>
          </Transfer>
        </Content>
      </StyleForm>
    </LinkCustom>
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
const CustomButton = styled(ButtonSecondary)`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  &:hover {
    transform: scale(0.9);
    transition: all 0.5s;
    color: red;
    background-color: var(--background-primary) !important;
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
const DescriptionNotData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #f23581;
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-bottom: 24px;
`;
const ServicesRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const SeeAll = styled.div`
  border-radius: 12px;
  padding: 4px 20px;
  width: 150px;
  text-align: center;
  color: #82ebff;
  background-color: #191d24;
  cursor: pointer;
  @media (max-width: 520px) {
    font-size: 10px;
  }
`;
const StyleBox = styled.div`
  padding: 24px 14px;
  width: 100%;
  overflow-x: hidden;
  margin-top: 24px;
`;
const StyleForm = styled.div`
  width: 345px;
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
const StyleContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  @media (max-width: 520px) {
    margin-right: 0px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #82ebff;
  @media (max-width: 520px) {
    font-size: 14px;
    padding-bottom: 0px;
  }
`;
const StyleTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  color: #ffffff;
  @media (max-width: 520px) {
    font-size: 20px;
    padding-bottom: 0px;
  }
`;

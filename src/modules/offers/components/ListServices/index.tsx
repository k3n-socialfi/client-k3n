"use client";
import Image from "next/image";
import styled from "styled-components";
import { Checkbox, Divider } from "@mui/material";
import { ButtonSecondary, ButtonPrimary } from "@/components/ButtonCustom";
import CreateServices from "@/components/ModalCreateServices";
import { IconEdit, IconDelete, IconAdd } from "@/assets/icons";
import { LinkCustom } from "@/components/CardFeaturedKOLs/style";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Services({
  listServicesProfile,
  fetchDataServices,
}: any) {
  const [isShowModal, setIsShowModal] = useState(false);
  const IMG2 =
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const { push } = useRouter();

  const createNewService = useCallback(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsShowModal(!isShowModal);
    } else {
      push("/login");
    }
  }, [isShowModal, push]);

  return (
    <StyleBox>
      <Container>
        <StyleTitle>My Services({listServicesProfile?.length ?? 0})</StyleTitle>
        <ServicesRight>
          <LinkCustom href={`/services`}>
            <SeeAll>See all</SeeAll>
          </LinkCustom>
          <CustomButtonPrimary onClick={createNewService}>
            <IconAdd />
            Create New Service
          </CustomButtonPrimary>
        </ServicesRight>
      </Container>
      <StyleContent>
        {listServicesProfile ? (
          listServicesProfile?.map((item: any) => (
            <StyleForm key={item?.job?.jobId}>
              <StyleServicesImg width={345} height={240} src={IMG2} alt="igs" />
              <Content>
                <Title>{item?.job?.projectName}</Title>
                <Transfer>
                  <RightTransfer>
                    <Options style={{ flexWrap: "wrap" }}>
                      <ContentPrice>
                        <Prices>Price:</Prices>
                        <Price>${item?.job?.price.toLocaleString()}</Price>
                      </ContentPrice>
                      <Checkbox
                        {...label}
                        defaultChecked
                        sx={{ color: "wheat" }}
                      />
                    </Options>
                    <Divider sx={{ borderColor: "#B9B9B9 " }} />
                    <Options>
                      <TitlePrice>
                        {item?.job?.paymentMethod === "onetimePayment" &&
                          "One time payment"}
                      </TitlePrice>
                      <Checkbox
                        {...label}
                        defaultChecked
                        sx={{ color: "pink" }}
                      />
                    </Options>
                    <Options>
                      <CustomButtonPrimary>
                        <IconEdit />
                        Edit
                      </CustomButtonPrimary>
                      <CustomButton>
                        <IconDelete />
                        Delete
                      </CustomButton>
                    </Options>
                  </RightTransfer>
                </Transfer>
              </Content>
            </StyleForm>
          ))
        ) : (
          <DescriptionNotData>
            {`You don't have any work services yet.`}
          </DescriptionNotData>
        )}
      </StyleContent>
      <CreateServices
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        fetchDataServices={fetchDataServices}
        onClose={() => setIsShowModal(false)}
      />
    </StyleBox>
  );
}

const ContentPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CustomButtonPrimary = styled(ButtonPrimary)`
  width: 80%;
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
  font-size: 14px;
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
  padding: 4px 0;
`;
const Price = styled.div`
  font-size: 18px;
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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

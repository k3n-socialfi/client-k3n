"use client";
import styled from "styled-components";
import FieldInput from "@/components/FieldInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Selects from "@/components/Select";
import { ButtonPrimary, ButtonSecondary } from "@/components/ButtonCustom";
import UploadImage from "../components/UploadImage";
import { schemaProfile } from "@/schema/schemaProfile";
import { UpdateProfile } from "../services";
import { useAlert } from "@/contexts/AlertContext";
import { useState } from "react";
import { useMyProfileContext } from "@/contexts/MyProfileConext";

export default function EditProfileView() {
  const { setAlertSuccess, setAlertError } = useAlert();
  const [loading, setLoading] = useState<boolean>(false);
  const { dataPersonal } = useMyProfileContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaProfile),
  });

  const handleEdit = async (value: any) => {
    try {
      setLoading(true);
      const { data } = await UpdateProfile({
        ...value,
        type: "KOL",
        pricePerPost: 0,
        dob: "",
      });
      setAlertSuccess("Update success", `${data?.message}`);
      setLoading(false);
    } catch (error: any) {
      setAlertError(
        "Update Error",
        `${error?.data?.message ?? error?.data?.message[0] ?? "Update Error"}`,
      );
    }
    setLoading(false);
  };

  return (
    <WrapperMainEditProfile>
      <HeadingEditProfile>Edit Profile</HeadingEditProfile>
      <ContentEditProfile>
        <ContentEditProfileLeft>
          <HeadingContent>Change Picture Profile</HeadingContent>
          <UploadImage />
        </ContentEditProfileLeft>
        <FormRight onSubmit={handleSubmit(handleEdit)}>
          <HeadingContent>Change Picture Profile</HeadingContent>
          <WrapperField>
            <FieldInput
              register={register}
              name="fullName"
              placeholder="Place holder text"
              lable="Your Full name"
              defaultValue={dataPersonal?.fullName}
            />
            <FieldFlex>
              <Selects
                register={register}
                lable="Gender"
                messageError=""
                name="gender"
                placeholder="Place holder text"
                defaultValue={dataPersonal?.gender}
              />
              <FieldInput
                register={register}
                name="birthday"
                placeholder="Place holder text"
                lable="Birthday"
                type="date"
                defaultValue={dataPersonal?.birthday}
              />
            </FieldFlex>
            <FieldFlex>
              <FieldInput
                register={register}
                name="email"
                placeholder="Place holder text"
                lable="Email"
                defaultValue={dataPersonal?.email}
              />
              <FieldInput
                register={register}
                name="phoneNumber"
                placeholder="Place holder text"
                lable="Phone Number"
                defaultValue={dataPersonal?.phoneNumber}
              />
            </FieldFlex>

            <FieldInput
              register={register}
              name="location"
              placeholder="Place holder text"
              lable="Location"
              defaultValue={dataPersonal?.location}
            />
            <FieldInput
              register={register}
              name="jobTitle"
              placeholder="Place holder text"
              lable="Job title"
              defaultValue={dataPersonal?.jobTitle}
            />
            <FieldInput
              register={register}
              name="bio"
              placeholder="Place holder text"
              lable="Bio"
              defaultValue={dataPersonal?.bio ?? ""}
            />
          </WrapperField>
          <HeadingContent>Social link</HeadingContent>
          <WrapperField>
            <FieldInput
              register={register}
              name="twitter"
              placeholder="Place holder text"
              lable="Twitter"
            />
            <FieldInput
              register={register}
              name="tiktok"
              placeholder="Place holder text"
              lable="Tiktok"
            />
            <FieldInput
              register={register}
              name="youtube"
              placeholder="Place holder text"
              lable="Youtube"
            />
            <FieldInput
              register={register}
              name="facebook"
              placeholder="Place holder text"
              lable="Facebook"
            />
          </WrapperField>
          <WrapperButton>
            <ButtonSecondary
              backgroundColorBt="#343b4a"
              borderColorBt="#343b4a"
              backgroundColorBtHover="#343b4a"
              borderColorBtHover="#343b4a"
              fullWidth={true}
              borderRadius="12px"
            >
              Cancel
            </ButtonSecondary>
            <ButtonPrimary
              backgroundColorBt={loading ? "transparent" : ""}
              backgroundColorBtHover={loading ? " transparent" : ""}
              colorBt={loading ? "#3A4455" : ""}
              type="submit"
              fullWidth={true}
              borderRadius="12px"
              disabled={loading ? true : false}
            >
              Save
            </ButtonPrimary>
          </WrapperButton>
        </FormRight>
      </ContentEditProfile>
    </WrapperMainEditProfile>
  );
}

const WrapperMainEditProfile = styled.div`
  color: #fff;
  padding: 0 100px;
  @media (max-width: 1024px) {
    padding: 0;
  }
`;

const HeadingEditProfile = styled.h3`
  width: 100%;
  text-align: left;
  font-size: 40px;
  line-height: 40px;
  font-weight: 700;
  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const ContentEditProfile = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 30px;
  width: 100%;
  padding-top: 40px;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ContentEditProfileLeft = styled.div`
  width: 45%;
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const HeadingContent = styled.h6`
  color: #fff;
  font-size: 28px;
  line-height: 33px;
  font-weight: 700;
  text-align: left;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const FormRight = styled.form`
  width: 60%;
  background: #191d24;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const WrapperField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 0 30px;
  margin: 25px 0 40px 0;
`;

const FieldFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 728px) {
    flex-direction: column;
  }
`;

const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 30px;
`;

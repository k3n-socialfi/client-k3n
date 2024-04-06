"use client";
import { IconCertification, IconClose } from "@/assets/icons";
import { DATASELECTTYPEOFREQUEST } from "@/constant/dataMockupSelectType";
import { useBoolean } from "@/hooks/useBoolean";
import { requestCollaborationSchema_ } from "@/validations/requestCollaborationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "../ButtonCustom";

import Campaign from "@/assets/images/Request.png";
import { DATA_GENDER, DATA_TYPE } from "@/constant/dataMockupEditProfile";
import { updateProfile } from "@/services";

type TEditProfileProps = {
  resetModal?: any;
  dataPersonal?: any;
  resetPage?: any;
};

const EditProfile = ({
  resetModal,
  dataPersonal,
  resetPage,
}: TEditProfileProps) => {
  const openGotIt = useBoolean();
  const openButton = useBoolean();

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>({
    // resolver: yupResolver(createCampaignSchema_),
    mode: "onChange",
  });

  const [open, setOpen] = useState(true);
  const [typeOfRequest, setTypeOfRequest] = useState("");
  const [gender, setGender] = useState(dataPersonal?.gender ?? "");
  const [type, setType] = useState(dataPersonal?.type ?? "");

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setTypeOfRequest(event.target.value as string);
  };

  const handleClose = () => {
    setOpen(false);
    resetModal();
    resetPage();
  };

  const onSubmitForm = async (data: any) => {
    openButton.onTrue();
    try {
      await updateProfile({
        ...data,
        birthday: "01/01/1990",
      });
    } catch (error) {
      return { message: "Error" };
    } finally {
      openGotIt.onTrue();
      openButton.onFalse();
    }
  };

  const checkForm = watch();
  useEffect(() => {
    const allValuesFilled = Object.values(checkForm).some(
      (value) => value === ""
    );

    if (allValuesFilled) {
      openButton.onTrue();
    } else {
      openButton.onFalse();
    }
  }, [checkForm]);

  useEffect(() => {
    const fieldValues = {
      fullName: dataPersonal?.fullName,
      gender: dataPersonal?.gender,
      email: dataPersonal?.email,
      phoneNumber: dataPersonal?.phoneNumber,
      location: dataPersonal?.location,
      type: dataPersonal?.type,
      jobTitle: dataPersonal?.jobTitle,
      bio: dataPersonal?.bio,
    };

    setGender(dataPersonal?.gender);
    setType(dataPersonal?.type);

    Object.entries(fieldValues).forEach(([key, value]) => {
      setValue(key, value);
    });
  }, [dataPersonal]);

  return (
    <ModalCustom
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyleModalBox>
        <StyleTop>
          <StyleButtonClose onClick={handleClose}>
            <IconClose />
          </StyleButtonClose>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h4"
            fontWeight={"600"}
          >
            Edit Profile
          </Typography>
        </StyleTop>
        {!openGotIt.value ? (
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <StyleBottom>
              <ScrollBigSize>
                <StyleLabel>
                  <Typography>Your full name</Typography>
                  <Typography color={"orange"}>*</Typography>
                </StyleLabel>

                <FormControl
                  fullWidth
                  sx={{
                    backgroundColor: "#353535",
                    borderRadius: "50px",
                  }}
                >
                  <InputBase
                    id="fullName"
                    defaultValue=""
                    sx={{ p: "12px 10px", color: "#FFF" }}
                    placeholder="Enter your name"
                    inputProps={{ "aria-label": "Enter your name" }}
                    color="primary"
                    {...register("fullName")}
                  />
                </FormControl>

                <div style={{ width: "100%" }}>
                  <StyleError>{errors.fullName?.message as string}</StyleError>
                </div>

                <StylePriceCurrency>
                  <Currency>
                    <StyleLabel>
                      <Typography>Gender</Typography>
                      <Typography color={"orange"}>*</Typography>
                    </StyleLabel>

                    <FormControl fullWidth sx={{ width: "100%" }}>
                      <InputLabel id="gender" sx={{ color: "#FFF" }}>
                        Select your gender
                      </InputLabel>
                      <Select
                        id="gender"
                        labelId="gender"
                        value={gender ?? ""}
                        label="Select your gender"
                        sx={{
                          borderRadius: "20px",
                          color: "#FFF",
                          backgroundColor: "#353535",
                          border: "0px #353535 solid",
                        }}
                        {...register("gender")}
                        // onChange={handleChangeSelect}
                      >
                        {DATA_GENDER.map((option) => (
                          <MenuItem key={option.id} value={option.value}>
                            <ItemCurrency>{option.label}</ItemCurrency>
                          </MenuItem>
                        ))}
                      </Select>
                      <StyleError>
                        {errors.gender?.message as string}
                      </StyleError>
                    </FormControl>
                  </Currency>

                  <Currency>
                    <StyleLabel>
                      <Typography>Your birthday</Typography>
                      <Typography color={"orange"}>*</Typography>
                    </StyleLabel>

                    <FormControl fullWidth sx={{ width: "100%" }}>
                      <InputLabel id="birthday" sx={{ color: "#FFF" }}>
                        Pick day
                      </InputLabel>
                      <Select
                        id="birthday"
                        labelId="birthday"
                        value={"01/01/1990"}
                        label="Pick day"
                        sx={{
                          borderRadius: "20px",
                          color: "#FFF",
                          backgroundColor: "#353535",
                          border: "0px #353535 solid",
                        }}
                        {...register("birthday")}
                        // onChange={handleChangeSelect}
                      >
                        {/* {DATACURRENCY.map((option) => (
                        <MenuItem key={option.id} value={option.value}>
                          <ItemCurrency>
                            {option.icon}
                            {option.label}
                          </ItemCurrency>
                        </MenuItem>
                      ))} */}
                      </Select>
                      <StyleError>
                        {errors.birthday?.message as string}
                      </StyleError>
                    </FormControl>
                  </Currency>
                </StylePriceCurrency>

                <StylePriceCurrency>
                  <Price>
                    <StyleLabel>
                      <Typography>Email</Typography>
                      <Typography color={"orange"}>*</Typography>
                    </StyleLabel>
                    <FormControl
                      fullWidth
                      sx={{
                        backgroundColor: "#353535",
                        color: "#FFF",
                        borderRadius: "50px",
                        width: "100%",
                      }}
                    >
                      <InputBase
                        id="email"
                        defaultValue=""
                        sx={{ p: "12px 10px", color: "#FFF" }}
                        placeholder="Enter your email"
                        inputProps={{ "aria-label": "Enter your email" }}
                        color="primary"
                        {...register("email")}
                      />
                    </FormControl>
                    <div style={{ width: "100%" }}>
                      <StyleError>{errors.email?.message as string}</StyleError>
                    </div>
                  </Price>

                  <Price>
                    <StyleLabel>
                      <Typography>Phone number</Typography>
                      <Typography color={"orange"}>*</Typography>
                    </StyleLabel>
                    <FormControl
                      fullWidth
                      sx={{
                        backgroundColor: "#353535",
                        color: "#FFF",
                        borderRadius: "50px",
                        width: "100%",
                      }}
                    >
                      <InputBase
                        id="phoneNumber"
                        defaultValue=""
                        sx={{ p: "12px 10px", color: "#FFF" }}
                        placeholder="Enter your phone number"
                        inputProps={{ "aria-label": "Enter your phone number" }}
                        color="primary"
                        {...register("phoneNumber")}
                      />
                    </FormControl>
                    <div style={{ width: "100%" }}>
                      <StyleError>
                        {errors.phoneNumber?.message as string}
                      </StyleError>
                    </div>
                  </Price>
                </StylePriceCurrency>

                <StyleLabel>
                  <Typography>Location</Typography>
                  <Typography color={"orange"}>*</Typography>
                </StyleLabel>
                <FormControl
                  fullWidth
                  sx={{
                    backgroundColor: "#353535",
                    borderRadius: "50px",
                  }}
                >
                  <InputBase
                    id="location"
                    defaultValue=""
                    sx={{ p: "12px 10px", color: "#FFF" }}
                    placeholder="Enter your location"
                    inputProps={{ "aria-label": "Enter your location" }}
                    color="primary"
                    {...register("location")}
                  />
                </FormControl>
                <div style={{ width: "100%" }}>
                  <StyleError>{errors.location?.message as string}</StyleError>
                </div>

                <StyleLabel>
                  <Typography>Select your type</Typography>
                  <Typography color={"orange"}>*</Typography>
                </StyleLabel>
                <FormControl fullWidth sx={{ minWidth: "800px" }}>
                  <InputLabel id="type" sx={{ color: "#FFF" }}>
                    Select Your Type
                  </InputLabel>
                  <Select
                    id="type"
                    labelId="type"
                    value={type ?? ""}
                    label="Select Your Type"
                    sx={{
                      borderRadius: "20px",
                      color: "#FFF",
                      backgroundColor: "#353535",
                      border: "0px #353535 solid",
                    }}
                    {...register("type")}
                    // onChange={handleChangeSelect}
                  >
                    {DATA_TYPE.map((option) => (
                      <MenuItem key={option.id} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <StyleError>
                    {errors.selectYourType?.message as string}
                  </StyleError>
                </FormControl>

                <StyleLabel>
                  <Typography>Job title</Typography>
                  <Typography color={"orange"}>*</Typography>
                </StyleLabel>
                <FormControl
                  fullWidth
                  sx={{
                    backgroundColor: "#353535",
                    borderRadius: "50px",
                  }}
                >
                  <InputBase
                    id="jobTitle"
                    defaultValue=""
                    sx={{ p: "12px 10px", color: "#FFF" }}
                    placeholder="Enter your job title"
                    inputProps={{ "aria-label": "Enter your job title" }}
                    color="primary"
                    {...register("jobTitle")}
                  />
                </FormControl>
                <div style={{ width: "100%" }}>
                  <StyleError>{errors.jobTitle?.message as string}</StyleError>
                </div>

                <StyleLabel>
                  <Typography>Bio</Typography>
                  <Typography color={"orange"}>*</Typography>
                </StyleLabel>

                <FormControl
                  fullWidth
                  sx={{
                    backgroundColor: "#353535",
                    color: "#FFF",
                    borderRadius: "10px",
                  }}
                >
                  <InputBase
                    id="bio"
                    defaultValue=""
                    sx={{ p: 2, color: "#FFF" }}
                    placeholder="Enter your bio"
                    inputProps={{ "aria-label": "Enter your bio" }}
                    color="primary"
                    multiline={true}
                    minRows={3}
                    {...register("bio")}
                  />
                </FormControl>
                <div style={{ width: "100%" }}>
                  <StyleError>{errors.bio?.message as string}</StyleError>
                </div>
              </ScrollBigSize>

              <StyleButton>
                <ButtonSecondary fullWidth onClick={handleClose}>
                  <Typography sx={{ p: "8px 0" }}>Cancel</Typography>
                </ButtonSecondary>

                <ButtonPrimary
                  disabled={openButton.value}
                  type="submit"
                  fullWidth
                >
                  <Typography sx={{ p: "8px 0" }}>Save</Typography>
                </ButtonPrimary>
              </StyleButton>
            </StyleBottom>
          </form>
        ) : (
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 5,
              backgroundColor: "#252525",
            }}
          >
            <Image
              height={200}
              // width={}
              src={Campaign}
              title="Request"
              alt="Request"
            />
            <StyleRequest>
              <IconCertification />
              <Typography variant="h6">Your profile updated!</Typography>
            </StyleRequest>
            <Typography>
              You can either go back to your profile or create a new campaign.
            </Typography>
            <StyleBottomCampaign>
              <ButtonPrimary fullWidth onClick={handleClose}>
                <Typography sx={{ p: "8px 0" }}>Back to Profile</Typography>
              </ButtonPrimary>
              {/* <ButtonSecondary fullWidth onClick={handleClose}>
                <Typography sx={{ p: "8px 0" }}>Create new Campaign</Typography>
              </ButtonSecondary> */}
            </StyleBottomCampaign>
          </Stack>
        )}
      </StyleModalBox>
    </ModalCustom>
  );
};

export default EditProfile;

const ModalCustom = styled(Modal)``;

const StyleModalBox = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #2e2e2e;
  border: 1px solid #2e2e2e;
  color: #fff;
  box-shadow: 24;
  padding: 0;
`;

const StyleTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px 0;
`;

const StyleButtonClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const StyleBottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* gap: 5px; */
  flex-wrap: nowrap;
  background-color: #252525;
  border-radius: 10px;
  width: 100%;
  padding: 20px 50px;
`;

const ScrollBigSize = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 500px;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  @media only screen and (max-width: 1024px) {
    height: 400px;
  }

  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;

const StyleLabel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 8px;
`;

const StyleButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

const StyleBottomCampaign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  gap: 10px;
`;

const StyleInput = styled(TextField)`
  border-radius: 20px;
  color: #fff;
  background-color: #353535;
  border: 0px #353535 solid;
`;

export const StyleError = styled.p`
  display: flex;
  color: red;
  font-size: 14px;
  white-space: normal;
`;

const StyleRequest = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  color: #f23581;
  margin-top: 15px;
`;

const StylePriceCurrency = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

const Price = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Currency = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ItemCurrency = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const AddNewTag = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

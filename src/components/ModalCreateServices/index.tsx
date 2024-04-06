"use client";
import { IconCertification, IconClose, IconPlus } from "@/assets/icons";
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
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as anchor from '@project-serum/anchor';
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "../ButtonCustom";
import {
  DATACURRENCY,
  DATAPAYMENTMETHOD,
  DATAPLATFORM,
} from "@/constant/dataMockupCreateCampaign";
import Campaign from "@/assets/images/Request.png";
import { createServicesSchema_ } from "@/validations/createServicesSchema";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import idl from "@/contract/abis/services.json"
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";

type Props = {
  isShowModal: boolean,
  setIsShowModal: any
};

const CreateServices = (props: Props) => {
  const { isShowModal, setIsShowModal } = props
  const openGotIt = useBoolean();
  const openButton = useBoolean();
  const wallet = useAnchorWallet();

  const idlString = JSON.stringify(idl)
  const idlJson = JSON.parse(idlString)
  const programID = new PublicKey("wrdw7sX7TSk66f5zMpn9N3YTAiRNMHV6kqTkLCSw72f")

  const { publicKey } = useWalletMultiButton({ onSelectWallet() { any } });

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(createServicesSchema_),
    mode: "onChange",
  });

  const [typeOfRequest, setTypeOfRequest] = React.useState("");

  const getProvider = () => {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const provider = new anchor.AnchorProvider(connection, wallet as any, {
      preflightCommitment: 'processed',
    })
    return provider
  }

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setTypeOfRequest(event.target.value as string);
  };

  const handleClose = () => {
    setIsShowModal(false);
    // openHireMe();
  };

  const myAccount = anchor.web3.Keypair.generate()
  const myServices = anchor.web3.Keypair.generate()


  const onSubmitForm = async (data: any) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    const provider = getProvider()
    const program = new anchor.Program(idlJson, programID, provider)
    data.kol = myAccount.publicKey
    data.serviceFee = new anchor.BN(data.serviceFee)
    data.paymentMethod = "OnetimePayment"
    const callMethod = await program.methods
      .createService(data.kol, data.serviceName, data.platform, data.serviceFee, data.currency, data.paymentMethod, data.description)
      .accounts({
        hirer: publicKey,
        service: myServices.publicKey,
        systemProgram: programID
      })
      .signers([])
      .rpc({
        commitment: 'confirmed',
      })
    openGotIt.onTrue();
  };



  const checkForm = watch();

  useEffect(() => {
    const allValuesFilled = Object.values(checkForm).every(
      (value) => value === ""
    );

    if (allValuesFilled) {
      openButton.onTrue();
    } else {
      openButton.onFalse();
    }
  }, [checkForm]);



  return (
    <Modal
      open={isShowModal}
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
            Create Service
          </Typography>
        </StyleTop>
        {!openGotIt.value ? (
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <StyleBottom>
              <StyleLabel>
                <Typography>Select Platform</Typography>
                <Typography color={"orange"}>*</Typography>
              </StyleLabel>
              <FormControl fullWidth sx={{ minWidth: "800px" }}>
                <InputLabel id="platform" sx={{ color: "#FFF" }}>
                  Select Platform
                </InputLabel>
                <Select
                  id="platform"
                  labelId="platform"
                  // value={typeOfRequest}
                  label="Select Platform"
                  sx={{
                    borderRadius: "20px",
                    color: "#FFF",
                    backgroundColor: "#353535",
                    border: "0px #353535 solid",
                  }}
                  {...register("platform")}
                // onChange={handleChangeSelect}
                >
                  {DATAPLATFORM.map((option) => (
                    <MenuItem key={option.id} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                <StyleError>
                  {errors.platform?.message as string}
                </StyleError>
              </FormControl>

              <StyleLabel>
                <Typography>Service name</Typography>
                <Typography color={"orange"}>*</Typography>
              </StyleLabel>
              {/* <FormControl fullWidth>
              <TextField
                id="fullName"
                label="Enter your full name"
                defaultValue={fullName ?? ""}
                {...register("fullName")}
                sx={{
                  // borderRadius: "20px",
                  color: "#FFF",
                  backgroundColor: "#353535",
                  border: "0px #353535 solid",
                }}
                // onChange={handleChangeFullName}
              />
              <StyleError>{errors.fullName?.message as string}</StyleError>
            </FormControl> */}

              <FormControl
                fullWidth
                sx={{
                  backgroundColor: "#353535",
                  borderRadius: "50px",
                }}
              >
                <InputBase
                  id="serviceName"
                  defaultValue=""
                  sx={{ p: "12px 10px", color: "#FFF" }}
                  placeholder="Enter your Service name"
                  inputProps={{ "aria-label": "Enter your full name" }}
                  color="primary"
                  {...register("serviceName")}
                />
              </FormControl>
              <div style={{ width: "100%" }}>
                <StyleError>
                  {errors.serviceName?.message as string}
                </StyleError>
              </div>

              <StyleLabel>
                <Typography>Service description</Typography>
                <Typography color={"orange"}>*</Typography>
              </StyleLabel>
              {/* <FormControl fullWidth>
              <TextField
                id="inputOther"
                label="Input other request"
                defaultValue=""
                {...register("inputOther")}
                multiline={true}
                minRows={3}
                sx={{
                  backgroundColor: "#353535",
                  border: "0px #353535 solid",
                }}
              />
            </FormControl> */}
              <FormControl
                fullWidth
                sx={{
                  backgroundColor: "#353535",
                  color: "#FFF",
                  borderRadius: "10px",
                }}
              >
                <InputBase
                  id="description"
                  defaultValue=""
                  sx={{ p: 2, color: "#FFF" }}
                  placeholder="Enter your Service description"
                  inputProps={{ "aria-label": "Input other request" }}
                  color="primary"
                  multiline={true}
                  minRows={3}
                  {...register("description")}
                />
              </FormControl>
              <div style={{ width: "100%" }}>
                <StyleError>
                  {errors.description?.message as string}
                </StyleError>
              </div>

              <StylePriceCurrency>
                <Price>
                  <StyleLabel>
                    <Typography>Price</Typography>
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
                      id="serviceFee"
                      defaultValue=""
                      sx={{ p: "12px 10px", color: "#FFF" }}
                      placeholder="Enter your Service name"
                      inputProps={{ "aria-label": "Enter your full name" }}
                      color="primary"
                      {...register("serviceFee")}
                    />
                  </FormControl>
                  <div style={{ width: "100%" }}>
                    <StyleError>{errors.serviceFee?.message as string}</StyleError>
                  </div>
                </Price>

                <Currency>
                  <StyleLabel>
                    <Typography>Currency</Typography>
                    <Typography color={"orange"}>*</Typography>
                  </StyleLabel>
                  <FormControl fullWidth sx={{ width: "100%" }}>
                    <InputLabel id="currency" sx={{ color: "#FFF" }}>
                      Currency
                    </InputLabel>
                    <Select
                      id="currency"
                      labelId="currency"
                      // value={""}
                      label="Currency"
                      sx={{
                        borderRadius: "20px",
                        color: "#FFF",
                        backgroundColor: "#353535",
                        border: "0px #353535 solid",
                      }}
                      {...register("currency")}
                    // onChange={handleChangeSelect}
                    >
                      {DATACURRENCY.map((option) => (
                        <MenuItem key={option.id} value={option.value}>
                          <ItemCurrency>
                            {option.icon}
                            {option.label}
                          </ItemCurrency>
                        </MenuItem>
                      ))}
                    </Select>
                    <StyleError>
                      {errors.currency?.message as string}
                    </StyleError>
                  </FormControl>
                </Currency>
              </StylePriceCurrency>

              <StyleLabel>
                <Typography>Payment Method</Typography>
                <Typography color={"orange"}>*</Typography>
              </StyleLabel>
              <FormControl fullWidth sx={{ minWidth: "800px" }}>
                <InputLabel id="paymentMethod" sx={{ color: "#FFF" }}>
                  Payment method
                </InputLabel>
                <Select
                  id="paymentMethod"
                  labelId="paymentMethod"
                  // value={""}
                  label="Payment Method"
                  sx={{
                    borderRadius: "20px",
                    color: "#FFF",
                    backgroundColor: "#353535",
                    border: "0px #353535 solid",
                  }}
                  {...register("paymentMethod")}
                // onChange={handleChangeSelect}
                >
                  {DATAPAYMENTMETHOD.map((option) => (
                    <MenuItem key={option.id} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                <StyleError>
                  {errors.paymentMethod?.message as string}
                </StyleError>
              </FormControl>
              {/* <StyleLabel>
                <Typography>Tags</Typography>
                <Typography color={"orange"}>*</Typography>
              </StyleLabel>
              <AddNewTag>
                <ButtonPrimary startIcon={<IconPlus />} size="small">
                  Add New Tag
                </ButtonPrimary>
              </AddNewTag> */}
              <StyleBottomSubmit>
                <ButtonPrimary
                  disabled={openButton.value}
                  type="submit"
                  fullWidth
                >
                  <Typography sx={{ p: "8px 0" }}>Submit</Typography>
                </ButtonPrimary>
              </StyleBottomSubmit>
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
              <Typography variant="h6">
                Service created successfully!
              </Typography>
            </StyleRequest>
            <Typography>
              You can either go back to your profile or create a new campaign.
            </Typography>
            <StyleBottomCampaign>
              <ButtonPrimary fullWidth onClick={handleClose}>
                <Typography sx={{ p: "8px 0" }}>Back to Profile</Typography>
              </ButtonPrimary>
              <ButtonSecondary fullWidth onClick={handleClose}>
                <Typography sx={{ p: "8px 0" }}>Create new Service</Typography>
              </ButtonSecondary>
            </StyleBottomCampaign>
          </Stack>
        )}
      </StyleModalBox>
    </Modal>
  );
};

export default CreateServices;

const StyleModalBox = styled(Box)`
overflow-x: scroll;
    height: 750px;
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
  padding: 15px 0;
  margin-top: 330px;
`;

const StyleButtonClose = styled.div`
  position: absolute;
  top: 110px;
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

const StyleLabel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 8px;
`;

const StyleBottomSubmit = styled.div`
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
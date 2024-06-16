"use client";
import { IconCertification, IconClose } from "@/assets/icons";
import Campaign from "@/assets/images/Request.png";
import {
  DATACURRENCY,
  DATAPAYMENTMETHOD,
  DATAPLATFORM,
} from "@/constant/dataMockupCreateCampaign";
import { useBoolean } from "@/hooks/useBoolean";
import { TService } from "@/types/service";
import { createServicesSchema_ } from "@/validations/createServicesSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "../ButtonCustom";
import { createServices } from "@/services";
import { IMAGES } from "@/constant";
import IconPlus from "@/assets/icons/IconPlus";
import { useAlert } from "@/contexts/AlertContext";

type Props = {
  isShowModal: boolean;
  setIsShowModal: any;
  fetchDataServices?: any;
};

const CreateServices = (props: Props) => {
  const { isShowModal, setIsShowModal, fetchDataServices } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const openGotIt = useBoolean();
  const openButton = useBoolean();
  const wallet = useWallet();

  const { setAlertSuccess, setAlertError } = useAlert();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(createServicesSchema_),
    mode: "onChange",
  });

  const handleClose = () => {
    setIsShowModal(false);
    reset();
    // openHireMe();
  };

  const onSubmitForm = async (data: TService) => {
    setIsLoading(true);
    data.image = IMAGES;
    data.currency = data.currency;
    data.tags = ["tag test"];
    data.isPublic = true;
    data.price = +data.price;
    data.kolWallet = wallet.publicKey?.toBase58() as string;

    try {
      const res = await createServices(data);
      setIsLoading(false);
      openGotIt.onTrue();
      setAlertSuccess(
        "Create success",
        `${res?.data?.message ?? "Create Success"}`,
      );
      fetchDataServices();
    } catch (error: any) {
      setIsLoading(false);
      setAlertError(
        "Create Error",
        `${error?.data?.message[0] ?? "Create Error"}`,
      );
    }
  };

  const checkForm = watch();

  useEffect(() => {
    const allValuesFilled = Object.values(checkForm).every(
      (value) => value === "",
    );

    if (allValuesFilled) {
      openButton.onTrue();
    } else {
      openButton.onFalse();
    }
  }, [checkForm, openButton]);

  return (
    <Modal
      open={isShowModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyleModalBox>
        <StyleTop>
          <StyleButtonClose onClick={handleClose}>
            <IconClose size={20} />
          </StyleButtonClose>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h4"
            fontWeight={"600"}
            marginTop={"1rem"}
          >
            Create Service
          </Typography>
        </StyleTop>

        {!openGotIt.value ? (
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className={
              "flex justify-center flex-col items-center flex-nowrap border-t border-white w-full px-12 py-5 gap-4"
            }
          >
            <>
              <StyleLabel>
                <Typography>Select Platform</Typography>
                <Typography color={"red"}>*</Typography>
              </StyleLabel>
              <Select
                id="platform"
                fullWidth
                labelId="platform"
                hiddenLabel
                label="Select Platform"
                sx={{
                  borderRadius: "16px",
                  color: "#FFF",
                  backgroundColor: "#353535",
                  border: "0px #353535 solid",
                }}
                {...register("platform")}
              >
                {DATAPLATFORM.map((option) => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              <StyleError>{errors.platform?.message as string}</StyleError>
            </>

            <>
              <input
                type="text"
                className="w-full p-2 border border-gray-500 text-white rounded-xl focus:outline-none focus:ring-0 focus:border-[#f23581] placeholder:text-gray-500 bg-darkblack-400"
                placeholder="Enter your Service name"
                {...register("projectName")}
              />
              <StyleError>{errors.projectName?.message as string}</StyleError>
            </>

            <>
              <StyleLabel>
                <Typography>Service description</Typography>
                <Typography color={"red"}>*</Typography>
              </StyleLabel>
              <textarea
                rows={4}
                className="w-full resize-none p-2 border border-gray-500 text-white rounded-xl focus:outline-none focus:ring-0 focus:border-[#f23581] placeholder:text-gray-500 bg-darkblack-400"
                placeholder="Enter Service Description"
                {...register("jobDescription")}
              />
              <StyleError>
                {errors.jobDescription?.message as string}
              </StyleError>
            </>

            <StylePriceCurrency>
              <Price>
                <StyleLabel>
                  <Typography>Price</Typography>
                  <Typography color={"red"}>*</Typography>
                </StyleLabel>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-500 text-white rounded-xl focus:outline-none focus:ring-0 focus:border-[#f23581] placeholder:text-gray-500 bg-darkblack-400"
                  {...register("price")}
                />
                <StyleError>{errors.price?.message as string}</StyleError>
              </Price>

              <Currency>
                <StyleLabel>
                  <Typography>Currency</Typography>
                  <Typography color={"red"}>*</Typography>
                </StyleLabel>
                <select
                  className="w-full p-2 border border-gray-500 text-white rounded-xl focus:outline-none focus:ring-0 focus:border-[#f23581] placeholder:text-gray-500 bg-darkblack-400"
                  {...register("currency")}
                >
                  {DATACURRENCY.map((option) => (
                    <option
                      key={option.id}
                      value={option.value}
                      className="flex gap-2 p-2"
                    >
                      {option.icon}
                      {option.label}
                    </option>
                  ))}
                </select>
                <StyleError>{errors.currency?.message as string}</StyleError>
              </Currency>
            </StylePriceCurrency>

            <>
              <StyleLabel>
                <Typography>Payment Method</Typography>
                <Typography color={"red"}>*</Typography>
              </StyleLabel>

              <select
                className="w-full p-2 border border-gray-500 text-white rounded-xl focus:outline-none focus:ring-0 focus:border-[#f23581] placeholder:text-gray-500 bg-darkblack-400"
                {...register("paymentMethod")}
              >
                {DATAPAYMENTMETHOD.map((option) => (
                  <option key={option.id} value={option.value} className="p-2">
                    {option.label}
                  </option>
                ))}
              </select>
              <StyleError>{errors.paymentMethod?.message as string}</StyleError>
            </>

            <>
              <StyleLabel>
                <Typography>Tags</Typography>
                <Typography color={"red"}>*</Typography>
              </StyleLabel>
              <AddNewTag>
                <ButtonPrimary startIcon={<IconPlus />} size="small">
                  Add New Tag
                </ButtonPrimary>
              </AddNewTag>
              <StyleBottomSubmit>
                <ButtonPrimary
                  disabled={openButton.value}
                  type="submit"
                  fullWidth
                  isLoading={isLoading}
                >
                  <Typography sx={{ p: "8px 0" }}>Submit</Typography>
                </ButtonPrimary>
              </StyleBottomSubmit>
            </>
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
              <ButtonPrimary
                fullWidth
                onClick={() => {
                  openGotIt.onFalse();
                  setIsShowModal(false);
                }}
              >
                <Typography sx={{ p: "8px 0" }}>Back to Profile</Typography>
              </ButtonPrimary>
              <ButtonSecondary
                fullWidth
                onClick={() => {
                  openGotIt.onFalse();
                  reset();
                }}
              >
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
  height: 750px;
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: auto;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  background-color: #191d24;
  color: #fff;
  box-shadow: 24;
  padding: 16px;
  border-radius: 16px;
`;

const StyleTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
`;

const StyleButtonClose = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const StyleLabel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 8px;
  gap: 4px;
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

export const StyleError = styled.p`
  display: flex;
  color: red;
  width: 100%;
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

const AddNewTag = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

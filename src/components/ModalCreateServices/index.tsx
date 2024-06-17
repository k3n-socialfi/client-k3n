"use client";
import { IconCertification, IconClose } from "@/assets/icons";
import Campaign from "@/assets/images/Request.png";
import {
  DATACURRENCY,
  DATAPAYMENTMETHOD,
  DATAPLATFORM,
} from "@/constant/dataMockupCreateCampaign";
import { useBoolean } from "@/hooks/useBoolean";
import { Box, Modal, Stack, Typography } from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "../ButtonCustom";
import { createServices } from "@/services";
import { IMAGES } from "@/constant";
import { motion } from "framer-motion";
import { useAlert } from "@/contexts/AlertContext";
import SelectFilter from "@/modules/ranking/components/TableRanking/SelectFilter";
import { TAGS } from "@/constant/FilterData";
import { SpinnerLoader } from "../SpinnerLoader";

type Props = {
  isShowModal: boolean;
  setIsShowModal: any;
  fetchDataServices?: any;
  onClose?: () => void;
};

interface ICreateJobsFields {
  projectName: string | null;
  tags: string[];
  jobType: string | null;
  isPublic: boolean;
  jobDescription: string | null;
  organization: string[];
  image: string | null;
  price: number | null;
  paymentMethod: string | null;
  platform: string | null;
  currency: string | null;
  kolWallet: string | null;
}

const CreateServices = (props: Props) => {
  const { isShowModal, setIsShowModal, fetchDataServices, onClose } = props;
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
    setValue,
    formState: { errors },
  } = useForm<ICreateJobsFields>({
    mode: "onChange",
    defaultValues: {
      projectName: null,
      tags: [],
      jobType: null,
      isPublic: false,
      jobDescription: null,
      organization: [],
      image: null,
      price: null,
      paymentMethod: null,
      platform: null,
      currency: null,
      kolWallet: null,
    },
  });

  const handleClose = () => {
    setIsShowModal(false);
    reset();
    // openHireMe();
  };

  const onSubmitForm: SubmitHandler<ICreateJobsFields> = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
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
    },
    [fetchDataServices, openGotIt, setAlertError, setAlertSuccess],
  );

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
      onClose={onClose}
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

        {isLoading && (
          <div className="flex items-center justify-center z-20 h-full w-full bg-[#00000044]">
            <SpinnerLoader />
          </div>
        )}

        {!openGotIt.value ? (
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className={
              "flex justify-center flex-col items-center flex-nowrap w-full px-12 py-5 gap-4"
            }
          >
            <>
              <StyleLabel>
                <Typography>Select Platform</Typography>
                <Typography color={"red"}>*</Typography>
              </StyleLabel>
              <SelectFilter
                placeHolder="Select platform"
                options={DATAPLATFORM}
                onUpdateValue={(value) => setValue("platform", value)}
              />
              <StyleError>{errors.platform?.message as string}</StyleError>
            </>

            <>
              <input
                type="text"
                className="w-full h-14 p-2 bg-darkblack-500 text-white rounded-lg border-none outline-none ring-0 focus:ring-0 focus:border-[#f23581] placeholder:text-gray-500"
                placeholder="Enter your service name"
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
                className="w-full resize-none p-2 bg-darkblack-500 text-white rounded-lg border-none outline-none ring-0 focus:ring-0 focus:border-[#f23581] placeholder:text-gray-500"
                placeholder="Enter Service Description"
                {...register("jobDescription")}
              />
              <StyleError>
                {errors.jobDescription?.message as string}
              </StyleError>
            </>

            <StylePriceCurrency>
              <div className="flex flex-col w-full gap-2">
                <StyleLabel>
                  <Typography>Price</Typography>
                  <Typography color={"red"}>*</Typography>
                </StyleLabel>
                <input
                  type="text"
                  placeholder="Amount"
                  className="w-full h-14 p-2 bg-darkblack-500 text-white rounded-lg border-none outline-none ring-0 focus:ring-0 focus:border-[#f23581] placeholder:text-gray-500"
                  {...register("price")}
                />
                <StyleError>{errors.price?.message as string}</StyleError>
              </div>

              <div className="flex flex-col w-full">
                <StyleLabel>
                  <Typography>Currency</Typography>
                  <Typography color={"red"}>*</Typography>
                </StyleLabel>
                <SelectFilter
                  placeHolder="Select currency"
                  options={DATACURRENCY}
                  onUpdateValue={(value) => {
                    // const currency = watch("currency");
                    // if (currency) {
                    //   if (currency?.includes(value)) {
                    //     const newCurrency = currency.filter(
                    //       (item) => item !== value,
                    //     );
                    //     setValue("currency", newCurrency);
                    //   } else {
                    //     setValue("currency", [...currency, value]);
                    //   }
                    // }
                    setValue("currency", value);
                  }}
                />
                <StyleError>{errors.currency?.message as string}</StyleError>
              </div>
            </StylePriceCurrency>

            <>
              <StyleLabel>
                <Typography>Payment Method</Typography>
                <Typography color={"red"}>*</Typography>
              </StyleLabel>
              <SelectFilter
                placeHolder="Select platform"
                options={DATAPAYMENTMETHOD}
                onUpdateValue={(value) => setValue("paymentMethod", value)}
              />
              <StyleError>{errors.paymentMethod?.message as string}</StyleError>
            </>

            <>
              <StyleLabel>
                <Typography>Tags</Typography>
                <Typography color={"red"}>*</Typography>
              </StyleLabel>
              <SelectFilter
                placeHolder="Add new tag"
                options={TAGS}
                multiple
                onUpdateValue={(value) => {
                  const tags = watch("tags");
                  if (tags) {
                    if (tags?.includes(value)) {
                      const newTags = tags.filter((item) => item !== value);
                      setValue("tags", newTags);
                    } else {
                      setValue("tags", [...tags, value]);
                    }
                  }
                }}
              />
            </>
            <ButtonPrimary type="submit" fullWidth disabled={isLoading}>
              Create service
            </ButtonPrimary>
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
  height: 100%;
  max-height: 750px;
  position: absolute;
  overflow: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 694px;
  background-color: #191d24;
  color: #fff;
  box-shadow: 24;
  border-radius: 8px;
`;
const StyleTop = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #191d24;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
  border-bottom: 0.5px solid #ffffff22;
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
  gap: 4px;
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

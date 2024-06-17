"use client";
import { ButtonPrimary, ButtonText } from "@/components/ButtonCustom";
import { CHAIN, PLATFORM } from "@/constant/dataMockupSignUp";
import { useBoolean } from "@/hooks/useBoolean";
import {
  Checkbox,
  FormControl,
  InputBase,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Loading from "../Loading";
import WrapperSignUp from "../WrapperSignUp";
import "../styles/styles.css";
import { useCallback, useState } from "react";
import { TAGS } from "@/constant/FilterData";
import SelectFilter from "@/modules/ranking/components/TableRanking/SelectFilter";
import { apiCreateUser, TUpdateUser } from "../../services";
import { useAlert } from "@/contexts/AlertContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const roles = [
  "Celebrities",
  "Experts",
  "KOL",
  "Influencers",
  "Reseacher",
  "Other",
];

const tags = [
  "NFT",
  "Defi",
  "NFTfi",
  "DAO",
  "Infrastructure",
  "Stablecoin",
  "Automation",
  "Memecoin",
  "GambleFi",
  "SocialFi",
  "AI",
  "Inscriptions",
  "Ordinals",
  "RWA",
  "ERC404",
  "Other",
];

type Props = {};

interface ISelect {
  onChange?: any;
}

const FormCreateProject = (props: Props) => {
  const { push, back } = useRouter();
  const openDoneSubmit = useBoolean();
  const { setAlertSuccess, setAlertError } = useAlert();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TUpdateUser>({
    mode: "onChange",
    defaultValues: {
      isProjectAccount: false,
      projectChain: null,
      projectName: null,
      tokenName: null,
      platform: null,
      role: null,
      type: null,
      location: null,
      language: null,
      tags: [],
    },
  });

  const onSubmitForm: SubmitHandler<TUpdateUser> = useCallback(
    async (data) => {
      try {
        const dataForm = { ...data, isProjectAccount: true };
        await apiCreateUser(dataForm);
        openDoneSubmit.onTrue();
      } catch (error) {
        setAlertError(
          "Create user",
          "User already exists, please connect wallet and log in",
        );
      }
    },
    [openDoneSubmit, setAlertError],
  );

  const handleBack = () => {
    back();
    // const modifiedUrl = currentUrl.replace(/\/[^/]+\/?$/, "");
    // push(modifiedUrl);
  };

  return !openDoneSubmit.value ? (
    <FormCustom onSubmit={handleSubmit(onSubmitForm)}>
      <Rows>
        <Columns>
          <Label>
            <Typography>Project Name</Typography>
          </Label>

          <input
            type="text"
            className="w-full h-14 p-2 bg-darkblack-500 text-white rounded-lg border-none outline-none ring-0 focus:ring-0 focus:border-[#f23581] placeholder:text-gray-500"
            placeholder="Enter your service name"
            {...register("projectName")}
          />
          <Error>{errors.projectName?.message as string} </Error>
        </Columns>

        <Columns>
          <Label>
            <Typography>Token Name</Typography>
          </Label>

          <input
            type="text"
            className="w-full h-14 p-2 bg-darkblack-500 text-white rounded-lg border-none outline-none ring-0 focus:ring-0 focus:border-[#f23581] placeholder:text-gray-500"
            placeholder="Enter your service name"
            {...register("tokenName")}
          />

          <Error>{errors.tokenName?.message as string} </Error>
        </Columns>
      </Rows>

      <SelectCreate>
        <Label>
          <Typography>Tag</Typography>
        </Label>

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

        <Error>{errors.tags?.message as string} </Error>
      </SelectCreate>

      <Rows>
        <SelectCreate>
          <Label>
            <Typography>Project Chain</Typography>
          </Label>

          <SelectFilter
            placeHolder="Select chain"
            options={CHAIN}
            onUpdateValue={(value) => setValue("projectChain", value)}
          />

          <Error>{errors.projectChain?.message as string} </Error>
        </SelectCreate>

        <SelectCreate>
          <Label>
            <Typography>Region</Typography>
          </Label>

          <SelectFilter
            placeHolder="Select region"
            options={PLATFORM}
            onUpdateValue={(value) => setValue("platform", value)}
          />

          <Error>{errors.platform?.message as string} </Error>
        </SelectCreate>
      </Rows>
      <Button>
        <ButtonText
          fullWidth
          backgroundColorBt="textCustom.backCreateAccount"
          borderColorBt="textCustom.backCreateAccount"
          borderRadius="40px"
          onClick={handleBack}
        >
          <Typography variant="h5" sx={{ padding: "8px 0" }}>
            Back
          </Typography>
        </ButtonText>

        <ButtonPrimary type="submit" borderRadius="40px" fullWidth>
          <Typography variant="h5" sx={{ padding: "8px 0" }}>
            Continue
          </Typography>
        </ButtonPrimary>
      </Button>
    </FormCustom>
  ) : (
    <WrapperSignUp title="Register Success">
      <ContainerDone>
        <Loading />
        <Typography variant="h5">
          Thank you for registering <br /> We are reviewing your request
        </Typography>

        <ButtonPrimary
          type="submit"
          borderRadius="40px"
          fullWidth
          onClick={() => push("/")}
        >
          <Typography variant="h5" sx={{ padding: "8px 0" }}>
            Continue
          </Typography>
        </ButtonPrimary>
      </ContainerDone>
    </WrapperSignUp>
  );
};

export default FormCreateProject;

const ContainerDone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  color: #fff;
  text-align: center;
`;

const FormCustom = styled.form`
  width: 100%;
  display: flex;
  padding: 16px;
  border-radius: 12px;
  background: #191d24;
  flex-direction: column;
  gap: 24px;
  color: #fff;
`;

const Label = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 20px;
  margin-bottom: 8px;
  font-weight: 700;
`;

const Error = styled.p`
  display: flex;
  color: red;
  width: 100%;
  font-size: 14px;
  white-space: normal;
`;

const Rows = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 500px) {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0;
  }
`;

const Columns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 500px) {
    gap: 0;
  }
`;

const SelectCreate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

const FormControlCustom = styled(FormControl)`
  width: 100% !important;
  background: transparent !important;
  border-radius: 10px !important;
  border: 1px solid #58627c !important;
`;

const SelectCustom = styled(Select)<ISelect>`
  background: transparent !important;
  color: #58627c !important;
  border: 1px solid #58627c !important;
  border-radius: 10px !important;
  &:focus-visible {
    border: none !important;
    outline: none !important;
  }
`;

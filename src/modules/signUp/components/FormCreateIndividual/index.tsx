"use client";
import { ButtonPrimary, ButtonText } from "@/components/ButtonCustom";
import { CHAIN, LANGUAGE, PLATFORM, ROLES } from "@/constant/dataMockupSignUp";
import { useBoolean } from "@/hooks/useBoolean";
import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Loading from "../Loading";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useCallback, useState } from "react";
import { apiCreateUser, TUpdateUser } from "../../services";
import { useAlert } from "@/contexts/AlertContext";
import "../styles/styles.css";
import SelectFilter from "@/modules/ranking/components/TableRanking/SelectFilter";
import { TAGS } from "@/constant/FilterData";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

interface Props {
  showPoint?: (value: boolean) => void;
  showChain?: boolean;
}

interface ISelect {
  onChange?: any;
}

const FormCreateIndividual = ({ showPoint, showChain }: Props) => {
  const { push, back } = useRouter();
  const openDoneSubmit = useBoolean();
  const { setAlertSuccess, setAlertError } = useAlert();

  const {
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
      showPoint?.(false);
      try {
        const dataForm = { ...data, isProjectAccount: false };
        await apiCreateUser(dataForm);
        openDoneSubmit.onTrue();
      } catch (error) {
        setAlertError(
          "Create user",
          "User already exists, please connect wallet and log in",
        );
      }
    },
    [openDoneSubmit, setAlertError, showPoint],
  );

  const handleBack = () => {
    back();
    // const modifiedUrl = currentUrl.replace(/\/[^/]+\/?$/, "");
    // push(modifiedUrl);
  };

  return !openDoneSubmit.value ? (
    <FormCustom onSubmit={handleSubmit(onSubmitForm)}>
      <SelectCreate>
        <Label>Role</Label>

        <SelectFilter
          placeHolder="Change role"
          options={ROLES}
          onUpdateValue={(value) => setValue("role", value)}
        />

        <Error>{errors.role?.message as string}</Error>
      </SelectCreate>

      <SelectCreate>
        <Label>Tags</Label>
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

        <Error>{errors.tags?.message as string}</Error>
      </SelectCreate>

      {showChain && (
        <SelectCreate>
          <Label>Chain</Label>

          <SelectFilter
            placeHolder="Select chain"
            options={CHAIN}
            onUpdateValue={(value) => setValue("projectChain", value)}
          />

          <Error>{errors.projectChain?.message as string}</Error>
        </SelectCreate>
      )}

      <RegionAndProjectChain>
        <SelectCreate>
          <Label>Region</Label>

          <SelectFilter
            placeHolder="Select your region"
            options={PLATFORM}
            onUpdateValue={(value) => setValue("platform", value)}
          />

          <Error>{errors.platform?.message as string}</Error>
        </SelectCreate>

        <SelectCreate>
          <Label>Language</Label>

          <SelectFilter
            placeHolder="Select language"
            options={LANGUAGE}
            onUpdateValue={(value) => setValue("language", value)}
          />

          <Error>{errors.language?.message as string}</Error>
        </SelectCreate>
      </RegionAndProjectChain>
      <Button>
        <ButtonText
          fullWidth
          backgroundColorBt="textCustom.backCreateAccount"
          borderColorBt="textCustom.backCreateAccount"
          borderRadius="40px"
          onClick={handleBack}
        >
          <Typography
            variant="h5"
            sx={{ padding: "8px 0" }}
            color={showChain ? "" : "#82EBFF"}
          >
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
    <ContainerDone>
      <Loading />
      <Typography variant="h5">
        Thank you for registering <br /> We are reviewing your request
      </Typography>

      <ButtonPrimary
        type="submit"
        borderRadius="10px"
        onClick={() => push("/")}
        fullWidth
      >
        <Typography variant="h5" sx={{ padding: "8px 0" }}>
          Continue
        </Typography>
      </ButtonPrimary>
    </ContainerDone>
  );
};

export default FormCreateIndividual;

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

const Label = styled.p`
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
  font-size: 14px;
  white-space: normal;
`;

const RegionAndProjectChain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 428px) {
    flex-direction: column;
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
  @media (max-width: 428px) {
    flex-wrap: wrap;
  }
`;

const SelectCustom = styled(Select)<ISelect>`
  background: transparent !important;
  color: #58627c !important;
  border: 1px solid #58627c !important;
  border-radius: 10px !important;
  color: #fff;
  .MuiSelect-icon {
    color: #fff;
    width: 30px;
    height: 30px;
  }
  &:focus-visible {
    border: none !important;
    outline: none !important;
  }
`;

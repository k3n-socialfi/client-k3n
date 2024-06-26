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
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Loading from "../Loading";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { apiCreateUser } from "../../services";
import { useAlert } from "@/contexts/AlertContext";
import "../styles/styles.css";

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

interface Props {
  showPoint: (value: boolean) => void;
  showChain?: boolean;
}

interface ISelect {
  onChange?: any;
}

const FormCreateIndividual = ({ showPoint, showChain }: Props) => {
  const currentUrl = usePathname();
  const { push, back } = useRouter();
  const openDoneSubmit = useBoolean();
  const [roleName, setRoleName] = useState<string[]>([]);
  const [tagName, setTagName] = useState<string[]>([]);
  const { setAlertSuccess, setAlertError } = useAlert();

  const handleChangeRoles = (event: SelectChangeEvent<typeof roleName>) => {
    const {
      target: { value },
    } = event;
    setRoleName(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeTags = (event: SelectChangeEvent<typeof tagName>) => {
    const {
      target: { value },
    } = event;
    setTagName(typeof value === "string" ? value.split(",") : value);
  };

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

  const onSubmitForm = async (data: any) => {
    showPoint(false);
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
  };

  const handleBack = () => {
    back();
    // const modifiedUrl = currentUrl.replace(/\/[^/]+\/?$/, "");
    // push(modifiedUrl);
  };

  return !openDoneSubmit.value ? (
    <FormCustom onSubmit={handleSubmit(onSubmitForm)}>
      {/* <Label>
          <Typography>Role</Typography>
        </Label>

        <FormControlCustom>
          <InputBase
            id="role"
            defaultValue=""
            sx={{ p: "12px 10px", color: "#FFF" }}
            // placeholder="Role"
            inputProps={{ "aria-label": "Role" }}
            color="primary"
            {...register("role")}
          />
        </FormControlCustom>

        <div style={{ width: "100%" }}>
          <Error>{errors.role?.message as string}</Error>
        </div> */}

      {/* <Label>
          <Typography>Tag</Typography>
        </Label>

        <FormControlCustom>
          <InputBase
            id="tag"
            defaultValue=""
            sx={{ p: "12px 10px", color: "#FFF" }}
            // placeholder="Tag"
            inputProps={{ "aria-label": "Tag" }}
            color="primary"
            {...register("tag")}
          />
        </FormControlCustom>

        <div style={{ width: "100%" }}>
          <Error>{errors.tag?.message as string}</Error>
        </div> */}

      <SelectCreate>
        <Label>
          <Typography>Role</Typography>
        </Label>

        <FormControl fullWidth sx={{ width: "100%" }}>
          <InputLabel id="role" sx={{ color: "#637592" }}>
            Change role
          </InputLabel>
          <SelectCustom
            id="role"
            labelId="role"
            // value={""}
            label="Change role"
            {...register("role")}
            // onChange={handleChangeSelect}
          >
            {ROLES.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                <ItemSelect>{option.label}</ItemSelect>
              </MenuItem>
            ))}
          </SelectCustom>
          <Error>{errors.role?.message as string}</Error>
        </FormControl>
      </SelectCreate>

      <SelectCreate>
        <Label>
          <Typography>Tag</Typography>
        </Label>
        <FormControl fullWidth sx={{ width: "100%" }}>
          <InputLabel id="tags" sx={{ color: "#637592" }}>
            Select new tag{" "}
          </InputLabel>
          <SelectCustom
            labelId="tags"
            id="tags"
            multiple
            value={tagName}
            {...register("tags")}
            input={<OutlinedInput label="Select new tag" />}
            renderValue={(selected: any) => selected.join(", ")}
            MenuProps={MenuProps}
            onChange={handleChangeTags}
          >
            {tags.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={tagName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </SelectCustom>
          <Error>{errors.tag?.message as string}</Error>
        </FormControl>
      </SelectCreate>

      {showChain && (
        <SelectCreate>
          <Label>
            <Typography>Chain</Typography>
          </Label>

          <FormControl fullWidth sx={{ width: "100%" }}>
            <InputLabel id="chain" sx={{ color: "#637592" }}>
              Select Chain
            </InputLabel>
            <SelectCustom
              id="chain"
              labelId="chain"
              // value={""}
              label="Select Chain"
              {...register("chain")}
              // onChange={handleChangeSelect}
            >
              {CHAIN.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  <ItemSelect>
                    {option?.icon}
                    {option?.label}
                  </ItemSelect>
                </MenuItem>
              ))}
            </SelectCustom>
            <Error>{errors.chain?.message as string}</Error>
          </FormControl>
        </SelectCreate>
      )}

      <RegionAndProjectChain>
        <SelectCreate>
          <Label>
            <Typography>Region</Typography>
          </Label>

          <FormControl fullWidth sx={{ width: "100%" }}>
            <InputLabel id="region" sx={{ color: "#637592" }}>
              Select your region
            </InputLabel>
            <SelectCustom
              id="region"
              labelId="region"
              // value={""}
              label="Select your region"
              {...register("region")}
              // onChange={handleChangeSelect}
            >
              {PLATFORM.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  <ItemSelect>{option.label}</ItemSelect>
                </MenuItem>
              ))}
            </SelectCustom>
            <Error>{errors.region?.message as string}</Error>
          </FormControl>
        </SelectCreate>

        <SelectCreate>
          <Label>
            <Typography>Language</Typography>
          </Label>

          <FormControl fullWidth sx={{ width: "100%" }}>
            <InputLabel id="language" sx={{ color: "#637592" }}>
              Select Language
            </InputLabel>
            <SelectCustom
              id="language"
              labelId="language"
              // value={""}
              label="Select Language"
              {...register("language")}
              // onChange={handleChangeSelect}
            >
              {LANGUAGE.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  <ItemSelect>{option.label}</ItemSelect>
                </MenuItem>
              ))}
            </SelectCustom>
            <Error>{errors.language?.message as string}</Error>
          </FormControl>
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

const Container = styled.div`
  /* width: 598px; */

  /* @media (max-width: 666px) {
    width: 348px;
  }
  @media (max-width: 428px) {
    width: 100%;
  } */
`;

const FormCustom = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  color: #fff;
`;

const Label = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 8px;
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
  gap: 10px;
`;

const ItemSelect = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
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

const FormControlCustom = styled(FormControl)`
  width: 100% !important;
  background: transparent !important;
  border-radius: 20px !important;
  border: 1px solid #58627c !important;
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

const DropCheckbox = styled.div`
  margin: 20px 0;
`;

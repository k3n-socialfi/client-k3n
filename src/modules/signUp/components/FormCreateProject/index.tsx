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
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Loading from "../Loading";
import WrapperSignUp from "../WrapperSignUp";
import "../styles/styles.css";
import { useState } from "react";

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
  const currentUrl = usePathname();
  const router = useRouter();
  const openDoneSubmit = useBoolean();
  const [tagName, setTagName] = useState<string[]>([]);

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

  const handleChangeTags = (event: SelectChangeEvent<typeof tagName>) => {
    const {
      target: { value },
    } = event;
    setTagName(typeof value === "string" ? value.split(",") : value);
  };

  const onSubmitForm = async (data: any) => {
    openDoneSubmit.onTrue();
  };

  const handleBack = () => {
    router.back();
    // const modifiedUrl = currentUrl.replace(/\/[^/]+\/?$/, "");
    // router.push(modifiedUrl);
  };

  return !openDoneSubmit.value ? (
    <FormCustom onSubmit={handleSubmit(onSubmitForm)}>
      <Rows>
        <Columns>
          <Label>
            <Typography>Project Name</Typography>
          </Label>

          <FormControlCustom>
            <InputBase
              id="projectName"
              defaultValue=""
              sx={{ p: "12px 10px", color: "#637592" }}
              placeholder="BONK"
              inputProps={{ "aria-label": "BONK" }}
              color="primary"
              {...register("projectName")}
            />
          </FormControlCustom>

          <div style={{ width: "100%" }}>
            <Error>{errors.projectName?.message as string} </Error>
          </div>
        </Columns>

        <Columns>
          <Label>
            <Typography>Token Name</Typography>
          </Label>

          <FormControlCustom>
            <InputBase
              id="tokenName"
              defaultValue=""
              sx={{ p: "12px 10px", color: "#637592" }}
              placeholder="BONK"
              inputProps={{ "aria-label": "BONK" }}
              color="primary"
              {...register("tokenName")}
            />
          </FormControlCustom>

          <div style={{ width: "100%" }}>
            <Error>{errors.tokenName?.message as string} </Error>
          </div>
        </Columns>
      </Rows>

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
          <Error>{errors.tag?.message as string} </Error>
        </FormControl>
      </SelectCreate>

      <Rows>
        <SelectCreate>
          <Label>
            <Typography>Project Chain</Typography>
          </Label>

          <FormControl fullWidth sx={{ width: "100%" }}>
            <InputLabel id="projectChain" sx={{ color: "#58627c" }}>
              Select Chain
            </InputLabel>
            <SelectCustom
              id="projectChain"
              labelId="projectChain"
              // value={""}
              label="Select Chain"
              {...register("projectChain")}
              // onChange={handleChangeSelect}
            >
              {CHAIN.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  <ItemSelect>{option.label}</ItemSelect>
                </MenuItem>
              ))}
            </SelectCustom>
            <Error>{errors.projectChain?.message as string} </Error>
          </FormControl>
        </SelectCreate>

        <SelectCreate>
          <Label>
            <Typography>Region</Typography>
          </Label>

          <FormControl fullWidth sx={{ width: "100%" }}>
            <InputLabel id="region" sx={{ color: "#58627c" }}>
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
            <Error>{errors.region?.message as string} </Error>
          </FormControl>
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
          onClick={() => router.push("/")}
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

const Container = styled.div`
  /* width: 598px; */
  /* display: flex;
  flex-direction: column;
  color: #fff; */
  /* @media (max-width: 666px) {
    width: 348px;
  } */
`;
const FormCustom = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
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

"use client";
import { ButtonPrimary, ButtonText } from "@/components/ButtonCustom";
import { CHAIN, PLATFORM } from "@/constant/dataMockupSignUp";
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

type Props = {};

const FormCreateProject = (props: Props) => {
  const currentUrl = usePathname();
  const router = useRouter();
  const openDoneSubmit = useBoolean();

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
    openDoneSubmit.onTrue();
    console.log("🚀 ~ FormCreateProject ~ data:", data);
  };

  const handleBack = () => {
    // router.back();
    const modifiedUrl = currentUrl.replace(/\/[^/]+\/?$/, "");

    router.push(modifiedUrl);
  };

  return !openDoneSubmit.value ? (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Container>
        <Label>
          <Typography>Your Project Name</Typography>
        </Label>

        <FormControlCustom>
          <InputBase
            id="fullName"
            defaultValue=""
            sx={{ p: "12px 10px", color: "#FFF" }}
            placeholder="Enter your name"
            inputProps={{ "aria-label": "Enter your name" }}
            color="primary"
            {...register("fullName")}
          />
        </FormControlCustom>

        <div style={{ width: "100%" }}>
          <Error>{errors.fullName?.message as string}</Error>
        </div>

        <Label>
          <Typography>Your Project username</Typography>
        </Label>

        <FormControlCustom>
          <InputBase
            id="username"
            defaultValue=""
            sx={{ p: "12px 10px", color: "#FFF" }}
            placeholder="Enter your username"
            inputProps={{ "aria-label": "Enter your username" }}
            color="primary"
            {...register("username")}
          />
        </FormControlCustom>

        <div style={{ width: "100%" }}>
          <Error>{errors.username?.message as string}</Error>
        </div>
        <RegionAndProjectChain>
          <SelectCreate>
            <Label>
              <Typography>Region</Typography>
            </Label>

            <FormControl fullWidth sx={{ width: "100%" }}>
              <InputLabel id="region" sx={{ color: "#FFF" }}>
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
              <Typography>Project Chain</Typography>
            </Label>

            <FormControl fullWidth sx={{ width: "100%" }}>
              <InputLabel id="chain" sx={{ color: "#FFF" }}>
                Select Chain
              </InputLabel>
              <SelectCustom
                id="chain"
                labelId="chain"
                // value={""}
                label="Select chain"
                {...register("chain")}
                // onChange={handleChangeSelect}
              >
                {CHAIN.map((option) => (
                  <MenuItem key={option.id} value={option.value}>
                    <ItemSelect>{option.label}</ItemSelect>
                  </MenuItem>
                ))}
              </SelectCustom>
              <Error>{errors.chain?.message as string}</Error>
            </FormControl>
          </SelectCreate>
        </RegionAndProjectChain>
        <Button>
          <ButtonText
            fullWidth
            backgroundColorBt="textCustom.backCreateAccount"
            borderColorBt="textCustom.backCreateAccount"
            borderRadius="10px"
            onClick={handleBack}
          >
            <Typography variant="h5" sx={{ padding: "8px 0" }}>
              Back
            </Typography>
          </ButtonText>

          <ButtonPrimary type="submit" borderRadius="10px" fullWidth>
            <Typography variant="h5" sx={{ padding: "8px 0" }}>
              Continue
            </Typography>
          </ButtonPrimary>
        </Button>
      </Container>
    </form>
  ) : (
    <ContainerDone>
      <Loading />
      <Typography variant="h5">
        Thank you for registering <br /> We are reviewing your request
      </Typography>

      <ButtonPrimary type="submit" borderRadius="10px" fullWidth>
        <Typography variant="h5" sx={{ padding: "8px 0" }}>
          Continue
        </Typography>
      </ButtonPrimary>
    </ContainerDone>
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
  width: 598px;
  display: flex;
  flex-direction: column;
  color: #fff;
  @media (max-width: 666px) {
    width: 348px;
  }
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
`;

const FormControlCustom = styled(FormControl)`
  width: 100% !important;
  background: transparent !important;
  border-radius: 20px !important;
  border: 1px solid #58627c !important;
`;

const SelectCustom = styled(Select)`
  background: transparent !important;
  color: #58627c !important;
  border: 1px solid #58627c !important;
  border-radius: 20px !important;
  &:focus-visible {
    border: none !important;
    outline: none !important;
  }
`;

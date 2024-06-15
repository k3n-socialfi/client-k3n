import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

import { InputValues } from "@/interface/inputValues.interface";
import { IconDown } from "@/assets/icons";

interface IPropsField {
  lable?: string;
  placeholder?: string;
  name?: string;
  onChange?: (event: SelectChangeEvent) => void;
  value?: string;
  register: UseFormRegister<InputValues> | any;
  messageError?: string;
  defaultValue?: string;
}
export default function Selects({
  lable,
  name,
  onChange,
  value,
  register,
  messageError,
  placeholder,
  defaultValue,
}: IPropsField) {
  const [valueDefault, setValueDefault] = useState<string>("male");

  const handleSetValePrice = (event: SelectChangeEvent) => {
    setValueDefault(event.target.value as string);
  };

  return (
    <WrapperField>
      <LableField>{lable}</LableField>
      <FormControllContainer>
        <FormControlCustom
          sx={{
            width: "100%",
          }}
        >
          <SelectCustom
            {...register(name)}
            MenuProps={{
              PaperProps: {
                style: {
                  paddingTop: 0,
                  paddingBottom: 0,
                },
              },
              MenuListProps: {
                style: {
                  paddingTop: 0,
                  paddingBottom: 0,
                },
              },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={handleSetValePrice}
            name={name}
            IconComponent={IconDown}
            defaultValue={defaultValue ?? valueDefault}
            placeholder={placeholder}
          >
            <MenuItemCustom value="male">
              <Item>male</Item>
            </MenuItemCustom>
            <MenuItemCustom value="female">
              <Item>female</Item>
            </MenuItemCustom>
          </SelectCustom>
        </FormControlCustom>
      </FormControllContainer>
      {messageError && (
        <LabelError>
          Your balance is insufficient. Please deposit more funds
        </LabelError>
      )}
    </WrapperField>
  );
}

const WrapperField = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
const FormControllContainer = styled.div`
  width: 100%;
`;

const FormControlCustom = styled(FormControl)`
  & .MuiOutlinedInput-root {
    background: transparent;
    width: 100%;
    height: 44px;
    border: 2px solid #57617b !important;
    color: #57617b;
    padding: 0 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    fieldset {
    }
    &:hover fieldset {
      border-color: #57617b;
      border: 0px solid #57617b !important;
    }
    &.Mui-focused fieldset {
      border-color: #57617b;
      border: 0px solid #57617b !important;
    }
  }
`;

const LableField = styled.span`
  font-size: 16px;
  color: #fff;
`;
const MenuItemCustom = styled(MenuItem)`
  && {
    height: 50px;
    width: 100%;
    padding: 10px 5px !important;
    background: #191d24 !important;
    color: #b9fafd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      background-color: #032a51;
    }
    &.Mui-selected {
      background-color: #032a51;
      color: #fff;
    }
  }
`;

const SelectCustom = styled(Select)`
  &.MuiSelect-select {
    width: 100%;
    padding-left: 12px;
    color: #fff;
    &:focus {
      background-color: transparent;
    }
  }
  &.MuiSvgIcon-root {
    color: #fff;
  }
  .MuiPaper-root,
  .MuiMenu-list,
  .MuiList-root {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 5px;
  padding-left: 10px;
  color: #57617b;

  &:hover {
    color: #fff;
  }
`;

const LabelError = styled.span`
  font-size: 14px;
  color: #f1811a;
  margin-top: 10px;
  margin-bottom: 30px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
`;

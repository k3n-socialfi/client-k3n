import { ChangeEvent } from "react";
import { MenuItem, TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

import { InputValues } from "@/interface/inputValues.interface";

interface IPropsField {
  lable?: string;
  placeholder?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegister<InputValues> | any;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "email"
    | "file"
    | "number"
    | "password"
    | "text"
    | "time"
    | "hidden"
    | "image"
    | "month"
    | "radio"
    | "reset"
    | "search"
    | "submit";

  defaultValue?: string;
}
export default function FieldInput({
  lable,
  placeholder,
  onChange,
  name,
  register,
  type,
  defaultValue,
}: IPropsField) {
  return (
    <>
      <WrapperField>
        <LableField>{lable}</LableField>
        <TextFieldCustom
          {...register(name)}
          onChange={onChange}
          defaultValue={defaultValue ?? ""}
          placeholder={placeholder}
          variant="filled"
          name={name}
          type={type ?? "text"}
        />
      </WrapperField>
    </>
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
const TextFieldCustom = styled(TextField)`
  width: 100%;
  & .MuiInputBase-root {
    height: 44px;
    background-color: transparent;
    border-radius: 10px;
    padding: 0px 15px;
    color: #57617b;
    border: 2px solid #57617b !important;
    &:hover {
      border-color: #57617b;
    }
    &:focus {
      border-color: #57617b;
    }
    input {
      padding: 12px 12px;
    }
  }
  & .MuiInputBase-root[type="date"] {
    background: #191d24;
  }

  & .MuiFilledInput-underline:before,
  & .MuiFilledInput-underline:after {
    display: none;
  }

  & .MuiFilledInput-root {
    border: none;
    box-shadow: none;

    &:hover {
      border: none;
    }
    &.Mui-focused {
      border: none;
      box-shadow: none;
    }
  }

  &::placeholder {
    color: white;
    opacity: 1;
    text-align: center;
  }
`;
const LableField = styled.span`
  font-size: 16px;
  color: #fff;
`;

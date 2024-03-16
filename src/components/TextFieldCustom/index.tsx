"use client";
import { useFormContext, Controller, FieldValues } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";

interface ITextFieldCustomProps {
  name: string;
  helperText?: string;
  type?: string;
}

export default function TextFieldCustom({
  name,
  helperText,
  type,
  ...other
}: ITextFieldCustomProps & TextFieldProps) {
  const { control } = useFormContext<FieldValues>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          value={type === "number" && field.value === 0 ? "" : field.value}
          onChange={(event) => {
            if (type === "number") {
              field.onChange(Number(event.target.value));
            } else {
              field.onChange(event.target.value);
            }
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
          sx={{ color: "#FFF" }}
        />
      )}
    />
  );
}

import {
  ButtonCustom,
  ButtonElevated,
  ButtonPrimary,
  ButtonSecondary,
  ButtonText,
} from "@/components/ButtonCustom";
import * as React from "react";

export interface IDemoButtonProps {}

export default function DemoButton(props: IDemoButtonProps) {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h2>Primary</h2>
        <ButtonPrimary size="large">Button</ButtonPrimary>
        <ButtonPrimary size="large" disabled>
          Button
        </ButtonPrimary>
        <ButtonPrimary size="medium">Button</ButtonPrimary>
        <ButtonPrimary size="small">Button</ButtonPrimary>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h2>Secondary</h2>
        <ButtonSecondary size="large">Button</ButtonSecondary>
        <ButtonSecondary size="large" disabled>
          Button
        </ButtonSecondary>
        <ButtonSecondary size="medium">Button</ButtonSecondary>
        <ButtonSecondary size="small">Button</ButtonSecondary>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h2>Text</h2>
        <ButtonText size="large">Button</ButtonText>
        <ButtonText size="large" disabled>
          Button
        </ButtonText>
        <ButtonText size="medium">Button</ButtonText>
        <ButtonText size="small">Button</ButtonText>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h2>Elevated</h2>
        <ButtonElevated size="large">Button</ButtonElevated>
        <ButtonElevated
          size="large"
          backgroundColorBtDisElevated="primary.pressed"
          disabled
        >
          Button
        </ButtonElevated>
        <ButtonElevated size="medium">Button</ButtonElevated>
        <ButtonElevated size="small">Button</ButtonElevated>
      </div>
    </div>
  );
}

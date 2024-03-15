// src/theme.ts
"use client";
import { createTheme } from "@mui/material/styles";

// Augment the palette to include a white color
declare module "@mui/material/styles" {
  interface Palette {
    textCustom: Palette["primary"];
    elevated: Palette["primary"];
    chip: Palette["primary"];
  }
  interface PaletteOptions {
    textCustom?: PaletteOptions["primary"];
    elevated?: PaletteOptions["primary"];
    chip?: PaletteOptions["primary"];
  }
  interface SimplePaletteColorOptions {
    main: string;
    [_: string]: string;
  }
}

// Update the Button's color options to include a white option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    textCustom: true;
    elevated: true;
    chip: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: `'Kode Mono', monospace`,
  },
  palette: {
    primary: {
      main: "#F23581",
      whiteText: "#FFFFFF",
      pinkText: "#F23581",
      enabled: "#F23581",
      hover: "#D81B67",
      pressed: "#BF024E",
      disabled: "#F23581",
    },
    secondary: {
      main: "#FFFFFF1A",
      enabled: "#FFFFFF1A",
      hover: "#FDE6EF",
      pressed: "#BF024E",
      disabled: "#FFFFFF1A",
    },
    textCustom: {
      main: "#FFFFFF1A",
      enabled: "#FFFFFF1A",
      hover: "#FDE6EF",
      pressed: "#BF024E",
      disabled: "#FFFFFF1A",
      like: "#9B9AE5",
      borderLike: "#61E4C5",
    },
    elevated: {
      main: "#F23581",
      enabled: "#F23581",
      hover: "#FFFFFF1A",
      pressed: "#FFFFFF1A",
      disabled: "#F23581",
    },
    chip: {
      main: "#FFD7F4",
      airdropsColor: "#F23581",
      airdropsBg: "#FFD7F4",
      marketerColor: "#667085",
      marketerBg: "#EBFCFF",
      injectiveColor: "#667085",
      injectiveBg: "#CCFFF3",
      ntfColor: "#667085",
      ntfBg: "#FFD7F4",
      etherenumColor: "#25002D",
      etherenumBg: "#EBFCFF",
      midCapColor: "#667085",
      midCapBg: "#CCFFF3",
    },
  },
});

export default theme;

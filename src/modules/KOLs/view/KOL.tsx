"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TableTrending from "../components/Table";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    // maxWidth: 90,
    width: "100%",
    backgroundColor: "#F23581",
  },
});

interface StyledTabProps {
  label: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(13),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#FFFFFF",
    fontSize: theme.typography.pxToRem(15),
  },
}));

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ margin: "12px 0" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default function TabKOLs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CustomBox>
      <Box sx={{ backgroundColor: "#353535" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Trending KOLs" />
          <StyledTab label="Meme" />
          <StyledTab label="DeFi" />
          <StyledTab label="SocialFi" />
          <StyledTab label="Airdrops" />
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TableTrending />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item 3
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item 4
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item 5
      </CustomTabPanel>
    </CustomBox>
  );
}

const CustomBox = styled(Box)`
  width: 100%;
  padding: 24px 12px;
  background: #353535;
  overflow: hidden;
`;

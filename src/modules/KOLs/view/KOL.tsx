"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import SkeletonKOLs from "@/components/Skeleton/KOLs";
import { useHomeContext } from "@/contexts/HomeContext";
import { CustomTab, SkeletonKols } from "../components/Style/style";
import TableTrending from "../components/Table/Table";

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
    <CustomTab
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </CustomTab>
  );
}

export default function TabKOLs() {
  const { isLoading } = useHomeContext();

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
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {isLoading ? (
          <SkeletonKols>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
              <SkeletonKOLs key={row} />
            ))}
          </SkeletonKols>
        ) : (
          <TableTrending />
        )}
      </CustomTabPanel>
    </CustomBox>
  );
}

const CustomBox = styled(Box)`
  width: 100%;
  padding: 24px 0;
  background: var(--Background-Background, #080a0c);
  overflow: hidden;
  .MuiTabs-flexContainer {
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;
  }

  @media (max-width: 768px) {
    .MuiTabs-indicator {
      display: none !important;
    }
  }
`;

"use client";
import { IconArrowDown, IconArrowUp, IconCloseSideBar } from "@/assets/icons";
import { DATASIDEBAR, DATASIDEBARBOTTOM } from "@/constant/dataMockupSidebar";
import { Collapse, IconButton } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import TooltipCustom from "../Tooltip";
import { CloseSideBar, Discover } from "./style";

type TSidebar = {
  handleClose?: () => void;
};

export default function SideBar({ handleClose }: TSidebar) {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [expanded, setExpanded] = React.useState(DATASIDEBAR.map(() => true));

  const handleChange = (panel: number) => {
    setExpanded((prev: boolean[]) => {
      const clar = [...prev];
      clar[panel] = !clar[panel];
      return clar;
    });
  };
  const handleItemClick = (index: number) => {
    // if (!open) {
    //   handleDrawerOpen();
    // }
    handleChange(index);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerToggle = () => {
    // setOpen(!open);
    // setExpanded(DATASIDEBAR.map(() => false));
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <Discover>
        <Drawer variant="permanent" open={open}>
          <div>
            <DrawerHeader sx={{ justifyContent: "center" }}>
              {/* {open && (
              <Image
                height={50}
                width={150}
                src={logoK3N}
                title="logo"
                alt="logo k3n"
              />
            )} */}
              {/* <IconButton onClick={handleDrawerToggle}>
              {theme.direction === "rtl" ? <IconMenuBar /> : <IconMenuBar />}
            </IconButton> */}
            </DrawerHeader>
            {/* <CloseSideBar onClick={handleClose}>
            <IconCloseSideBar />
          </CloseSideBar> */}

            {DATASIDEBAR.map((item, index) => {
              return (
                <>
                  <List>
                    <ListItemButton
                      onClick={() => {
                        handleItemClick(index);
                      }}
                    >
                      {!open && <ListItemIcon>{item.icon}</ListItemIcon>}
                      <ListItemText
                        primary={item.label}
                        sx={{ pl: open ? 2 : "", color: item.color }}
                      />
                      {expanded[index] ? (
                        <IconArrowUp color={item.colorArrow} />
                      ) : (
                        <IconArrowDown />
                      )}
                    </ListItemButton>
                    {item.children.map((itemChild, indexChild) => {
                      return (
                        <>
                          <Collapse
                            in={expanded[index]}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              {itemChild?.isCommingSoon ? (
                                <ListItemButton
                                  sx={{
                                    pl: 4,
                                    gap: 2,
                                  }}
                                  onClick={() => router.push(itemChild.link)}
                                >
                                  {itemChild.icon}
                                  <ListItemText primary={itemChild.label} />
                                </ListItemButton>
                              ) : (
                                <Tooltip
                                  title={<TooltipCustom />}
                                  placement="right"
                                >
                                  <ListItemButton
                                    sx={{
                                      pl: 4,
                                      gap: 2,
                                    }}
                                    onClick={() => router.push(itemChild.link)}
                                  >
                                    {itemChild.icon}
                                    <ListItemText primary={itemChild.label} />
                                  </ListItemButton>
                                </Tooltip>
                              )}
                            </List>
                          </Collapse>
                        </>
                      );
                    })}
                  </List>
                </>
              );
            })}
          </div>

          <List>
            {DATASIDEBARBOTTOM.map((item, index) => (
              <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
                {item?.isCommingSoon ? (
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      pl: open ? 4 : "",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                ) : (
                  <Tooltip title={<TooltipCustom />} placement="right">
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        pl: open ? 4 : "",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </Tooltip>
                )}
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Discover>
    </Box>
  );
}

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: "20%",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  border: "none",
  justifyContent: "space-between",
  background: "#393939",
  color: "#fff",
  gap: "100px",
  "@media (max-width: 1250px)": {
    width: "30%",
  },
  "@media (max-width: 820px)": {
    width: "50%",
  },
  "@media (max-width: 520px)": {
    width: "60%",
  },
  "@media (max-width: 391px)": {
    width: "100%",
  },
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  border: "none",
  justifyContent: "space-between",
  background: "#393939",
  color: "#fff",
  gap: "100px",
  "@media (max-width: 768px)": {
    width: "0%",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

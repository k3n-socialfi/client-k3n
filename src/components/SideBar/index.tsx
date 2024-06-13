"use client";
import { IconArrowDown, IconArrowUp } from "@/assets/icons";
import {
  DATASIDEBAR,
  DATASIDEBARBOTTOM,
  DATASIDEBARTOKEN,
} from "@/constant/dataMockupSidebar";
import { Collapse } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import TooltipCustom from "../Tooltip";
import { Discover, Item, ListItemTextCustom } from "./style";
import {motion} from 'framer-motion';

type TSidebar = {
  handleToggleSidebar?: () => void;
};

export default function SideBar({ handleToggleSidebar }: TSidebar) {
  const router = useRouter();
  const [open, setOpen] = React.useState(true);
  const [expanded, setExpanded] = React.useState(DATASIDEBAR.map(() => true));
  const path = usePathname();

  const handleChange = (panel: number) => {
    setExpanded((prev: boolean[]) => {
      const clar = [...prev];
      clar[panel] = !clar[panel];
      return clar;
    });
  };

  const handleItemClick = (index: number) => {
    handleChange(index);
  };

  const token =
    typeof window !== "undefined" && localStorage.getItem("accessToken");

  return (
    <Box
      sx={{
        display: "flex", background: "#080a0c",
      }}
    >
      <CssBaseline />
      <Discover
        style={{
          zIndex: 10,
        }}
      >
        <Drawer variant="permanent" open={open}>
          <motion.div
            style={{
              background: "#080a0c",
              height: "100%",
              width: "100%",
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              duration: 2
            }}
          >
            <DrawerHeader
              sx={{ justifyContent: "center", zIndex: 10 }}
            ></DrawerHeader>

            {token
              ? DATASIDEBARTOKEN.map((item, index) => {
                  return (
                    <>
                      <List
                        sx={{
                          background: "#080a0c",
                          marginTop: index === 0 ? "20px" : 0,
                        }}
                      >
                        {item.children.length ? (
                          <ListItemButton
                            onClick={() => {
                              handleItemClick(index);
                            }}
                          >
                            {!open && <ListItemIcon>{item.icon}</ListItemIcon>}
                            <ListItemTextCustom
                              primary={item.label}
                              sx={{ pl: open ? 2 : "", color: item.color }}
                            />
                            {expanded[index] ? (
                              <IconArrowUp color={item.colorArrow} />
                            ) : (
                              <IconArrowDown />
                            )}
                          </ListItemButton>
                        ) : (
                          <ListItemButton
                            sx={{
                              pl: 4,
                              gap: "4px",
                            }}
                            onClick={() => item.link && router.push(item.link)}
                          >
                            <Item isSide={path === item.link}>
                              {item.icon}
                              <ListItemTextCustom
                                sx={{ color: item.color }}
                                primary={item.label}
                              />
                            </Item>
                          </ListItemButton>
                        )}
                        {item.children?.map((itemChild, indexChild) => (
                          <Collapse
                            key={indexChild}
                            in={expanded[index]}
                            timeout="auto"
                            unmountOnExit
                            onClick={handleToggleSidebar}
                          >
                            <List component="div" disablePadding>
                              {!itemChild?.isCommingSoon ? (
                                <ListItemButton
                                  sx={{
                                    pl: 5,
                                    gap: "4px",
                                  }}
                                  onClick={() => router.push(itemChild.link)}
                                >
                                  <Item isSide={path === itemChild.link}>
                                    {itemChild.icon}
                                    <ListItemTextCustom
                                      sx={{ color: itemChild.color }}
                                      primary={itemChild.label}
                                    />
                                  </Item>
                                </ListItemButton>
                              ) : (
                                <Tooltip
                                  title={<TooltipCustom />}
                                  placement="right"
                                >
                                  <ListItemButton
                                    sx={{
                                      pl: 5,
                                      gap: "4px",
                                    }}
                                    onClick={() => router.push(itemChild.link)}
                                  >
                                    <Item>
                                      {itemChild.icon}
                                      <ListItemTextCustom
                                        sx={{ color: itemChild.color }}
                                        primary={itemChild.label}
                                      />
                                    </Item>
                                  </ListItemButton>
                                </Tooltip>
                              )}
                            </List>
                          </Collapse>
                        ))}
                      </List>
                    </>
                  );
                })
              : DATASIDEBAR.map((item, index) => {
                  return (
                    <List
                      key={index}
                      sx={{
                        background: "#080a0c",
                        marginTop: index === 0 ? "20px" : 0,
                      }}
                    >
                      {item.children.length ? (
                        <ListItemButton
                          onClick={() => {
                            handleItemClick(index);
                          }}
                        >
                          {!open && <ListItemIcon>{item.icon}</ListItemIcon>}
                          <ListItemTextCustom
                            primary={item.label}
                            sx={{ pl: open ? 2 : "", color: item.color }}
                          />
                          {expanded[index] ? (
                            <IconArrowUp color={item.colorArrow} />
                          ) : (
                            <IconArrowDown />
                          )}
                        </ListItemButton>
                      ) : (
                        <ListItemButton
                          sx={{
                            pl: 4,
                            gap: "4px",
                          }}
                          onClick={() => item.link && router.push(item.link)}
                        >
                          <Item isSide={path === item.link}>
                            {item.icon}
                            <ListItemTextCustom
                              sx={{ color: item.color }}
                              primary={item.label}
                            />
                          </Item>
                        </ListItemButton>
                      )}
                      {item.children.map((itemChild, indexChild) => {
                        return (
                          <>
                            <Collapse
                              in={expanded[index]}
                              timeout="auto"
                              unmountOnExit
                              onClick={handleToggleSidebar}
                            >
                              <List component="div" disablePadding>
                                {!itemChild?.isCommingSoon ? (
                                  <ListItemButton
                                    sx={{
                                      pl: 5,
                                      gap: "4px",
                                    }}
                                    onClick={() => router.push(itemChild.link)}
                                  >
                                    <Item isSide={path === itemChild.link}>
                                      {itemChild.icon}
                                      <ListItemTextCustom
                                        sx={{ color: itemChild.color }}
                                        primary={itemChild.label}
                                      />
                                    </Item>
                                  </ListItemButton>
                                ) : (
                                  <Tooltip
                                    title={<TooltipCustom />}
                                    placement="right"
                                  >
                                    <ListItemButton
                                      sx={{
                                        pl: 5,
                                        gap: "4px",
                                      }}
                                      onClick={() =>
                                        router.push(itemChild.link)
                                      }
                                    >
                                      <Item>
                                        {itemChild.icon}
                                        <ListItemTextCustom
                                          sx={{ color: itemChild.color }}
                                          primary={itemChild.label}
                                        />
                                      </Item>
                                    </ListItemButton>
                                  </Tooltip>
                                )}
                              </List>
                            </Collapse>
                          </>
                        );
                      })}
                    </List>
                  );
                })}
          </motion.div>

          <List>
            {DATASIDEBARBOTTOM.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -100}}
                animate={{ opacity: 1, x: 0}}
                transition={{
                  duration: 1,
                  delay: index * 0.4
                }}
                key={index}
              >
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={handleToggleSidebar}
                >
                  {!item?.isCommingSoon ? (
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
                      <ListItemTextCustom
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
                        <ListItemTextCustom
                          primary={item.label}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Tooltip>
                  )}
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Drawer>
      </Discover>
    </Box>
  );
}

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: "15%",
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
  background: "var(--background-primary)",
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
  background: "#000000",
  color: "#fff",
  gap: "100px",
  "@media (max-width: 768px)": {
    width: "0%",
  },
});

const DrawerHeader = styled("div")(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  background: "transparent",

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: any) => prop !== "open",
})<AppBarProps>(({ theme, open }: any) => ({
  background: "#000000",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    background: "#000000",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop: any) => prop !== "open",
})(({ theme, open }: any) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  background: "#080a0c",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

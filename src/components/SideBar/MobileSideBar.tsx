"use client";

import { IconArrowDown, IconArrowUp, IconCloseSideBar } from "@/assets/icons";
import { DATASIDEBAR, DATASIDEBARBOTTOM } from "@/constant/dataMockupSidebar";
import { Collapse } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import TooltipCustom from "../Tooltip";
import { Item, ListItemTextCustom } from "./style";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileSidebar({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const router = useRouter();
  const [expanded, setExpanded] = React.useState(DATASIDEBAR.map(() => true));
  const path = usePathname();
  const open = true;

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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
          className={"fixed z-0 top-0 left-0 w-full h-full bg-[#00000099]"}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 0.2,
            }}
            className="flex flex-col border-r border-[#FFFFFF22] justify-between h-full w-full max-w-[280px] bg-black"
          >
            <div className="w-full flex justify-end pr-2 pt-4">
              <div className="cursor-pointer">
                <IconCloseSideBar size={32} />
              </div>
            </div>
            <motion.div
              className="flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
              }}
            >
              {DATASIDEBAR.map((item, index) => {
                return (
                  <List key={index}>
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
                        // onClick={handleToggleSidebar}
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
                );
              })}
            </motion.div>

            <List>
              {DATASIDEBARBOTTOM.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.2,
                  }}
                  key={index}
                >
                  <ListItem
                    key={item.id}
                    disablePadding
                    sx={{ display: "block" }}
                    // onClick={handleToggleSidebar}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

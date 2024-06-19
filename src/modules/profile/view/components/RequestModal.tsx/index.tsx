import { IconBitCoin } from "@/assets/icons";
import {
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  MenuItem,
  Modal,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { color } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import useRequest from "./useRequest";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#000",
  border: "2px solid #000",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
  color: "white",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  maxHeight: "90vh",

  overflowY: "auto",
  scrollbarWidth: "none",
};

import BONKIcon from "@/assets/svgs/tokens/bonk.svg";
import Image from "next/image";

const currencies = [
  {
    value: "USD",
    label: "question1",
  },
  {
    value: "EUR",
    label: "question2",
  },
  {
    value: "BTC",
    label: "question3",
  },
  {
    value: "JPY",
    label: "question4",
  },
];
const RequestModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const { register, handleSubmit, onSubmitRequest, isTransaction } =
    useRequest();

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmitRequest)}>
          <Box sx={style}>
            <Typography fontSize={"36px"}>Request Collaboration</Typography>

            <Box>
              <Box display={"flex"}>
                <Typography variant="h6" component="h2">
                  Type of question
                </Typography>
                <Typography color={"red"}>*</Typography>
              </Box>

              <TextField
                {...register("typeOfRequest")}
                fullWidth={true}
                select
                defaultValue="none"
                InputProps={{
                  sx: {
                    borderRadius: "40px",
                    color: "white",
                    backgroundColor: "#4f4f4f",
                  },
                }}
              >
                <MenuItem value="none" disabled>
                  Select type of request
                </MenuItem>
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box>
              <Box display={"flex"}>
                <Typography variant="h6" component="h2">
                  Full name
                </Typography>
                <Typography color={"red"}>*</Typography>
              </Box>

              <TextField
                {...register("fullName")}
                placeholder="Input your full name"
                fullWidth={true}
                InputProps={{
                  sx: {
                    borderRadius: "40px",
                    color: "white",
                    backgroundColor: "#4f4f4f",
                  },
                }}
                // variant="outlined"
              />
            </Box>

            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Other request
              </Typography>
              <TextField
                {...register("otherRequest")}
                placeholder="Input other request"
                fullWidth={true}
                multiline={true}
                rows={5}
                InputProps={{
                  sx: {
                    borderRadius: "20px",
                    color: "white",
                    backgroundColor: "#4f4f4f",
                  },
                }}
                variant="outlined"
              />
            </Box>

            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Tip to DM
              </Typography>

              <OutlinedInput
                {...register("tip")}
                type="number"
                placeholder="Input your tips amount"
                sx={{
                  borderRadius: "40px",
                  color: "white",
                  backgroundColor: "#4f4f4f",
                }}
                fullWidth={true}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        display: "flex",
                        gap: "2px",
                        flexShrink: 0,
                      }}
                      edge="end"
                    >
                      <p className="text-white">BONK</p>
                      <div className="relative w-6 h-6">
                        <Image
                          alt="token"
                          fill
                          sizes="100%"
                          src={BONKIcon}
                          objectFit="contain"
                        />
                      </div>
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
            {/* 
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <button className="text-[#009FF5]">reset</button>

            <Box display={"flex"} gap={"16px"}>
              <button className="text-[#009FF5]">1M BONK</button>
              <button className="text-[#009FF5]">2M BONK</button>
              <button className="text-[#009FF5]">3M BONK</button>
            </Box>
          </Box> */}
            <br />

            <Box width={"100%"}>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.9 }}
                className="w-full py-[14px] px-[67px] bg-[#F23581] rounded-[40px]"
              >
                {isTransaction ? (
                  <Box height={'100%'} sx={{ display: "flex", alignItems:'center', justifyContent:'center' }}>
                    <CircularProgress color="success" />
                  </Box>
                ) : (
                  <p className="text-2xl text-white text-nowrap">Submit</p>
                )}
              </motion.button>
            </Box>
          </Box>
        </form>
      </Modal>
    </div>
  );
};

export default RequestModal;

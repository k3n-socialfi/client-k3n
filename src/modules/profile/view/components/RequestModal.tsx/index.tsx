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
import { SubmitHandler, UseFormRegister, UseFormReset, UseFormSetValue, useForm } from "react-hook-form";
import { RequestTypeSchema } from "@/schema";


const LIST_QUESTION = [
  {
    value: "1",
    label: "question1",
  },
  {
    value: "2",
    label: "question2",
  },
  {
    value: "3",
    label: "question3",
  },
  {
    value: "4",
    label: "question4",
  },
];


const RequestModal = ({
  open,
  handleClose,
  register,
  handleSubmit,
  onSubmitRequest,
  isTransaction,
  reset,
  setValue,
}: {
  open: boolean;
  handleClose: () => void;
  register: UseFormRegister<RequestTypeSchema>;
  handleSubmit: (callback: SubmitHandler<RequestTypeSchema>) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  onSubmitRequest:  SubmitHandler<RequestTypeSchema>;
  isTransaction: boolean;
  reset: UseFormReset<RequestTypeSchema>;
  setValue:UseFormSetValue<RequestTypeSchema> ;
}) => {


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

              <select
                {...register("typeOfRequest")}
                className="w-full h-14 pl-4 bg-[#4f4f4f] text-white rounded-[40px] border-none outline-none ring-0 focus:ring-0 focus:border-[#f23581] placeholder:text-white "
              >
                {LIST_QUESTION.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </Box>

            <Box>
              <Box display={"flex"}>
                <Typography variant="h6" component="h2">
                  Full name
                </Typography>
                <Typography color={"red"}>*</Typography>
              </Box>

              <input
                type="text"
                className="w-full h-14 pl-4 bg-[#4f4f4f] text-white rounded-[40px] border-none outline-none ring-0 focus:ring-0 focus:border-[#f23581] placeholder:text-white "
                placeholder="Enter your service name"
                {...register("fullName")}
              />
            </Box>

            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Other request
              </Typography>

              <textarea
                rows={4}
                cols={50}
                className="w-full resize-none pl-4 bg-[#4f4f4f]  text-white rounded-lg border-none outline-none ring-0 focus:ring-0 focus:border-[#f23581] placeholder:text-white"
                placeholder="Input other request"
                {...register("otherRequest")}
              />
            </Box>

            <Box>
              <Typography variant="h6" component="h2">
                Tip to DM
              </Typography>

              <div className="flex">
                <input
                  min={0}
                  type="number"
                  {...register("tip")}
                  className="w-full h-14 pl-4 bg-[#4f4f4f] text-white rounded-s-[40px] border-none outline-none ring-0 focus:ring-0 focus:border-[#f23581] placeholder:text-white "
                  placeholder="Input your tips amount"
                />

                <span className="inline-flex gap-2 items-center px-3 rounded-e-[40px]  bg-[#4f4f4f] ">
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
                </span>
              </div>
            </Box>

            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => reset()}
                type="button"
                className="text-[#009FF5]"
              >
                reset
              </motion.button>

              <Box display={"flex"} gap={"16px"}>
                <motion.button
                  onClick={() => setValue("tip", "1000000")}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="text-[#009FF5]"
                >
                  1M BONK
                </motion.button>
                <motion.button
                  onClick={() => setValue("tip", "2000000")}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="text-[#009FF5]"
                >
                  2M BONK
                </motion.button>
                <motion.button
                  onClick={() => setValue("tip", "3000000")}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="text-[#009FF5]"
                >
                  3M BONK
                </motion.button>
              </Box>
            </Box>

            <Box width={"100%"}>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-full py-[14px] px-[67px] bg-[#F23581] rounded-[40px]"
              >
                {isTransaction ? (
                  <CircularProgress color="success" />
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

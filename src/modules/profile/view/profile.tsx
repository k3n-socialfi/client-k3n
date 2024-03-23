"use client";
import {
  IconBlue,
  IconCertification,
  IconClose,
  IconEdit,
  IconLinked,
  IconStarNormal,
  IconTikTok,
  IconTwitter,
  IconVerify,
  IconYouTube,
} from "@/assets/icons";
import Diagram from "@/assets/images/Diagram.png";
import Request from "@/assets/images/Request.png";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { DATASELECTTYPEOFREQUEST } from "@/constant/dataMockupSelectType";
import { useBoolean } from "@/hooks/useBoolean";
import { requestCollaborationSchema_ } from "@/validations/requestCollaborationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  CardMedia,
  Divider,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Experience from "../components/experience";
import { FormEvent } from 'react';
// import useNetworkData from "@/contract/hooks/useNetworkData";
// import { type BaseError, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import TokenContract from "../../../contract/abis/token.json"
import { parseAbi } from 'viem'
import { PostUser } from "../components/post";
import Services from "../components/services";

export interface IUserProfileProps { }
const IMG_NFT =
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// const ModalRequestCollaboration = ({ openHireMe }: any) => {
//   const openButton = useBoolean();
//   const openGotIt = useBoolean();
//   // const { data: hash, isPending, writeContract } = useWriteContract()
//   const { contract } = useNetworkData();

//   const [typeOfRequest, setTypeOfRequest] = React.useState("");
//   const [fullName, setFullName] = React.useState("");

//   const handleChangeSelect = (event: SelectChangeEvent) => {
//     setTypeOfRequest(event.target.value as string);
//   };

//   // const { isLoading: isConfirming, isSuccess: isConfirmed } =
//   //   useWaitForTransactionReceipt({
//   //     hash,
//   //   })

//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<any>({
//     resolver: yupResolver(requestCollaborationSchema_),
//     mode: "onChange",
//   });
//   // const { config, error } = usePrepareContractWrite({
//   //   address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
//   //   abi: wagmigotchiABI,
//   //   functionName: 'feed',
//   // })
//   // const { write } = useContractWrite(config)

//   const onSubmitForm = async (data: any, e: any) => {
//     e?.preventDefault()
//     const formData = new FormData(e?.target as any)
//     const tokenId = formData.get('tokenId') as string
//     writeContract({
//       address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
//       abi: parseAbi(['function mint(uint256 tokenId)']),
//       functionName: 'mint',
//       args: [BigInt(tokenId)],
//     })
//     // writeContract({
//     //   address: contract,
//     //   abi: TokenContract,
//     //   functionName: "approve",
//     //   args: [BigInt(tokenId), BigInt(20000)] as any,
//     // });
//     if (isConfirmed) {
//       openGotIt.onTrue();
//     }
//   };

//   const [open, setOpen] = React.useState(true);
//   const handleClose = () => {
//     setOpen(false);
//     openHireMe();
//   };

//   useEffect(() => {
//     if (typeOfRequest) {
//       openButton.onFalse();
//     } else {
//       openButton.onTrue();
//     }
//   }, [typeOfRequest]);

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <StyleModalBox>
//         <StyleTop>
//           <StyleButtonClose onClick={handleClose}>
//             <IconClose />
//           </StyleButtonClose>
//           <Typography
//             id="modal-modal-title"
//             variant="h4"
//             component="h4"
//             fontWeight={"600"}
//           >
//             Request collaboration
//           </Typography>
//           <Image
//             height={200}
//             // width={}
//             src={Diagram}
//             title="diagram"
//             alt="diagram"
//           />
//         </StyleTop>
//         {!openGotIt.value ? (
//           <form onSubmit={handleSubmit(onSubmitForm)}>
//             <StyleBottom>
//               <StyleLabel>
//                 <Typography>Type of request</Typography>
//                 <Typography color={"orange"}>*</Typography>
//               </StyleLabel>
//               <FormControl fullWidth sx={{ minWidth: "500px" }}>
//                 <InputLabel id="typeOfRequest" sx={{ color: "#FFF" }}>
//                   Select type of request
//                 </InputLabel>
//                 <Select
//                   size="medium"
//                   id="typeOfRequest"
//                   labelId="typeOfRequest"
//                   value={typeOfRequest}
//                   label="Select type of request"
//                   sx={{
//                     borderRadius: "20px",
//                     color: "#FFF",
//                     backgroundColor: "#353535",
//                     border: "0px #353535 solid",
//                   }}
//                   {...register("typeOfRequest")}
//                   onChange={handleChangeSelect}
//                 >
//                   {DATASELECTTYPEOFREQUEST.map((option) => (
//                     <MenuItem key={option.id} value={option.value}>
//                       {option.label}
//                     </MenuItem>
//                   ))}
//                 </Select>
//                 <StyleError>
//                   {errors.typeOfRequest?.message as string}
//                 </StyleError>
//               </FormControl>

//               <StyleLabel>
//                 <Typography>Your Full name</Typography>
//                 <Typography color={"orange"}>*</Typography>
//               </StyleLabel>
//               <FormControl
//                 fullWidth
//                 sx={{
//                   backgroundColor: "#353535",
//                   color: "#FFF",
//                   borderRadius: "50px",
//                 }}
//               >
//                 <InputBase
//                   id="fullName"
//                   defaultValue=""
//                   sx={{ p: "12px 10px", color: "#FFF" }}
//                   placeholder="Enter your full name"
//                   inputProps={{ "aria-label": "Enter your full name" }}
//                   color="primary"
//                   {...register("fullName")}
//                 />
//               </FormControl>
//               <div style={{ width: "100%" }}>
//                 <StyleError>{errors.fullName?.message as string}</StyleError>
//               </div>

//               <StyleLabel>
//                 <Typography>Other request</Typography>
//               </StyleLabel>
//               <FormControl
//                 fullWidth
//                 sx={{
//                   backgroundColor: "#353535",
//                   color: "#FFF",
//                   borderRadius: "10px",
//                 }}
//               >
//                 <InputBase
//                   id="inputOther"
//                   defaultValue=""
//                   sx={{ p: 2, color: "#FFF" }}
//                   placeholder="Token ID or Address"
//                   inputProps={{ "aria-label": "Input other request" }}
//                   color="primary"
//                   {...register("tokenId")}
//                 />
//               </FormControl>

//               <StyleBottomSubmit>
//                 <ButtonPrimary
//                   disabled={openButton.value}
//                   type="submit"
//                   fullWidth
//                 >
//                   <Typography sx={{ p: "8px 0" }}>{isPending ? 'Confirming...' : 'Submit'}</Typography>
//                 </ButtonPrimary>
//               </StyleBottomSubmit>
//             </StyleBottom>
//           </form>
//         ) : (
//           <Stack
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Image
//               height={200}
//               // width={}
//               src={Request}
//               title="Request"
//               alt="Request"
//             />
//             <StyleRequest>
//               <IconCertification />
//               <Typography variant="h6">Your request has been sent</Typography>
//             </StyleRequest>
//             <Typography>
//               Your request has been forwarded to your KOLs. Kindly await their
//             </Typography>
//             <Typography>response. Stay tuned!</Typography>
//             <StyleBottomGotIt onClick={handleClose}>
//               <ButtonPrimary fullWidth>
//                 <Typography sx={{ p: "8px 0" }}>I got it</Typography>
//               </ButtonPrimary>
//             </StyleBottomGotIt>
//           </Stack>
//         )}
//       </StyleModalBox>
//     </Modal>
//   );
// };

const Overview = () => {
  const openModal = useBoolean();

  return (
    <StyleOverview>
      <StyleLeft>
        <StyleTitle>Overview</StyleTitle>
        <PrimaryTitleLeft>
          <StyleContentOverview>
            <StyleDesOverview>Primary Job Title</StyleDesOverview>
            <StyleSubTitle>Fashion KOL</StyleSubTitle>
          </StyleContentOverview>
          <StyleContentOverview>
            <StyleDesOverview>Primary Job Title</StyleDesOverview>
            <StyleSubTitle>Fashion KOL</StyleSubTitle>
          </StyleContentOverview>
        </PrimaryTitleLeft>
        <PrimaryTitleLeft>
          <StyleContentOverview>
            <StyleDesOverview>Primary Job Title</StyleDesOverview>
            <StyleSubTitle>Fashion KOL</StyleSubTitle>
          </StyleContentOverview>
          <StyleContentOverview>
            <StyleDesOverview>Primary Job Title</StyleDesOverview>
            <StyleSubTitle>Fashion KOL</StyleSubTitle>
          </StyleContentOverview>
          <StyleContentOverview>
            <StyleDesOverview>Primary Job Title</StyleDesOverview>
            <StyleSubTitle>
              Fashion KOL Fashion KOL Fashion KOL Fashion KOL
            </StyleSubTitle>
          </StyleContentOverview>
        </PrimaryTitleLeft>
      </StyleLeft>
      <StyleRight>
        <PrimaryTitleRight>
          <StyleContentOverview>
            <StyleDesOverview>Twitter</StyleDesOverview>
            <StyleSubTitle>86,314</StyleSubTitle>
          </StyleContentOverview>
          <StyleContentOverview>
            <StyleDesOverview>Primary per post</StyleDesOverview>
            <StyleSubTitle>$12,450</StyleSubTitle>
          </StyleContentOverview>
        </PrimaryTitleRight>
        <ButtonPrimary onClick={() => openModal.onTrue()}>
          <Typography sx={{ p: "8px 0" }}>Hire Me</Typography>
        </ButtonPrimary>
      </StyleRight>
      {openModal.value && (
        <div style={{ width: "300ox", height: "300px" }}>
          {/* <ModalRequestCollaboration openHireMe={openModal.onFalse} /> */}
        </div>

      )}
    </StyleOverview>
  );
};

const Personal = () => {
  return (
    <StylePersonal>
      <StylePersonalLeft>
        <StyleImage
          src={IMG_NFT}
          alt="avatar profile"
          width={220}
          height={220}
        />
        <StyleContentUser>
          <StyleTitle>
            User Name <IconVerify />
          </StyleTitle>
          <StyleUserDes>Im developer software engineer</StyleUserDes>
          <StyleUserDes>Influencer</StyleUserDes>
          <StyleUserSocial>Social</StyleUserSocial>
          <StyleIcons>
            <IconTikTok />
            <IconTwitter />
            <IconYouTube />
            <IconLinked />
          </StyleIcons>
        </StyleContentUser>
      </StylePersonalLeft>
      <StylePersonalRight>
        <StyleButtons>
          <StyleButtonTitle>
            <IconEdit />
            <div>Edit</div>
          </StyleButtonTitle>
          <StyleButtonTitle>
            <IconBlue />
            Share
          </StyleButtonTitle>
          <StyleButtonTitle>
            <IconStarNormal />
            Add to watchlist
          </StyleButtonTitle>
        </StyleButtons>
      </StylePersonalRight>
    </StylePersonal>
  );
};

export default function UserProfile(props: IUserProfileProps) {
  return (
    <StyleContainer>
      <Personal />
      <Divider sx={{ borderColor: "#B9B9B9 " }} />
      <div style={{ display: "flex", width: "100%" }}>
        <PostLeft>
          <StyleTitle>Post</StyleTitle>
          <PostUser />
          <PostUser />
          <PostUser />
        </PostLeft>
        <div style={{ width: "70%" }}>
          <Overview />
          <Divider sx={{ borderColor: "#B9B9B9 " }} />
          <Services />
          <Divider sx={{ borderColor: "#B9B9B9 " }} />
          <Experience />
        </div>
      </div>
    </StyleContainer>
  );
}

const PostLeft = styled.div`
 display: flex;
 flex-direction: column;
 gap: 12px;
 width: 30%;
 padding: 12px;
`
const StyleButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
const StyleButtonTitle = styled.div`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #393939;

  color: #b9b9b9;
  border-radius: 6px;
`;
const StyleContainer = styled.div`
  background-color: #292d32;
  color: #ffffff;
`;
const PrimaryTitleLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  padding: 24px 0;
`;

const PrimaryTitleRight = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 60px;
  padding: 24px 0;
`;

const StyleDesOverview = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #b9b9b9;
`;
const StyleContentOverview = styled.div``;
const StyleSubTitle = styled.div`
  padding-top: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #82ebff;
`;
const StylePersonal = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 24px 14px;
`;
const StyleImage = styled(Image)`
  border: 2px solid #fff;
  border-radius: 50%;
`;
const StylePersonalLeft = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 32px;
`;
const StyleContentUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
`;
const StyleUserDes = styled.div`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #393939;
  border-radius: 12px;
  color: #ffd7f4;
  width: fit-content;
`;
const StyleUserSocial = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #b9b9b9;
`;
const StyleIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StylePersonalRight = styled.div`
  margin-left: 50px;
  display: flex;
  gap: 14px;
  width: 40%;
`;
const StyleOverview = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px 20px;
`;
const StyleLeft = styled.div``;

const StyleRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const StyleModalBox = styled(Box)`
  position: fixed;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #2e2e2e;
  border: 1px solid #2e2e2e;
  color: #fff;
  box-shadow: 24;
  padding: 0;
`;

const StyleTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

const StyleButtonClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const StyleBottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* gap: 5px; */
  flex-wrap: nowrap;
  background-color: #252525;
  border-radius: 10px;
  width: 100%;
  padding: 20px 50px;
`;

const StyleLabel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 8px;
`;

const StyleBottomSubmit = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const StyleBottomGotIt = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const StyleInput = styled(TextField)`
  border-radius: 20px;
  color: #fff;
  background-color: #353535;
  border: 0px #353535 solid;
`;

export const StyleError = styled.p`
  display: flex;
  color: red;
  font-size: 14px;
  white-space: normal;
`;

const StyleRequest = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  color: #f23581;
  margin-top: 15px;
`;

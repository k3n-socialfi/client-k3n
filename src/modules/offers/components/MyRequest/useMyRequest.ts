import axiosInstance from "@/configs/axios.config";
import { useEffect, useState } from "react";

const useMyRequest = () => {
  const [allRequest, setAllRequest] = useState(<any>[]);
  const [allOrderRequest, setAllOrderRequest] = useState(<any>[]);


  const handleGetMessage = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/message/message");
      console.log("🚀 ~ handleGetAllMessage ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ handleGetAllMessage ~ error:", error);
    }
  };

  const handleGetOrderMessage = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/message/order-message");
      if(response) {
        setAllOrderRequest(response?.data?.data)
      }
      console.log("🚀 ~ handleGetOrderMessage ~ response:", response)
     
    } catch (error) {
      console.log("🚀 ~ handleGetAllMessage ~ error:", error);
    }
  };

  const handlePutMessage = async () => {
    try {
      const data = {
        reply: "string",
        messageId: "string",
      };
      const response = await axiosInstance.put("/api/v1/message/message", data);
      console.log("🚀 ~ handleGetAllMessage ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ handleGetAllMessage ~ error:", error);
    }
  };

  useEffect(() => {
    // handleGetMessage();
    handleGetOrderMessage();

  }, []);

  return {
    allRequest,
    allOrderRequest
  };
};

export default useMyRequest;

import axiosInstance from "@/configs/axios.config";
import { useCallback, useEffect, useState } from "react";

export type TReplyRequest = {
  reply: string;
  messageId: string;
};

const useMyRequest = () => {
  const [allRequestCollab, setAllRequestCollab] = useState(<any>[]);
  const [allOrderRequest, setAllOrderRequest] = useState(<any>[]);

  const handleGetRequestCollab = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/api/v1/message/message");
      if (response) {
        setAllRequestCollab(response?.data?.data);
      }
    } catch (error) {
      console.log("🚀 ~ handleGetAllMessage ~ error:", error);
    }
  }, []);

  const handleGetOrderRequest = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/api/v1/message/order-message");
      if (response) {
        setAllOrderRequest(response?.data?.data);
      }
    } catch (error) {
      console.log("🚀 ~ handleGetAllMessage ~ error:", error);
    }
  }, []);

  const handlePutMessage = useCallback(
    async (reply: string, messageId: string) => {
      try {
        const data = {
          reply: reply,
          messageId: messageId,
        };
        const response = await axiosInstance.put(
          "/api/v1/message/message",
          data,
        );
        if (response) {
          handleGetRequestCollab();
        }
      } catch (error) {
        console.log("🚀 ~ handleGetAllMessage ~ error:", error);
      }
    },
    [handleGetRequestCollab],
  );

  useEffect(() => {
    handleGetOrderRequest();
    handleGetRequestCollab();
  }, [handleGetOrderRequest, handleGetRequestCollab]);

  return {
    allRequestCollab,
    allOrderRequest,
    handlePutMessage,
  };
};

export default useMyRequest;

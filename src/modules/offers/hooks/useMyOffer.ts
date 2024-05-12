import { useEffect, useState } from "react";
import { TAcceptOffer } from "../types/offer";
import { apiAcceptOffer, getListMyOffer } from "../services";

export default function useMyOffer() {
    const [listOffer, setListOffer] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getDataListOffer = async () => {
        const { data } = await getListMyOffer();
        console.log("👋  data:", data)
        setListOffer(data?.data);
    };

    useEffect(() => {
        getDataListOffer();
    }, []);

    const acceptOffer = async (dt: TAcceptOffer) => {
        if (isLoading) return;
        setIsLoading(true);
        try {
            await apiAcceptOffer(dt);
            getDataListOffer();
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };
    return { listOffer, acceptOffer, isLoading };
}
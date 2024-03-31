"use client";
import { IconTop1 } from "@/assets/icons";
import { IUsers } from "@/interface/users.interface";
import { getFeaturedKols } from "@/services";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IPropsHomeContextProvider {
  children: React.ReactNode;
}
interface IHomeContextTypes {
  users: IUsers[];
  setUsers: React.Dispatch<React.SetStateAction<IUsers[]>>;
}

const HomeContextTypes = {
  users: [
    {
      createdAt: 0,
      updatedAt: 0,
      isDeleted: true,
      userId: "",
      username: "",
      role: "",
      type: "",
      jobTitle: "",
      organization: "",
      experience: [],
      fullName: "",
      email: "",
      phoneNumber: "",
      wallets: [],
      socialProfiles: [],
      twitterPoints: 0,
      royaltyPoints: 0,
      totalPoints: 0,
      avatar: "",
      bio: "",
      coverImage: "",
      dob: "",
      gender: "",
      location: "",
      verificationStatus: "",
      referralCode: "",
      lastLogin: "",
    },
  ],
  setUsers: () => undefined,
};
const homeContext = createContext<IHomeContextTypes>(HomeContextTypes);
const AuthContextProvider = ({ children }: IPropsHomeContextProvider) => {
  const [users, setUsers] = useState<IUsers[]>(HomeContextTypes.users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFeaturedKols();
        setUsers(res.data?.data?.users);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <homeContext.Provider value={{ users, setUsers }}>
      {children}
    </homeContext.Provider>
  );
};

const useHomeContext = () => {
  return useContext(homeContext);
};
export { AuthContextProvider, useHomeContext };

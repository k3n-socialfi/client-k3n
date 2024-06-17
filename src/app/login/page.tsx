"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SignUp from "@/modules/signUp/view";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("accessToken");
  const refresh = searchParams.get("refreshToken");

  useEffect(() => {
    if (typeof window !== "undefined" && token) {
      localStorage.setItem("accessToken", token ?? "");
      localStorage.setItem("refreshToken", refresh ?? "");
    }
  }, [token, refresh]);

  return <SignUp />;
}

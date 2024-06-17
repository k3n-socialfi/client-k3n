import Link from "next/link";
import PasswordResetModal from "./PasswordResetModal";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { API_URL } from "@/configs/env.config";
import { IconX } from "@/assets/icons";
import { Fragment, useState } from "react";

export default function UnAuthenticated() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  return (
    <Fragment>
      <PasswordResetModal
        isActive={modalOpen}
        modalData={modalData}
        handleModalData={setModalData}
        handleActive={setModalOpen}
      />
      <div className="w-max m-auto pt-24 pb-16">
        <header className="text-center mb-8 animate-fadeIn">
          <h2 className="text-bgray-900 dark:text-white text-2xl font-semibold font-poppins mb-2">
            Sign up for an account.
          </h2>
          <p className="font-urbanis text-base font-medium text-bgray-600 dark:text-bgray-50">
            Send, spend and save smarter
          </p>
        </header>
        <ButtonPrimary
          fullWidth
          colorBt="primary.enabled"
          borderRadius="10px"
          component={Link}
          href={`${API_URL}/api/v1/oauth/twitter`}
          className="animate-slideFromRight"
        >
          <div className="flex p-1 gap-3">
            <p className="text-white ml-2">Continue with</p>
            <IconX />
          </div>
        </ButtonPrimary>
      </div>
    </Fragment>
  );
}

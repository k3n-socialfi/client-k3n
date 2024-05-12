"use client";

import { createContext, useContext, useState } from "react";

interface IChildren {
  children: React.ReactNode;
}

interface IShowConnectedX {
  open: boolean;
  showConnectedX: (isOpen: boolean) => void;
}

const ShowConnectedXContext = createContext<IShowConnectedX>({
  open: false,
  showConnectedX: (isOpen: boolean) => undefined,
});

const ShowConnectedXProvider = ({ children }: IChildren) => {
  const [open, setOpen] = useState<boolean>(false);

  const showConnectedX = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <ShowConnectedXContext.Provider value={{ open, showConnectedX }}>
      {children}
    </ShowConnectedXContext.Provider>
  );
};

const useShowConnectedXContext = () => {
  return useContext(ShowConnectedXContext);
};

export { ShowConnectedXProvider, useShowConnectedXContext };

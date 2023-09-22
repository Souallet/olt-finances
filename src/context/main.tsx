"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export type TMainState = {
  movements: any[];
  filename: string | null;
};

export type TMainContext = {
  setMovements: Dispatch<SetStateAction<any[]>>;
  setFilename: Dispatch<SetStateAction<string | null>>;
} & TMainState;

export const MainContext = createContext<TMainContext | null>(null);

export default function MainContextProvider({ children }: PropsWithChildren) {
  const [movements, setMovements] = useState<any[]>([]);
  const [filename, setFilename] = useState<string | null>(null);

  useEffect(() => {
    console.log(movements);
  }, [movements]);

  const value = { filename, setFilename, movements, setMovements };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

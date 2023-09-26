"use client";

import { addDays } from "date-fns";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export type TMainState = {
  rawMovements: any[];
  movements: any[];
  filename: string | null;
  startDate: Date | null;
  endDate: Date | null;
};

export type TMainContext = {
  setRawMovements: Dispatch<SetStateAction<any[]>>;
  setMovements: Dispatch<SetStateAction<any[]>>;
  setFilename: Dispatch<SetStateAction<string | null>>;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
} & TMainState;

export const MainContext = createContext<TMainContext | null>(null);

export default function MainContextProvider({ children }: PropsWithChildren) {
  const [rawMovements, setRawMovements] = useState<any[]>([]);
  const [movements, setMovements] = useState<any[]>([]);
  const [filename, setFilename] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    if (rawMovements.length === 0) return;

    setStartDate(
      new Date(
        addDays(
          new Date(1900, 0, 0),
          Math.min(
            ...rawMovements.map(
              (element: any) => element["Date de l'opération"]
            )
          ) - 1
        )
      )
    );
    setEndDate(
      new Date(
        addDays(
          new Date(1900, 0, 0),
          Math.max(
            ...rawMovements.map(
              (element: any) => element["Date de l'opération"]
            )
          ) - 1
        )
      )
    );
  }, [rawMovements]);

  useEffect(() => {
    if (startDate && endDate) {
      const movementsFilteredByDate = rawMovements
        .filter((e) => {
          const elementDate = addDays(
            new Date(1900, 0, 0),
            e["Date de l'opération"] - 1
          );
          return (
            new Date(elementDate) >= startDate &&
            new Date(elementDate) <= endDate
          );
        })
        .sort((a, b) => b["Id"] - a["Id"]);
      setMovements(movementsFilteredByDate);
    }
  }, [startDate, endDate]);

  const value = {
    filename,
    setFilename,
    rawMovements,
    setRawMovements,
    movements,
    setMovements,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

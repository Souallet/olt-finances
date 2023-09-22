"use client";

import { PropsWithChildren, useContext } from "react";
import FileUploader from "./file-uploader";
import { MainContext, type TMainContext } from "@/context/main";

export default function FilePortal({ children }: PropsWithChildren) {
  const context: TMainContext | null = useContext(MainContext);

  return context?.filename && context?.movements.length ? (
    <>{children}</>
  ) : (
    <FileUploader />
  );
}

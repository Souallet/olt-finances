"use client";
import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import * as xlsx from "xlsx";

import { FilePlusIcon } from "@radix-ui/react-icons";
import { Card } from "./ui/card";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./ui/icons";
import { MainContext, type TMainContext } from "@/context/main";
import { Separator } from "./ui/separator";
import DownloadSample from "./download-sample";

export default function FileUploader() {
  const context: TMainContext | null = useContext(MainContext);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      context?.setFilename(file?.name);
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        const workbook = xlsx.read(binaryStr, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        context?.setRawMovements(json);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "application/vnd.ms-excel": [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
    },
    onDrop,
    multiple: false,
  });

  return (
    <div className="mt-36 flex w-full items-center justify-center">
      <Card className="p-8 flex flex-col gap-8 items-center">
        {acceptedFiles.length === 0 ? (
          <div className="flex flex-col gap-8 items-center" {...getRootProps()}>
            <FilePlusIcon className="w-10 h-10" />
            <input {...getInputProps()} />
            <p className="text-center">
              Déposer le fichier au format <b>.xlsx</b>
            </p>
            <Button variant="outline">Téléverser un fichier</Button>
          </div>
        ) : (
          <>
            <p>Chargement en cours ...</p>
            <Icons.spinner className="mr-2 h-8 w-8 animate-spin" />
          </>
        )}

        {acceptedFiles.length === 0 && (
          <>
            <Separator />
            <DownloadSample />
          </>
        )}
      </Card>
    </div>
  );
}

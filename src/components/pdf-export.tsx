"use client";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import { useReactToPrint } from "react-to-print";

export default function PdfExport({ elementID }: { elementID: string }) {
  const handlePrint = useReactToPrint({
    content: () => document.getElementById(elementID),
  });

  return (
    <Button variant="outline" onClick={handlePrint}>
      <DownloadIcon />
    </Button>
  );
}

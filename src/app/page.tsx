import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import Overview from "@/components/screens/overview";
import { Separator } from "@/components/ui/separator";
import FilePortal from "@/components/file-portal";
import PdfExport from "@/components/pdf-export";

export const metadata: Metadata = {
  title: "OLT Finances",
  description: "Application de visualisation de ses finances depuis Tiime.",
};

export default function Page() {
  return (
    <div className="flex-col md:flex container mx-auto h-screen">
      <div className="flex md:items-center justify-between mt-4">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <ThemeToggle />
      </div>
      <Separator className="my-4" />
      <FilePortal>
        <Tabs id="portal" defaultValue="overview" className="space-y-4 pb-10">
          <div className="flex flex-wrap justify-between gap-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
            </TabsList>
            <div className="flex flex-wrap gap-4">
              <CalendarDateRangePicker />
              <PdfExport elementID={"portal"} />
            </div>
          </div>
          <TabsContent value="overview">
            <Overview />
          </TabsContent>
        </Tabs>
      </FilePortal>
    </div>
  );
}

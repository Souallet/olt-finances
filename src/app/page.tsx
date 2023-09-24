import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import Overview from "@/components/screens/overview";
import { Separator } from "@/components/ui/separator";
import FilePortal from "@/components/file-portal";

export const metadata: Metadata = {
  title: "OLT Finances",
  description: "Application de visualisation de ses finances depuis Tiime.",
};

export default function Page() {
  return (
    <div className="flex-col md:flex container mx-auto h-screen">
      <div className="flex-1 space-y-4 p-8 pt-6 h-full">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <ThemeToggle />
          </div>
        </div>
        <Separator className="my-4" />
        <FilePortal>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="expenditures">Dépenses</TabsTrigger>
              <TabsTrigger value="incomes">Revenus</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Overview />
            </TabsContent>
            <TabsContent value="expenditures" className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">Dépenses</h3>
            </TabsContent>
            <TabsContent value="incomes" className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">Revenus</h3>
            </TabsContent>
          </Tabs>
        </FilePortal>
      </div>
    </div>
  );
}

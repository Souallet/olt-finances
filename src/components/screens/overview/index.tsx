import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import Kpi from "./kpi";

export default function Overview() {
  return (
    <>
      <Kpi />
      <Separator className="my-4" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
        <Card className="md:col-span-2 lg:col-span-5 row-span-2">
          <CardHeader>
            <CardTitle>{`Vue d'ensemble`}</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">{/* <Overview /> */}</CardContent>
        </Card>

        <Card className="md:col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Revenus par catégories</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>{/* <RecentSales /> */}</CardContent>
        </Card>
        <Card className="md:col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Dépenses par catégories</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>{/* <RecentSales /> */}</CardContent>
        </Card>
        <Card className="md:col-span-2 lg:col-span-4">
          <CardHeader>
            <CardTitle>Revenus principaux</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>{/* <RecentSales /> */}</CardContent>
        </Card>
        <Card className="md:col-span-2 lg:col-span-4">
          <CardHeader>
            <CardTitle>Dépenses principales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>{/* <RecentSales /> */}</CardContent>
        </Card>
      </div>
    </>
  );
}

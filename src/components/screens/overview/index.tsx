"use client";
import { useContext } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Kpi from "./kpi";
import { DataTable } from "@/components/data-table";
import { MainContext } from "@/context/main";
import { columns } from "@/components/data-table/columns";
import CategoriesIncome from "./CategoriesIncome";
import CategoriesExpenditures from "./CategoriesExpenditures";

export default function Overview() {
  const context = useContext(MainContext);

  return (
    <>
      <Kpi />
      <Separator className="my-4" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
        <Card className="md:col-span-2 lg:col-span-5 row-span-2">
          <CardHeader>
            <CardTitle>{`Vue d'ensemble`}</CardTitle>
            <CardDescription>
              Vous avez un total de {context?.movements.length} mouvements sur
              cette période.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable data={context?.movements ?? []} columns={columns} />
          </CardContent>
        </Card>

        <Card className="md:col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Revenus par catégories</CardTitle>
            <CardDescription>
              Classement des types de revenus les plus élevés
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CategoriesIncome
              incomes={
                context?.movements.filter((e) => e["Montant TTC"] > 0) ?? []
              }
            />
          </CardContent>
        </Card>
        <Card className="md:col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Dépenses par catégories</CardTitle>
            <CardDescription>
              Classement des types de dépenses les plus élevées
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CategoriesExpenditures
              expenditures={
                context?.movements.filter((e) => e["Montant TTC"] < 0) ?? []
              }
            />
          </CardContent>
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

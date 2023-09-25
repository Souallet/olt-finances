import Incomes from "@/components/charts/incomes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Kpi({ movements = [] }: { movements: any[] }) {
  const total = movements.reduce(
    (acc, currentValue) => acc + parseFloat(currentValue["Montant TTC"]),
    0
  );

  const incomes = movements.filter((e) => parseFloat(e["Montant TTC"]) > 0);

  const totalIncomes = incomes.reduce(
    (acc, currentValue) => acc + parseFloat(currentValue["Montant TTC"]),
    0
  );

  const totalExpenditures = movements.reduce(
    (acc, currentValue) =>
      parseFloat(currentValue["Montant TTC"]) < 0 &&
      currentValue["Label"] !== "TVA A PAYER"
        ? acc + parseFloat(currentValue["Montant TTC"])
        : acc + 0,
    0
  );

  const totalTVA = movements.reduce(
    (acc, currentValue) =>
      currentValue["Label"] === "TVA A PAYER"
        ? acc + parseFloat(currentValue["Montant TTC"])
        : acc + 0,
    0
  );

  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      <Card className="col-span-2 row-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-md font-bold">Total</CardTitle>
          <span className="text-2xl font-bold">
            {total > 0 ? "+" : ""}
            {total.toLocaleString("fr-FR")} €
          </span>
        </CardHeader>
        <CardContent className="h-56">
          <Incomes movements={movements} />
        </CardContent>
      </Card>
      <Card className="col-span-2 md:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Revenus</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            +{totalIncomes.toLocaleString("fr-FR")} €
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-2 md:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Dépenses</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalExpenditures.toLocaleString("fr-FR")} €
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-2 md:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Revenus moyens mensuel
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,234 €</div>
        </CardContent>
      </Card>
      <Card className="col-span-2 md:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total TVA</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalTVA} €</div>
        </CardContent>
      </Card>
    </div>
  );
}

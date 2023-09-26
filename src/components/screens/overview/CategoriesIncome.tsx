import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CategoriesIncome({ incomes }: { incomes: any[] }) {
  const incomesByCategories = incomes
    .reduce((accumulator, currentValue) => {
      const accElement = accumulator.find(
        (e: any) => e.Label === currentValue.Label
      );

      if (accElement) {
        const accElementIndex = accumulator.indexOf(accElement);
        accumulator.splice(accElementIndex, 1, {
          "Montant TTC":
            parseFloat(accElement["Montant TTC"]) +
            parseFloat(currentValue["Montant TTC"]),
          Label: accElement["Label"],
          Total: accElement["Total"] ? accElement["Total"] + 1 : 1,
        });
      } else {
        accumulator.push({
          "Montant TTC": parseFloat(currentValue["Montant TTC"]),
          Label: currentValue["Label"],
          Total: 1,
        });
      }

      return [...accumulator];
    }, [])
    .sort(
      (a: any, b: any) =>
        parseFloat(b["Montant TTC"]) - parseFloat(a["Montant TTC"])
    )
    .slice(0, 4);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[30px]">Total</TableHead>
          <TableHead>Label</TableHead>
          <TableHead>Montant TTC</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!incomesByCategories ? (
          <TableRow>Aucun revenus sur cette période</TableRow>
        ) : (
          incomesByCategories.map((e: any, i: number) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{e["Total"]}</TableCell>
              <TableCell>{e["Label"]}</TableCell>
              <TableCell className="font-medium text-green-500 dark:text-green-400">
                + {parseFloat(e["Montant TTC"]).toLocaleString("fr-FR")} €
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CategoriesExpenditures({
  expenditures = [],
}: {
  expenditures: any[] | undefined;
}) {
  const expendituresByCategories = expenditures
    .reduce((accumulator, currentValue) => {
      const accElement = accumulator.find(
        (e: any) => e.Label === currentValue.Label
      );

      if (accElement) {
        const accElementIndex = accumulator.indexOf(accElement);
        accumulator.splice(accElementIndex, 1, {
          "Montant TTC":
            Math.round(
              (parseFloat(accElement["Montant TTC"]) +
                parseFloat(currentValue["Montant TTC"])) *
                100
            ) / 100,
          Label: accElement["Label"],
          Total: accElement["Total"] ? accElement["Total"] + 1 : 1,
        });
      } else {
        accumulator.push({
          "Montant TTC":
            Math.round(parseFloat(currentValue["Montant TTC"]) * 100) / 100,
          Label: currentValue["Label"],
          Total: 1,
        });
      }

      return [...accumulator];
    }, [])
    .sort(
      (a: any, b: any) =>
        parseFloat(a["Montant TTC"]) - parseFloat(b["Montant TTC"])
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
        {!expendituresByCategories ? (
          <TableRow>Aucun revenus sur cette période</TableRow>
        ) : (
          expendituresByCategories.map((e: any, i: number) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{e["Total"]}</TableCell>
              <TableCell>{e["Label"]}</TableCell>
              <TableCell className="font-medium text-red-500 dark:text-red-400">
                {e["Montant TTC"]} €
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

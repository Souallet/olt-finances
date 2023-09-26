import { addDays, format, getMonth } from "date-fns";
import { fr } from "date-fns/locale";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Card } from "../ui/card";

export default function Incomes({ movements = [] }: { movements: any[] }) {
  const data = movements
    .reduce((accumulator, currentValue) => {
      const currMonth = getMonth(
        new Date(
          addDays(new Date(1900, 0, 0), currentValue["Date de l'opération"] - 1)
        )
      );
      const currMonthName = format(new Date(2000, currMonth, 1), "MMMM", {
        locale: fr,
      });

      const accElement = accumulator.find((e: any) => e.index === currMonth);

      if (accElement) {
        accumulator.splice(accumulator.indexOf(accElement), 1, {
          index: currMonth,
          month: currMonthName,
          total: accElement.total + currentValue["Montant TTC"],
        });
      } else {
        accumulator.push({
          index: currMonth,
          month: currMonthName,
          total: currentValue["Montant TTC"],
        });
      }

      return [...accumulator];
    }, [])
    .sort((a: any, b: any) => a.index - b.index);

  const minY = Math.min(...data.map((d: any) => d.total));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Tooltip content={<CustomTooltip />} />

        {minY < 0 && (
          <ReferenceLine
            y={0}
            stroke="#2563EB"
            strokeWidth={1}
            strokeOpacity={0.25}
          />
        )}
        <Line
          type="natural"
          dataKey="total"
          stroke="#2563EB"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: any;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <Card className="p-3 text-sm flex flex-col gap-3">
        <h6 className=" text-md font-bold capitalize">
          {payload[0].payload.month}
        </h6>
        <p className="label">
          Total généré :{" "}
          <span className="font-medium">
            {payload[0].payload.total.toFixed(2)} €
          </span>
        </p>
      </Card>
    );
  }

  return null;
};

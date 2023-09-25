"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addYears, format } from "date-fns";
import { fr } from "date-fns/locale";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MainContext, TMainContext } from "@/context/main";

export function CalendarDateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const context: TMainContext | null = React.useContext(MainContext);

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023),
    to: addYears(new Date(2023, 0, 1), 1),
  });

  React.useEffect(() => {
    if (context?.endDate && context?.startDate) {
      setDate({ from: context.startDate, to: context.endDate });
    }
  }, [context]);

  const setDates = (dateRange: DateRange | undefined) => {
    if (dateRange?.from && dateRange?.to) {
      setDate(dateRange);
      context?.setStartDate(dateRange.from);
      context?.setEndDate(dateRange.to);
    }
  };

  return context?.endDate && context?.startDate ? (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "md:w-[260px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd LLL y")} -{" "}
                  {format(date.to, "dd LLL y")}
                </>
              ) : (
                format(date.from, "dd LLL y")
              )
            ) : (
              <span>Choisir une date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 ml-8 md:ml-0" align="end">
          <Calendar
            locale={fr}
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDates}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  ) : null;
}

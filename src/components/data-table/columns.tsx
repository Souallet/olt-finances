"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/data-table/column-header";
import { Task } from "./data/schema";
import { cx } from "class-variance-authority";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "Id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("Id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Montant TTC",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Montant TTC" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span
            className={cx(
              "max-w-[500px] truncate font-medium",
              parseFloat(row.getValue("Montant TTC")) >= 0
                ? "text-green-500 dark:text-green-400"
                : "text-red-500 dark:text-red-400"
            )}
          >
            {parseFloat(row.getValue("Montant TTC")) > 0 && "+"}
            {row.getValue("Montant TTC")} €
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "Label",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Label" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("Label")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "Commentaire",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Commentaire" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("Commentaire")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "Intitulé de la transaction",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Intitulé de la transaction"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("Intitulé de la transaction")}
          </span>
        </div>
      );
    },
  },
];

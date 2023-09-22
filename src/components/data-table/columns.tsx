"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "@/components/data-table/column-header";
import { DataTableRowActions } from "@/components/data-table/row-actions";
import { labels, priorities, statuses } from "./data/data";
import { Task } from "./data/schema";

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
      const label = labels.find(
        (label) => label.value === row?.original?.label
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("Montant TTC")}
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
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row?.original?.label
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
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
      const label = labels.find(
        (label) => label.value === row?.original?.label
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
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
      const label = labels.find(
        (label) => label.value === row?.original?.label
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("Intitulé de la transaction")}
          </span>
        </div>
      );
    },
  },
];

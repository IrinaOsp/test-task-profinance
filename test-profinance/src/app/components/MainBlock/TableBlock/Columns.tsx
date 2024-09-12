import { Button } from "@/components/ui/button";
import { TableRowData } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<TableRowData>[] = [
  {
    accessorKey: "barcode",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Баркод
        <ArrowUpDown className="ml-2 size-4 font-bold" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("barcode")}</div>
    ),
  },
  {
    accessorKey: "garment",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Предмет
        <ArrowUpDown className="ml-2 size-4 font-bold" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("garment")}</div>
    ),
  },
  {
    accessorKey: "article",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-center text-wrap"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Артикул поставщика
        <ArrowUpDown className="ml-2 size-4 font-bold" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("article")}</div>
    ),
  },
  {
    accessorKey: "size",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-center text-wrap"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Размер
        <ArrowUpDown className="ml-2 size-4 font-bold" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("size")}</div>
    ),
  },
  {
    accessorKey: "available",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-center text-wrap"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Доступно к заказу
        <ArrowUpDown className="ml-2 size-4 font-bold" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("available")}</div>
    ),
  },
  {
    accessorKey: "itemsInTransit",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-center"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>
          Товары в пути
          <br />
          <span className="text-xs text-slate-500">(заказы и возвраты)</span>
        </span>

        <ArrowUpDown className="ml-2 size-4 font-bold" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("itemsInTransit")}</div>
    ),
  },
  {
    accessorKey: "totalItems",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-center"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Итого кол-во товара
        <ArrowUpDown className="ml-2 size-4 font-bold" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("totalItems")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-center text-wrap"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Цена за ед.
        <ArrowUpDown className="ml-2 size-4 font-bold" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("price")}</div>
    ),
  },
];

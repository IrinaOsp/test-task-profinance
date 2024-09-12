"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { columns } from "@/app/components/MainBlock/TableBlock/Columns";
import { formatPrice } from "@/utils/helpers";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function TableBlock() {
  const data = useSelector((state: RootState) => state.dataSlice.data);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const formattedData = useMemo(
    () => data.map((row) => ({ ...row, price: formatPrice(row.price) })),
    [data]
  );

  const table = useReactTable({
    data: formattedData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <ScrollArea type="always" className="w-full mt-2">
      <ScrollBar
        orientation="horizontal"
        className="mt-2 h-2 rounded-lg bg-blue-600"
      />
      <Table className="py-4">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="text-center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Файл с данными не загружен. Нажмите на кнопку &apos;Загрузить
                данные из csv&apos;
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="text-right">Итого</TableCell>
            <TableCell colSpan={3}></TableCell>
            <TableCell className="text-center font-bold">
              {data.reduce((sum, item) => sum + item.available, 0)}
            </TableCell>
            <TableCell className="text-center font-bold">
              {data.reduce((sum, item) => sum + item.itemsInTransit, 0)}
            </TableCell>
            <TableCell className="text-center font-bold">
              {data.reduce((sum, item) => sum + item.totalItems, 0)}
            </TableCell>
            <TableCell className="text-center font-bold">
              {formatPrice(data.reduce((sum, item) => sum + item.price, 0))}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </ScrollArea>
  );
}

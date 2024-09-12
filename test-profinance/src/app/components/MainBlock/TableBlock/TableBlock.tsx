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
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { columns } from "@/app/components/MainBlock/TableBlock/Columns";
import { formatPrice } from "@/utils/helpers";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { setData } from "@/redux/data/DataSlice";
import { Input } from "@/components/ui/input";

export default function TableBlock() {
  const dispatch = useDispatch();
  const { data, filter } = useSelector((state: RootState) => state.dataSlice);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [editingCell, setEditingCell] = useState<{
    rowId: string | null;
    columnId: string | null;
  }>({ rowId: null, columnId: null });

  const [tempValue, setTempValue] = useState<string | number>("");

  const filteredData = useMemo(
    () =>
      [...data].filter((row) => {
        return (
          row.barcode
            .toLowerCase()
            .includes(filter.barcode ? filter.barcode.toLowerCase() : "") &&
          row.garment
            .toLowerCase()
            .includes(filter.garment ? filter.garment.toLowerCase() : "") &&
          row.size
            .toLowerCase()
            .includes(filter.size ? filter.size.toLowerCase() : "") &&
          row.article
            .toLowerCase()
            .includes(filter.article ? filter.article.toLowerCase() : "")
        );
      }),
    [data, filter]
  );

  const formattedData = useMemo(
    () =>
      filteredData.map((row) => ({ ...row, price: formatPrice(row.price) })),
    [filteredData]
  );

  const table = useReactTable({
    data: formattedData,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  const handleDoubleClick = (
    rowId: string,
    columnId: string,
    initialValue: string | number
  ) => {
    setEditingCell({ rowId, columnId });
    setTempValue(initialValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.target.value);
  };

  const handleBlur = (rowId: string, columnId: string) => {
    const updatedData = data.map((row) => {
      if (row.id === +rowId + 1) {
        return {
          ...row,
          [columnId]:
            typeof tempValue === typeof row[columnId as keyof typeof row]
              ? tempValue
              : +tempValue,
        };
      }
      return row;
    });
    dispatch(setData(updatedData));
    setEditingCell({ rowId: null, columnId: null });
  };

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
                    {editingCell.rowId === cell.row.id &&
                    editingCell.columnId === cell.column.id ? (
                      <Input
                        type={
                          cell.column.id === "available" ||
                          cell.column.id === "itemsInTransit" ||
                          cell.column.id === "totalItems" ||
                          cell.column.id === "price"
                            ? "number"
                            : "text"
                        }
                        min={0}
                        value={tempValue}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur(cell.row.id, cell.column.id)}
                        autoFocus
                      />
                    ) : (
                      <div
                        onDoubleClick={() =>
                          handleDoubleClick(
                            cell.row.id,
                            cell.column.id,
                            cell.getValue() as string | number
                          )
                        }
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </div>
                    )}
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

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import fs from "fs";
import path from "path";

interface TableData {
  id: number;
  barcode: string;
  garment: string;
  article: string;
  size: string;
  available: number;
  itemsInTransit: number;
  totalItems: number;
  price: number;
}

export default async function TableBlock() {
  async function getData() {
    const filePath = path.join(process.cwd(), "src", "data", "data.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const res = await JSON.parse(jsonData);
    return res;
  }

  const data: TableData[] = await getData().then((res) => res.data);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Баркод</TableHead>
          <TableHead className="text-center">Предмет</TableHead>
          <TableHead className="text-center">Артикул поставщика</TableHead>
          <TableHead className="text-center">Размер</TableHead>
          <TableHead className="text-center">Доступно к заказу</TableHead>
          <TableHead className="text-center">
            Товары в пути <br />{" "}
            <span className="text-slate-400 text-sm">(заказы и возвраты)</span>
          </TableHead>
          <TableHead className="text-center">Итого кол-во товара</TableHead>
          <TableHead className="text-center">Цена за ед.</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="text-center">{item.barcode}</TableCell>
            <TableCell className="text-center">{item.garment}</TableCell>
            <TableCell className="text-center">{item.article}</TableCell>
            <TableCell className="text-center">{item.size}</TableCell>
            <TableCell className="text-center">{item.available}</TableCell>
            <TableCell className="text-center">{item.itemsInTransit}</TableCell>
            <TableCell className="text-center">{item.totalItems}</TableCell>
            <TableCell className="text-center">
              {(item.price / 100).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="text-right">Итого</TableCell>
          <TableCell colSpan={4}></TableCell>
          <TableCell className="text-center font-bold">
            {data.reduce((sum, item) => sum + item.available, 0)}
          </TableCell>
          <TableCell className="text-center font-bold">
            {data.reduce((sum, item) => sum + item.itemsInTransit, 0)}
          </TableCell>
          <TableCell className="text-center font-bold">
            {(data.reduce((sum, item) => sum + item.price, 0) / 100).toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

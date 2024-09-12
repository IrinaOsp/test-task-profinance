"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { BookText, FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "./style.css";
import DataControl from "../DataControl/DataControl";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { saveAs } from "file-saver";

const FormSchema = z.object({
  barcode: z.number(),
  article: z.string(),
  size: z.string(),
  category: z.string(),
});

export default function FormBlock() {
  const data = useSelector((state: RootState) => state.dataSlice.data);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const handleExport = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "data.json");
  };

  return (
    <div className="max-w-full">
      <div className="my-3">
        <h2 className="inline-block text-lg mr-5">
          Остатки сформированы на 01.04.2023 г.
        </h2>
        <Button className="rounded-2xl">
          <BookText className="size-4 mr-2" />
          Инструкция
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <FormField
              control={form.control}
              name="barcode"
              render={({ field }) => (
                <FormItem className="max-w-60 flex gap-2 justify-between items-center py-1 px-2 rounded-2xl bg-white border border-slate-200">
                  <FormLabel>Баркод</FormLabel>
                  <FormControl>
                    <Input
                      className="w-40 rounded-2xl border-0 bg-slate-100"
                      style={{ marginTop: 0 }}
                      type="text"
                      placeholder="5643242134323099"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="article"
              render={({ field }) => (
                <FormItem className="max-w-60 flex gap-2 justify-between items-center py-1 px-2 rounded-2xl bg-white border border-slate-200">
                  <FormLabel>Артикул</FormLabel>
                  <FormControl>
                    <Input
                      className="w-36 rounded-2xl border-0 bg-slate-100"
                      style={{ marginTop: 0 }}
                      type="text"
                      placeholder="ДжЖСинМом0823"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem className="max-w-60 flex gap-2 justify-between items-center py-1 px-2 rounded-2xl bg-white border border-slate-200">
                  <FormLabel>Размер</FormLabel>
                  <FormControl>
                    <Input
                      className="w-12 rounded-2xl border-0 bg-slate-100"
                      style={{ marginTop: 0 }}
                      type="text"
                      placeholder="44"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="max-w-36 py-1 px-2 rounded-2xl bg-white border border-slate-200">
                  <FormLabel className="select-label">Категория</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl className="mt-0">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Джинсы" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="apple">Джинсы</SelectItem>
                        <SelectItem value="banana">Брюки</SelectItem>
                        <SelectItem value="blueberry">Юбки</SelectItem>
                        <SelectItem value="grapes">Куртки</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-2 items-center">
            <Button type="submit" className="rounded-2xl bg-blue-600">
              Сформировать
            </Button>
            <Button onClick={handleExport} className="rounded-2xl bg-slate-800">
              <FileUp className="size-4 mr-2" />
              Экспорт
            </Button>
          </div>
        </form>
      </Form>

      <DataControl />
    </div>
  );
}

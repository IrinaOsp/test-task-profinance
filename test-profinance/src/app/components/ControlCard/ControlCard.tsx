import { BookText, Clipboard, NotebookPen, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ControlCard() {
  return (
    <div>
      <Card className="bg-slate-900 text-white rounded-2xl">
        <CardHeader className="p-3">
          <CardTitle className="flex gap-1 items-center justify-between">
            <p className="flex text-lg items-baseline">
              <span className="block rounded-md p-1 leading-4 bg-blue-600">
                ФИН
              </span>
              <span className="block p-1">Контроль</span>
            </p>
            <Button className="h-7 px-2 bg-slate-800 text-slate-500 rounded-3xl">
              Меню
              <X className="ml-2 size-4 font-bold" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <Accordion
            type="single"
            collapsible
            className="w-full lg:w-72 border-b-0 rounded-md"
          >
            <AccordionItem
              value="settings"
              className="mb-2 px-3 bg-slate-800 border-b-0 rounded-md"
            >
              <AccordionTrigger>
                <span className="flex gap-2 items-center">
                  <Settings className="size-4" />
                  Настройки
                </span>
              </AccordionTrigger>
              <AccordionContent>Здесь будут настройки</AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="Data Input"
              className="mb-2 px-3 bg-slate-800 border-b-0 rounded-md"
            >
              <AccordionTrigger>
                <span className="flex gap-2 items-center">
                  <NotebookPen className="size-4" />
                  Внесение данных
                </span>
              </AccordionTrigger>
              <AccordionContent>Здесь будет внесение данных</AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="Reports"
              className="mb-2 px-3 bg-slate-800 border-b-0 rounded-md"
            >
              <AccordionTrigger>
                <span className="flex gap-2 items-center">
                  <Clipboard className="size-4" />
                  Отчеты
                </span>
              </AccordionTrigger>
              <AccordionContent>Здесь будут отчеты</AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="Knowledge Base"
              className="mb-2 px-3 bg-slate-800 border-b-0 rounded-md"
            >
              <AccordionTrigger>
                <span className="flex gap-2 items-center">
                  <BookText className="size-4" />
                  База знаний
                </span>
              </AccordionTrigger>
              <AccordionContent>Здесь будет База знаний</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

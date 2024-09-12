import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const LINKS = [
  {
    name: "Пользовательское соглашение",
    href: "contract",
  },
  {
    name: "Политика конфиденциальности",
    href: "privacy",
  },
  {
    name: "Юридическая информация",
    href: "legal",
  },
  {
    name: "Публичная оферта",
    href: "offer",
  },
];

export default function ContactsCard() {
  return (
    <Card className="bg-slate-900 text-white rounded-2xl text-sm">
      <CardHeader className="max-lg:py-4">
        <CardTitle>Техническая поддержка</CardTitle>
      </CardHeader>
      <CardContent className="max-sm:block max-lg:flex w-full gap-5">
        <div className="max-sm:flex flex-wrap gap-4">
          <div className="flex flex-wrap gap-4 sm:mb-3">
            <div className="mb-3">
              <div className="text-slate-500 text-xs">Номер поддержки:</div>
              <a href="tel:+79999999999">8 (999) 999-99-99</a>
            </div>
            <div>
              <div className="text-slate-500 text-xs">Почта поддержки:</div>
              <a href="mailto:pf1@werthesest.ru">pf1@werthesest.ru</a>
            </div>
          </div>
          <div>
            <div className="text-slate-500 text-xs">Часы работы:</div>
            <div>Пн - Пт с 9:00 до 19:00 мск</div>
          </div>
        </div>
        <div className="flex-1 lg:mt-6 max-lg:flex flex-wrap sm:gap-4">
          {LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className={`block py-2 border-slate-500 ${
                i === LINKS.length - 1 ? "lg:border-b-0 border-b" : "border-b"
              } text-slate-500 hover:text-white max-lg:w-[calc(50%-16px)] max-sm:w-full`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

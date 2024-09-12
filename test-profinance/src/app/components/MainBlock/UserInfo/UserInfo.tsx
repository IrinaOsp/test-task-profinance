import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, CircleUserRound, MoveRight } from "lucide-react";

export default function UserInfo() {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-wrap gap-2 justify-between items-center py-1 rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 mr-4">
            <CircleUserRound className="size-4" />
            <span className="text-sm">Иванов И.И.</span>
          </div>
          <Button className="h-12 rounded-2xl bg-blue-100 text-blue-600">
            <CalendarDays className="size-4 mr-2" />
            Тариф до 15.04.2024
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <Button variant={"outline"} className="rounded-2xl mr-3">
            Выйти
          </Button>
          <Button className="rounded-2xl text-white bg-orange-500">
            O нас <MoveRight className="size-2 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

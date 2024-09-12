import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-4 max-w-full lg:max-w-[70%]">
      <h1 className="text-3xl text-center my-10">404 - Page Not Found</h1>
      <Button asChild>
        <Link href={"/"}>Вернуться на главную</Link>
      </Button>
    </div>
  );
}

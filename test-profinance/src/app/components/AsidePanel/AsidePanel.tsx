import Link from "next/link";
import ContactsCard from "../ContactsCard/ContactsCard";
import ControlCard from "../ControlCard/ControlCard";
import { buttonVariants } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";

export default function AsidePanel() {
  return (
    <aside className="m-3 flex flex-col gap-3">
      <ControlCard />
      <ContactsCard />
      <Link
        href={"mailto:pf1@werthesest.ru"}
        className={
          buttonVariants({ variant: "default" }) + "w-full rounded-2xl"
        }
        style={{ backgroundColor: "#2563eb" }}
      >
        <MessageCircleMore className="mr-1 size-4" />
        Связаться с нами
      </Link>
    </aside>
  );
}

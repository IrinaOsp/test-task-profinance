import FormBlock from "./components/MainBlock/FormBlock/FormBlock";
import TableBlock from "./components/MainBlock/TableBlock/TableBlock";
import UserInfo from "./components/MainBlock/UserInfo/UserInfo";

export default function Home() {
  return (
    <div className="p-4 max-w-[70%]">
      <UserInfo />
      <FormBlock />
      <TableBlock />
    </div>
  );
}

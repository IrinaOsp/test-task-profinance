import FormBlock from "./components/MainBlock/FormBlock/FormBlock";
import UserInfo from "./components/MainBlock/UserInfo/UserInfo";

export default function Home() {
  return (
    <div className="p-4">
      <UserInfo />
      <FormBlock />
    </div>
  );
}

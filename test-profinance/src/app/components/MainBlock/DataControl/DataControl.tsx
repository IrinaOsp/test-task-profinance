import { FileUp, FolderInput, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchData } from "@/redux/data/DataSlice";
import { AppDispatch } from "@/redux/store";

export default function DataControl() {
  const dispatch = useDispatch<AppDispatch>();

  const handleDataUpload = async () => {
    dispatch(fetchData());
  };

  return (
    <div className="mt-6">
      <Separator />
      <div className="flex justify-between my-1">
        <div>
          <Button variant="ghost" onClick={handleDataUpload}>
            <FolderInput className="size-4 mr-2" />
            Загрузить данные из csv
          </Button>
          <Button variant="ghost">
            <FileUp className="size-4 mr-2" />
            Изменить данные
          </Button>
        </div>
        <div className="flex">
          <Separator orientation="vertical" />
          <Button variant="ghost">
            Очистить <X className="ml-2 size-4 font-bold" />
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
}

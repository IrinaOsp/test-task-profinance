import { FileUp, FolderInput, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { clearData, fetchData } from "@/redux/data/DataSlice";
import { AppDispatch } from "@/redux/store";

export default function DataControl() {
  const dispatch = useDispatch<AppDispatch>();

  const handleDataUpload = async () => {
    dispatch(fetchData());
  };

  const handleDataClear = () => {
    dispatch(clearData());
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
          <Button variant="ghost" onClick={handleDataClear}>
            Очистить <X className="ml-2 size-4 font-bold" />
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
}

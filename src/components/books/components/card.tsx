import { Button } from "../../ui/button";
import { API_URL } from "../../../config/apiUrl";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface BookCardProps {
  file: null | FileList;
  title: string;
  author: string;
  _id?: string;
}

export const BookCard = ({ file, title, author, _id }: BookCardProps) => {
  const { user } = useAuth({});
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (user) {
      return navigate(`/${_id}`, { replace: true });
    } else {
      toast("Please log in first to see the book.");
    }
  };

  return (
    <main className="bg-slate-100 rounded-sm ">
      <div style={{ width: "200px", height: "250px" }}>
        <img
          src={`${API_URL}/${file}`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h1 className="ml-2">{title}</h1>
      <h3>{author}</h3>
      <div className="flex justify-center p-2">
        <Button onClick={handleButtonClick} size={"sm"} variant={"outline"}>
          Lihat
        </Button>
      </div>
    </main>
  );
};

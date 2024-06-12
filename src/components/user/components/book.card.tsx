import { Button } from "@/components/ui/button";
import { API_URL } from "../../../config/apiUrl";
import { bookServices } from "@/services/bookServices";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";

interface BookCardProps {
  file: null | FileList;
  title: string;
  author: string;
  _id?: string;
}

export const BookCardUser = ({ file, title, author, _id }: BookCardProps) => {
  const queryClient = useQueryClient();

  const { mutate: DeleteBook } = useMutation({
    mutationKey: ["books"],
    mutationFn: bookServices.handelDeleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Succes Add New Book");
    },
    onError: (error: { message: string }) => {
      toast.error(error.message);
    },
  });

  return (
    <main className=" rounded-sm ">
      <div style={{ width: "200px", height: "250px" }}>
        <img
          src={`${API_URL}/${file}`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="text-[14px]">{title}</div>
      <h3>{author}</h3>
      <div className="flex justify-between py-2 px-3">
        <Button size={"sm"} variant={"outline"}>
          Edit
        </Button>
        <Button
          onClick={() => {
            DeleteBook(_id as string);
          }}
          size={"sm"}
          variant={"destructive"}
        >
          Delete
        </Button>
      </div>
    </main>
  );
};

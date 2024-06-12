import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { bookServices } from "@/services/bookServices";
import { API_URL } from "@/config/apiUrl";
import { Button } from "@/components/ui/button";
import { SingleHeader } from "@/components/header/singleHeader";
import { toast } from "sonner";

export default function SinglePage() {
  const { id } = useParams();
  const queryClient = useQueryClient()

  // Fetching Data Berdasarkan id
  const query = useQuery({
    queryKey: [`books-${id}`],
    queryFn: () => bookServices.getSingleData(id as string),
  });


  const { mutate: handlePinjamBuku } = useMutation({
    mutationKey: ["books"],
    mutationFn: ()=> bookServices.updateData(id as string),
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Succes Borrowing Book");
    },
    onError: (error: { message: string }) => {
      toast.error(error.message);
    },
  });

  return (
    <main>
      <SingleHeader/>
      <div className="grid grid-cols-3 ">
        <div style={{ width: "300px", height: "350px" }}>
          <img
            className="ml-4 rounded-sm"
            src={`${API_URL}/${query.data?.file}`}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="mr-20 col-span-2">
          <h1 className="text-center">{query.data?.title}</h1>
          <h3>Author : {query.data?.author}</h3>
          <h3>ISBN : {query.data?.isbn}</h3>
          <div className="mt-4 text-justify">{query.data?.description}</div>
          <div className="flex justify-end mt-20 items-center gap-4">
            <Button onClick={()=>handlePinjamBuku()} size={"sm"} variant={"outline"}>
              Pinjam Buku
            </Button>
            <div className="text-sm font-semibold border rounded-md px-2 py-1 bg-blue-300 ">Available : {query.data?.available}</div>
          </div>
        </div>
      </div>
    </main>
  );
}

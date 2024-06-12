import { BookCardUser } from "@/components/user/components/book.card";
import { SingleHeader } from "@/components/header/singleHeader";
import { useAuth } from "@/hooks/useAuth";
import { bookServices } from "@/services/bookServices";
import { IBook } from "@/types/entity";
import Avatar from "boring-avatars";
import { useQuery } from "react-query";

export default function Profile() {
  const { user } = useAuth({});
  const query = useQuery({
    queryKey: ["books"],
    queryFn: bookServices.getDataUserBook,
  });

  return (
    <div>
      <SingleHeader />
      <div className="flex  gap-3 mx-4 n">
        <aside className="flex-0 w-1/6">
          <div className="flex flex-col items-center gap-3">
            <Avatar
              size={100}
              name="Maria Mitchell"
              variant="beam"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
            <div>
              <h2>{user?.name}</h2>
              <h3>{user?.email}</h3>
            </div>
          </div>
        </aside>
        <main className="flex-auto text-center">
          <div className="font-bold text-2xl border-b-2 pb-2 mb-4">
            My Books
          </div>
          <main>
            {query.isError ? (
              <div>Fetchin Error</div>
            ) : (
              <section className="grid grid-cols-4 max-w-4xl m-auto gap-4">
                {query.data?.map((book: IBook) => {
                  return <BookCardUser key={book._id} {...book}></BookCardUser>;
                })}
              </section>
            )}
          </main>
          <div className="font-bold text-2xl border-b-2 pb-2 my-4">
            My Borrowing Books
          </div>
        </main>
      </div>
    </div>
  );
}

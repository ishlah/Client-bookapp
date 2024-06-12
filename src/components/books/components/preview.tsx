import { useQuery } from "react-query";
import { bookServices } from "@/services/bookServices";
import { BookCard } from "./card";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Preview = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  const query = useQuery({
    queryKey: ["books"],
    queryFn: () => bookServices.getData(searchQuery),
  });

  useEffect(() => {
    query.refetch();
  }, [searchParams]);

  return (
    <div>
      <main>
        {query.isError ? (
          <div>Fetchin Error</div>
        ) : (
          <section className="grid grid-cols-4 max-w-5xl m-auto gap-4">
            {query.data?.map((book) => {
              return <BookCard key={book._id} {...book}></BookCard>;
            })}
          </section>
        )}
      </main>
    </div>
  );
};

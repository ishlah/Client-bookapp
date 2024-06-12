import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "react-query";
import { bookServices } from "@/services/bookServices";
import React, { useState } from "react";
import { toast } from "sonner";
import { IBook } from "@/types/entity";
import { useNavigate } from "react-router-dom";

const initialBook: IBook = {
  title: "",
  description: "",
  author: "",
  isbn: "",
  available: 0,
  file: null,
};

export const FormBook = () => {
  const [book, setBook] = useState(initialBook);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: handelAddBook } = useMutation({
    mutationKey: ["books"],
    mutationFn: bookServices.createData,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Succes Add New Book");
      navigate("/profile");
      setBook(initialBook);
    },
    onError: (error: { message: string }) => {
      toast.error(error.message);
    },
  });

  function handleDriveTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setBook({ ...book, title: e.target.value });
  }

  function handleDriveDescription(e: React.ChangeEvent<HTMLInputElement>) {
    setBook({ ...book, description: e.target.value });
  }

  function handleDriveAuthor(e: React.ChangeEvent<HTMLInputElement>) {
    setBook({ ...book, author: e.target.value });
  }

  function handleDriveIsbn(e: React.ChangeEvent<HTMLInputElement>) {
    setBook({ ...book, isbn: e.target.value });
  }

  function handleDriveAvailable(e: React.ChangeEvent<HTMLInputElement>) {
    setBook({ ...book, available: Number(e.target.value) });
  }

  function handleDriveFile(e: React.ChangeEvent<HTMLInputElement>) {
    setBook({ ...book, file: e.target.files });
  }

  return (
    <div>
      <div className="text-center font-bold text-xl mb-4">Add Your Book</div>
      <main className="flex justify-center">
        <div className="w-[370px] space-y-4 my-4">
          <Input
            value={book.title}
            onChange={handleDriveTitle}
            placeholder="Title"
          />
          <Input
            value={book.description}
            onChange={handleDriveDescription}
            placeholder="Description"
          />
          <Input
            value={book.author}
            onChange={handleDriveAuthor}
            placeholder="Author"
          />
          <Input
            value={book.isbn}
            onChange={handleDriveIsbn}
            placeholder="ISBN"
          />
          <Input
            value={book.available}
            onChange={handleDriveAvailable}
            placeholder="Avalable"
            type="number"
          />
          <Input type="file" onChange={handleDriveFile} />
          <Button
            onClick={() => {
              handelAddBook(book);
            }}
            className="w-full"
          >
            Submit
          </Button>
        </div>
      </main>
    </div>
  );
};

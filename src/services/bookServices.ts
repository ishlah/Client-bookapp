import { API_URL } from "@/config/apiUrl";
import { IBook } from "../types/entity";
import { toast } from "sonner";

export const bookServices = {
  getData: async (searchKey: string | null) => {
    const query = searchKey ? `/?search=${searchKey}` : "";
    const res = await fetch(`${API_URL}/books${query}`);
    const data = (await res.json()) as IBook[];
    return data;
  },

  getSingleData: async (id: string) => {
    const res = await fetch(`${API_URL}/books/${id}`);
    const data = (await res.json()) as IBook;
    return data;
  },

  createData: async ({
    title,
    description,
    author,
    isbn,
    file,
    available,
  }: IBook) => {
    if (!title || !description || !author || !isbn || !file || !available) {
      throw new Error("All form must be filed");
    }
    const userDataString = localStorage.getItem("user");

    if (!userDataString) {
      throw new Error("User data not found in localStorage");
    }

    const userData = JSON.parse(userDataString);

    const userId = userData.id;

    if (!userId) {
      throw new Error("User ID not found in localStorage");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("isbn", isbn);
    formData.append("available", available.toString());
    formData.append("userId", userId);
    formData.append("file", file[0]);

    const res = await fetch(`${API_URL}/books`, {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ title, description, author, isbn }),
      body: formData,
    });
    const data = (await res.json()) as IBook;
    return data;
  },

  getDataUserBook: async () => {
    const userDataString = localStorage.getItem("user");

    if (!userDataString) {
      throw new Error("User data not found in localStorage");
    }

    const userData = JSON.parse(userDataString);

    const userId = userData.id;

    if (!userId) {
      throw new Error("User ID not found in localStorage");
    }

    const res = await fetch(`${API_URL}/books`);
    const data = await res.json();

    // Filter books by userId
    const filteredBooks = data.filter((book: any) => book.userId === userId);

    return filteredBooks;
  },

  handelDeleteBook: async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/books/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to delete");
      }

      const data = await res.json();
      toast.success("Delete Success!");
      return data;
    } catch (error) {
      toast.error("Delet Failed!");
    }
  },
  updateData: async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId: id }),
      });

      if (!res.ok) {
        throw new Error("Failed to update");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      toast.error("Update Failed!");
    }
  },
};

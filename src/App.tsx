import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SinglePage from "./pages/singlePage";
import { Auth } from "./pages/auth";
import { Toaster } from "@/components/ui/sonner";
import AddBook from "./pages/add.book";
import AboutUs from "./pages/aboutUs";
import Profile from "./pages/profile";


export default function App() {

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/:id" element={<SinglePage />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

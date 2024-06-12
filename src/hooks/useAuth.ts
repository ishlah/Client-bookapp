import { API_URL } from "@/config/apiUrl";
import { userAtomStorage } from "@/components/user/context/userAtom";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface useAuthProps {
  name?: string;
  email?: string;
  password?: string;
}
export const useAuth = ({ name, email, password }: useAuthProps) => {
  const [user, setUser] = useAtom(userAtomStorage);
  const navigate = useNavigate();

  async function handleRegister() {
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        toast.error(errorData.message || "Registration failed");
        throw new Error(errorData.message || "Registration failed");
      }
      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/", { replace: true });
      setUser(data.user);
      toast.success("Registration successful!");
      return data;
    } catch (error: any) {
      toast.error(error.message || "Registration failed. Please try again.");
    }
  }

  async function handleLogin() {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        toast.error(errorData.message || "Login failed");
        throw new Error(errorData.message || "Login failed");
      }

      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      Cookies.set("token", data.token);
      navigate("/", { replace: true });
      setUser(data.user);
      toast.success("Login successful!");
      return data;
    } catch (error: any) {
      toast.error(error.message || "Login failed. Please try again.");
    }
  }

  async function handleLogout() {
    Cookies.remove("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/auth", { replace: true });
  }

  return { handleRegister, handleLogin, user, handleLogout };
};

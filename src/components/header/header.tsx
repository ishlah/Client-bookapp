import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { UserAvatar } from "./userAvatar";

export const Header = () => {
  const { user } = useAuth({});
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      navigate(`/?search=${searchKey}`);
    }
  }
  return (
    <div>
      <header className="flex justify-between items-center p-4 mb-4 border-b-2">
        <div className="flex justify-between gap-4 items-center">
          <Link to="/">
            <div className="font-bold text-lg">PinjamBuku</div>
          </Link>
          <Input
            value={searchKey}
            placeholder="Search"
            onChange={(e) => setSearchKey(e.target.value)}
            onKeyUp={handleSearch}
          ></Input>
        </div>
        <div>
          {user ? (
            <div className="flex justify-between items-center gap-2">
              <div className="font-semibold text-base">{user.name}</div>
              <div>
                <UserAvatar />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to={"/about"}>
                <h1>About Us</h1>
              </Link>
              <Link to={"/auth"}>
                <Button size={"default"}>Get Started</Button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

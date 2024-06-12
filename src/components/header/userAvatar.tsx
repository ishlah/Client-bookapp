import * as React from "react";
import Avatar from "boring-avatars";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

export function UserAvatar() {
  const [position, setPosition] = React.useState("Profile");
  const { handleLogout } = useAuth({});

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="mt-2 animate-pulse">
          <Avatar
            size={28}
            name="Maria Mitchell"
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <Link to={"/"}>
            <DropdownMenuRadioItem value="Home">Home</DropdownMenuRadioItem>
          </Link>
          <Link to={"/about"}>
            <DropdownMenuRadioItem value="About Us">
              About Us
            </DropdownMenuRadioItem>
          </Link>
          <Link to={"/profile"}>
            <DropdownMenuRadioItem value="Profile">
              Profile
            </DropdownMenuRadioItem>
          </Link>
          <Link to={"/add"}>
            <DropdownMenuRadioItem value="Add Book">
              Add Book
            </DropdownMenuRadioItem>
          </Link>
          <DropdownMenuRadioItem
            className="focus:bg-[#FF0000]"
            onClick={handleLogout}
            value="Logout"
          >
            Logout
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

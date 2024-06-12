import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { IUser } from "@/types/entity";
import { SingleHeader } from "@/components/header/singleHeader";

const initialUser: IUser = {
  name: "",
  email: "",
  password: "",
};
export const Auth = () => {
  const [user, setUser] = useState(initialUser);
  const { handleRegister, handleLogin } = useAuth(user);

  return (
    <div>
      <SingleHeader/>
      <div className="flex justify-center mt-8">
        <Tabs defaultValue="register" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Make your account here. Click submit when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    id="name"
                    type="text"
                    placeholder="Pedro Duarte"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    type="email"
                    id="email"
                    placeholder="pedroduarte@mail.com"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    id="password"
                    type="password"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button onClick={handleRegister}>Submit</Button>
                <Link to={"/"}>
                  <Button size={"sm"} variant={"ghost"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
                      />
                    </svg>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Welcome back ! Please enter your email and password here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    id="email"
                    type="email"
                    placeholder="pedroduarte@mail.com"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    id="new"
                    type="password"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button onClick={handleLogin}>Login</Button>
                <Link to={"/"}>
                  <Button size={"sm"} variant={"ghost"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
                      />
                    </svg>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

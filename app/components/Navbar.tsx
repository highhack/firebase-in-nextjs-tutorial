import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const { user, logOut, googleSignIn, isAuthLoading } = UserAuth() || {};

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex justify-between p-2">
      <ul className="flex gap-5">
        <li className="">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="">
          <a href="/profile" className="nav-link">
            Profile
          </a>
        </li>
      </ul>

      {isAuthLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Popover>
            <PopoverTrigger>LogIn</PopoverTrigger>
            <PopoverContent>
              {" "}
              {!user ? (
                <div className="flex flex-col gap-2">
                  <button onClick={handleSignIn}>Login with google</button>
                  <a href="/signup">Sign up</a>
                </div>
              ) : (
                <div className="flex gap-5">
                  <div>Welcome {user?.displayName}</div>
                  <button onClick={handleSignOut}>Log out</button>
                </div>
              )}
            </PopoverContent>
          </Popover>
        </>
      )}
    </nav>
  );
};

export default Navbar;

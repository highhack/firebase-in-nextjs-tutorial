import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";

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
          {!user ? (
            <div className="flex gap-5">
              <button onClick={handleSignIn}>Login</button>
              <button onClick={handleSignIn}>Sign up</button>
            </div>
          ) : (
            <div className="flex gap-5">
              <div>Welcome {user?.displayName}</div>
              <button onClick={handleSignOut}>Log out</button>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import { auth } from "../firebase";

export default function SignUp() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isAuthLoading,
    register,
    user,
  } = UserAuth() || {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
        <div>
          <h1>Register</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={register}>Register</button>
        </div>
      </div>
    </main>
  );
}

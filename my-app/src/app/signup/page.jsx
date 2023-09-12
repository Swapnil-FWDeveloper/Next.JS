"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function Signup() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>This is Signup Page </h1>
      <hr/>
      <label htmlFor="username" className="block text-gray-600 font-semibold mt-4 mb-2">
  Username
</label>
<input
  id="username"
  type="text"
  value={user.username}
  onChange={(e) => setUser({ ...user, username: e.target.value })}
  placeholder="Username"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
/>

<label htmlFor="email" className="block text-gray-600 font-semibold mt-4 mb-2">
  Email
</label>
<input
  id="email"
  type="text"
  value={user.email}
  onChange={(e) => setUser({ ...user, email: e.target.value })}
  placeholder="Email"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
/>

<label htmlFor="password" className="block text-gray-600 font-semibold mt-4 mb-2">
  Password
</label>
<input
  id="password"
  type="password"
  value={user.password}
  onChange={(e) => setUser({ ...user, password: e.target.value })}
  placeholder="Password"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
/>

<button
  onClick={onSignup}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
>
  Sign Up
</button>

<Link href="../login" className="text-blue-500 mt-2">Visit Login Page</Link>

      </div>
  );
}

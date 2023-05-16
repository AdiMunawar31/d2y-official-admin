import Link from "next/link";
import React from "react";
import { FaLock } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Login = () => {
  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-tr from-black to-gray-900 i justify-around items-center">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">D2Y OFFICIAL</h1>
          <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
          <button type="submit" className="block w-28 bg-white text-black mt-4 py-2 rounded-2xl font-bold mb-2">
            Read More
          </button>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <MdOutlineAlternateEmail className="h-5 w-5 text-gray-400" />
            <input className="pl-2 outline-none border-none" type="text" placeholder="Email Address" />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <FaLock className="h-5 w-5 text-gray-400" />
            <input className="pl-2 outline-none border-none" type="text" placeholder="Password" />
          </div>
          <Link href="/">
            <button type="submit" className="block w-full bg-black mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
              Login
            </button>
          </Link>
          <span className="text-sm ml-2 hover:text-gray-900 cursor-pointer">Forgot Password ?</span>
        </form>
      </div>
    </div>
  );
};

export default Login;

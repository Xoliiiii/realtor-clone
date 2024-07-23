import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <div>
        <button className="flex items-center justify-center w-full bg-red-600 text-white text-sm px-7 py-3 uppercase font-medium hover:bg-red-700 active:bg-red-800 shadow-md hover:shadow-lg active:lg transition duration:200 ease-in-out rounded">
        <FcGoogle className="text-2xl bg-white rounded-full mr-2"  />
            Continue with Google
        </button>
    </div>
  )
}

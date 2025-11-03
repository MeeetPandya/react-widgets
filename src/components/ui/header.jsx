import { useState } from "react";
import Login from "../widgets/Login";

export default function Header() {
  const [login, setLogin] = useState(false);

  return (
    <header className="w-full bg-transparent shadow-md py-4 px-6 flex justify-between border rounded-2xl">
      <h1 className="font-bold text-2xl backdrop-blur-2xl ">Widget Dashboard</h1>
      
      {!login ? (
        <div className=" border rounded-2xl px-4 py-2 flex items-center gap-2 text-sm font-medium  text-blue-600 hover:cursor-pointer" onClick={ () => {Login ; console.log("Login clicked"); setLogin(true)}} >
          <div className=""  >
            Login
          </div>
        </div>
        ):(
          <div className=" border rounded-2xl px-4 py-2 flex items-center gap-2 text-sm font-medium  text-red-600 hover:cursor-pointer" onClick={ () => setLogin(false) }>
            Logout
          </div>
      )}
    </header>
  );
} 
"use client";

import { useRef, useState, useEffect } from "react";
import { updateUsername } from "./actions";

export default function CreateUserName({ initialUsername }: { initialUsername: string }) {
  const [username, setUsername] = useState(initialUsername ?? "");
  //True when edit textbox shows. False when only label shows
  const [isUpdatable, setIsUpdatable] = useState((initialUsername ?? "").length == 0)
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isUpdatable) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isUpdatable]);

  const onUsernameCreate = async(newUsername: string) => {
    if (newUsername.length == 0) {
      setErrorMessage("Username must be at least one character");
      setIsError(true);
      return;
    }

    const success = await updateUsername(newUsername);
    if (!success) {
      setErrorMessage("Username must be unique");
    }
    setIsError(!success);

    setIsUpdatable(!success);
  }

  return (
    <form 
      className="flex flex-col gap-2 bg-white shadow-md rounded-xl p-6 min-w-[300px]"
      onSubmit={(e) => {
        e.preventDefault();
        onUsernameCreate(username);
      }}
    >
      <div className="flex gap-2 items-baseline">
        <h1 className="text-xl font-semibold">{isUpdatable ? "Create a User Name:" : "User Name:"}</h1>
        <button 
          type="button"
          className={isUpdatable ? "hidden" : "text-gray-500 hover:underline hover:text-blue-700"}
          onClick={() => setIsUpdatable(true)}
        >
          {username}
        </button>
      </div>
      <div className={isUpdatable ? "flex gap-2" : "hidden"}>
        <input 
          type="text" 
          placeholder="Create User Name"
          ref={inputRef}
          value={username ?? ""}
          onChange={(e) => setUsername(e.target.value)}
          className="input-textbox w-full"
          
        />
        <input 
          type="submit" 
          value="Set" 
          className="input-button"
        />
      </div>
      <p className={isError ? "text-sm text-red-600" : "hidden"}>{errorMessage}</p>
    </form>
  );
}
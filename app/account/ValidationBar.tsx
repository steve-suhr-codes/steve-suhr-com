"use client";

import { useSearchParams } from "next/navigation";

export default function ValidationBar() {
  const sp = useSearchParams();
  const validationMessage = sp?.get("validationMessage");

  return (
    <div className={
      validationMessage ?
      "flex w-full items-center justify-center rounded-md bg-red-50 p-4 shadow-md border border-red-200"
      : "hidden"}>
      <p className="text-sm font-medium text-red-700">
        {validationMessage}
      </p>
    </div>
  );
}
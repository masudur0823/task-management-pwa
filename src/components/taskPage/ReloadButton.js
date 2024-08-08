"use client";

import { getTasks } from "@/helpers/getTasks";

export default function ReloadButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      className="bg-slate-600 text-white px-5 py-2"
    >
      Reload
    </button>
  );
}

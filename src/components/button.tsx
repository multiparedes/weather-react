"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
  className?: string;
  link?: string;
}

export default function Button(props: Props) {
  const router = useRouter();

  function redirectUser() {
    if (props.link) {
      router.push(props.link);
    }
  }

  return (
    <button
      className={`px-4 py-1 bg-white border border-slate-950 rounded-lg ${props.className}`}
      onClick={redirectUser}
    >
      {props.children}
    </button>
  );
}

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
}

export default function Card(props: Props) {
  return (
    <div className={`px-2 py-1 bg-white rounded-lg ${props.className}`}>
      {props.children}
    </div>
  );
}

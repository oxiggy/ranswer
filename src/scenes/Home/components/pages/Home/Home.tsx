import type { MetaFunction } from "@remix-run/node";
// @ts-ignore
import ChangeIcon from "src/assets/icons/change-response.svg?react";

export const meta: MetaFunction = () => {
  return [
    { title: "Ranswer" },
    { name: "description", content: "App for random conversation topics." },
  ];
};

export function Home() {

  const handleSubmit = () => {
  }

  return (
    <div className="bg-surface grow flex flex-col items-center justify-center gap-10">
      <div className="text-primary text-5xl">
        response
      </div>
      <button className="text-primary" onClick={handleSubmit}>
        <ChangeIcon />
      </button>
    </div>
  );
}

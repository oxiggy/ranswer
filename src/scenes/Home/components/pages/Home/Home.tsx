import type { MetaFunction } from "@remix-run/node";
// @ts-ignore
import ChangeIcon from "src/assets/icons/change-response.svg?react";
import { useTopic } from "@/hooks/useTopic";

export const meta: MetaFunction = () => {
  return [
    { title: "Ranswer" },
    { name: "description", content: "App for random conversation topics." },
  ];
};

export function Home() {
  const topicRes = useTopic();

  const handleSubmit = () => {
    topicRes.refetch();
  }

  return (
    <div className="bg-surface grow flex flex-col items-center justify-center gap-10">
      <div className="text-primary text-center text-3xl px-2">
        {topicRes.data || 'Select a topic of conversation by clicking here'}
      </div>
      <button className="text-primary" onClick={handleSubmit}>
        <ChangeIcon />
      </button>
    </div>
  );
}

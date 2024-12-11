"use client";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

import { useSelf } from "@/liveblocks.config";

interface iAppProps {
  boardId: string;
}

export const Canvas = ({ boardId }: iAppProps) => {
  const info = useSelf((me) => me.info);

  console.log(info)
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar />
    </main>
  );
};

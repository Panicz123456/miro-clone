"use client";

import { memo } from "react";
import { MousePointer2 } from "lucide-react";

import { connectionIdToColor } from "@/lib/utils";
import { useOther } from "@/liveblocks.config";

interface iAppProps {
  connectionId: number;
}

export const Cursor = memo(({ connectionId }: iAppProps) => {
  const info = useOther(connectionId, (user) => user?.info);
  const cursor = useOther(connectionId, (user) => user.presence.cursor);

  const name = info?.name || "Teammate";

  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;

  return (
    <foreignObject
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      height={name.length * 10 + 24}
      width={name.length * 10 + 24}
      className="relative drop-shadow-md">
      <MousePointer2
        className="size-5"
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId),
        }}
      />
      <div
        className="absolute left-5 px-1.5 py-0.5 rounded-md text-xs text-white font-semibold"
        style={{ backgroundColor: connectionIdToColor(connectionId) }}>
        {name}
      </div>
    </foreignObject>
  );
});

Cursor.displayName = "Cursor";

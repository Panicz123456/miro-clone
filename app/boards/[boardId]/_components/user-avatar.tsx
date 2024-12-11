import { Hint } from "@/components/hint";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface iAppProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

export const UserAvatar = ({ borderColor, fallback, name, src }: iAppProps) => {
  return (
    <Hint label={name || "Teammate"} side="bottom" sideOffset={10}>
      <Avatar className="size-8 border-2" style={{ borderColor }}>
        <AvatarImage src={src} />
        <AvatarFallback className="text-xs font-semibold">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};

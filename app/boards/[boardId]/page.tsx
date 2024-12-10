import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";

import { Room } from "@/components/room";

interface iAppProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: iAppProps) => {    
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;

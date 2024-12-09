"use client";

import { EmptyBoards } from "./empty-board";
import { EmptyFavourites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";

interface iAppProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: iAppProps) => {
  const data = []; // TODO: Change to api call

  if (!data.length && query.search) {
    return <EmptySearch />
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavourites />
  }
  if(!data?.length) { 
    return <EmptyBoards />
  }

  return <div></div>;
};


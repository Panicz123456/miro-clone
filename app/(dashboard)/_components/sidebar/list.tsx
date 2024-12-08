"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

export function List() {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (userMemberships.data?.length === 0) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => {
        return (
          <Item
            id={mem.organization.id}
            key={mem.organization.id}
            imageUrl={mem.organization.imageUrl}
            name={mem.organization.name}
          />
        );
      })}
    </ul>
  );
}

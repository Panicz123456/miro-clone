import Image from "next/image";

export function EmptySearch() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-search.svg"
        alt="Empty search"
        height={140}
        width={140}
      />
      <h2 className="text-muted-foreground text-sm mt-2">No result found!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try for something else
      </p>
    </div>
  );
}

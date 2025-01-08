"use client";

import { X as ClearIcon, SearchIcon } from "lucide-react";
import { FC, useState } from "react";

import { cn } from "../lib/utils";

import { Button, Input } from "./ui";

interface SearchProps {
  className?: string;
}

export const Search: FC<SearchProps> = ({ className = "" }) => {
  const [search, setSearch] = useState("");

  return (
    <div
      className={cn(
        "flex items-center bg-gray-50 rounded-[15px] py-[14px] px-[20px] h-[50px]",
        className,
      )}
    >
      <SearchIcon className="mr-[12px] text-gray-400" />
      <Input
        className="bg-transparent border-none rounded-none"
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search.length > 0 && (
        <Button
          onClick={() => setSearch("")}
          className="p-0 hover:text-primary hover:bg-transparent"
          variant={"ghost"}
        >
          <ClearIcon />
        </Button>
      )}
    </div>
  );
};

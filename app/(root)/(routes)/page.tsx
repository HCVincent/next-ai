import { SearchInput } from "@/components/search-input";
import { UserButton } from "@clerk/nextjs";
import React from "react";

type rootPageProps = {};

const RootPage: React.FC<rootPageProps> = () => {
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
    </div>
  );
};
export default RootPage;

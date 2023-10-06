import { UserButton } from "@clerk/nextjs";
import React from "react";

type rootPageProps = {};

const RootPage: React.FC<rootPageProps> = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default RootPage;

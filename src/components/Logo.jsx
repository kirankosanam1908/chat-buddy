import { ChatTeardropText } from "@phosphor-icons/react";
import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-row items-center space-x-2 ">
      <ChatTeardropText size={32} weight="bold" />
      <div className="text-2xl font-medium text-body dark:text-white">
        ChatBuddy
      </div>
    </div>
  );
};

export default Logo;

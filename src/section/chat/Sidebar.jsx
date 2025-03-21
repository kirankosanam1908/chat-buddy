import {
  Chat,
  DotsThreeCircle,
  Shapes,
  SignOut,
  UserCircle,
  Users,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";

const Navigation = [
  {
    key: 0,
    title: "DMs",
    icon: <Chat size={24} />,
  },
  {
    key: 1,
    title: "Groups",
    icon: <Users size={24} />,
  },
  {
    key: 2,
    title: "Profile",
    icon: <UserCircle size={24} />,
  },
  {
    key: 3,
    title: "More",
    icon: <DotsThreeCircle size={24} />,
  },
];

export default function Sidebar() {
  const [selected, setSelected] = useState(0);

  const handleClick = (key) => {
    setSelected(key);
  };

  return (
    <div className="flex flex-col w-[7%] h-screen p-[10px] border-r border-stroke dark:border-strokedark ">
      {/* <div className="mx-auto border rounded-[10px] border-stroke p-[10px] dark:border-strokedark hover:cursor-pointer hover:bg-stone-400 dark:text-bodydark1">
        <Chat size={24} />
      </div> */}

      <div className="flex flex-col items-center space-y-5">
        <div className="space-y-2 flex flex-col text-center ">
          <div className="mx-auto border rounded-[10px] border-stroke p-[10px] dark:border-strokedark dark:text-bodydark1">
            <Shapes size={24} />
          </div>
          <span className="font-medium text-sm">Workspace</span>
        </div>

        {Navigation.map((each) => (
          <div
            key={each.key}
            className="space-y-2 flex flex-col text-center hover:cursor-pointer hover:text-primary"
            onClick={() => {
              handleClick(each.key);
            }}
          >
            <div
              className={`mx-auto border rounded-[10px] border-stroke p-[10px] dark:border-strokedark dark:text-bodydark1 ${
                selected === each.key && "bg-primary opacity-90 text-white "
              } hover:border-primary dark:hover:border-primary `}
            >
              {each.icon}
            </div>
            <span
              className={`font-medium text-sm ${
                selected === each.key && "text-primary"
              }`}
            >
              {each.title}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col grow"></div>

      <div className="space-y-4.5 flex flex-col items-center">
        <DarkModeSwitcher />
        <div className="mx-auto border rounded-[10px] border-stroke p-[10px] dark:border-strokedark hover:cursor-pointer hover:bg-stone-400 dark:text-bodydark1">
          <SignOut size={24} />
        </div>
      </div>
    </div>
  );
}

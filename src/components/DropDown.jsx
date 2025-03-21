import { DotsThree, PencilSimple, Trash } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const DropDown = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const trigger = useRef(null);
  const dropDown = useRef(null);
  {
    /* for hiding the dropdown after clicking anywhere on the screen */
  }
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropDown.current) return;

      if (
        !dropDown ||
        dropDown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;

      setDropDownOpen(false);
    };

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  });
  {
    /* for escape key */
  }
  useEffect(() => {
    const clickHandler = ({ keyCode }) => {
      if (!dropDownOpen || keyCode !== 27) return;

      setDropDownOpen(false);
    };

    document.addEventListener("keydown", clickHandler);

    return () => document.removeEventListener("keydown", clickHandler);
  });

  return (
    <div className="relative flex">
      <button
        className="text-[#98A8AD] hover:text-body border-0"
        ref={trigger}
        onClick={() => setDropDownOpen((prev) => !prev)}
      >
        <DotsThree size={24} weight="bold" />
      </button>

      <div
        ref={dropDown}
        onFocus={() => setDropDownOpen(true)}
        onBlur={() => setDropDownOpen(false)}
        className={`absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke p-1.5 bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropDownOpen === true ? "block" : "hidden"
        }`}
      >
        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:bg-meta-4 ">
          <PencilSimple size={20} /> Edit
        </button>
        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:bg-meta-4 ">
          <Trash size={20} /> Delete
        </button>
      </div>
    </div>
  );
};

export default DropDown;

import { File, Image, Paperclip } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ToggleDocumentModal, ToggleMediaModal } from "../redux/slices/app";

const Attachment = () => {
  const dispatch = useDispatch();
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
        <Paperclip size={24} weight="bold" />
      </button>

      <div
        ref={dropDown}
        onFocus={() => setDropDownOpen(true)}
        onBlur={() => setDropDownOpen(false)}
        className={`absolute right-0 -top-24 z-40 w-55 space-y-1 rounded-sm border border-stroke p-1.5 bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropDownOpen === true ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            dispatch(ToggleMediaModal(true));
          }}
          className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:bg-meta-4 "
        >
          <Image size={20} /> Images & Videos
        </button>
        <button
          onClick={() => {
            dispatch(ToggleDocumentModal(true));
          }}
          className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:bg-meta-4 "
        >
          <File size={20} /> Files & Documents
        </button>
      </div>
    </div>
  );
};

export default Attachment;

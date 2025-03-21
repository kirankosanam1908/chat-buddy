import { Smiley } from "@phosphor-icons/react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useEffect, useRef, useState } from "react";

const EmojiPicker = () => {
  const [pickerOpen, setPickerOpen] = useState(false);

  const colorMode = JSON.parse(window.localStorage.getItem("color-theme"));

  const pickerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleMouseClickOutside = (event) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleMouseClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleMouseClickOutside);
    };
  }, []);

  const handleTrigger = (e) => {
    e.preventDefault();

    setPickerOpen((prev) => !prev);
  };
  return (
    <div className="relative flex">
      <button
        ref={buttonRef}
        className="text-[#9886AD] hover:text-body"
        onClick={handleTrigger}
      >
        <Smiley size={24} />
      </button>

      {pickerOpen && (
        <div ref={pickerRef} className="absolute z-40 -top-115 right-0">
          <Picker theme={colorMode} data={data} onEmojiSelect={console.log} />
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;

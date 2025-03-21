import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleAudioModal } from "../redux/slices/app";

const VoiceRecorder = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const { audio } = useSelector((state) => state.app.modals);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!audio || keyCode !== 27) return;

      dispatch(ToggleAudioModal(false));
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  }, [audio, dispatch]);

  // on not allowed ,not found

  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex w-full min-h-screen items-center justify-center bg-black/90 px-4 py-5 ${
        audio ? "block" : "hidden"
      }`}
    >
      <div
        ref={modalRef}
        className="md:px-17.5 w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12"
      ></div>
    </div>
  );
};

export default VoiceRecorder;

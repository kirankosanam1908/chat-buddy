import { PaperPlaneTilt, X } from "@phosphor-icons/react";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleDocumentModal } from "../redux/slices/app";
import FileDropZone from "./FileDropZone";

const DocumentPicker = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const { docs } = useSelector((state) => state.app.modals);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!docs || keyCode !== 27) return;

      dispatch(ToggleDocumentModal(false));
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });
  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex w-full min-h-screen items-center justify-center bg-black/90 pz-4 py-5 ${
        docs ? "block" : "hidden"
      }`}
    >
      <div
        ref={modalRef}
        className="md:px-17.5 w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12"
      >
        <div className="flex flex-row items-center justify-between mb-8 space-x-2">
          <div className="text-md font-medium text-black dark:text-white">
            Choose documents to send
          </div>

          <button
            onClick={() => {
              dispatch(ToggleDocumentModal(false));
            }}
          >
            <X size={24} />
          </button>
        </div>

        <FileDropZone
          maxFileSize={64 * 1024 * 1024}
          acceptedFiles=".pdf,.ppt,.doc,.docx,.xls,.txt,.csv,.fig"
        />

        <div className="flex flex-row items-center space-x-2 justify-between mt-4">
          <input
            type="text"
            className="border rounded-lg hover:border-primary focus:border-primary h-13 outline-none w-full p-2 border-stroke dark:border-strokedark bg-transparent dark:bg-form-input"
            placeholder="Type your message..."
          />

          <button className="flex items-center justify-center p-2.5 max-w-13 w-full rounded-md bg-primary text-white hover:bg-opacity-90">
            <PaperPlaneTilt size={20} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentPicker;

import { PaperPlaneTilt, X } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleGifModal } from "../redux/slices/app";
import { useEffect, useRef } from "react";

const GifModal = () => {
  const modalRef=useRef(null)
  const dispatch = useDispatch();

  const { gif } = useSelector((state) => state.app.modals);
  const { selectedGifUrl } = useSelector((state) => state.app);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!gif || keyCode !== 27) return;

      dispatch(
        ToggleGifModal({
          value: false,
          url: "",
        })
      );
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div
      ref={modalRef}
      className={`fixed left-0 top-0 z-999999 flex w-full min-h-screen items-center justify-center bg-black/90 pz-4 py-5 ${
        gif ? "block" : "hidden"
      }`}
    >
      <div className="md:px-17.5 w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12">
        <div className="flex flex-row items-center justify-between mb-8 space-x-2">
          <div className="text-md font-medium text-black dark:text-white">
            Send Giphy
          </div>

          <button
            onClick={() => {
              dispatch(
                ToggleGifModal({
                  value: false,
                  url: "",
                })
              );
            }}
          >
            <X size={24} />
          </button>
        </div>

        <img
          src={selectedGifUrl}
          alt=""
          className="w-full mx-auto max-h-100 object-cover object-center rounded-lg"
        />

        <div className="flex flex-row items-center space-x-2 justify-between mt-4">
          <input
            type="text"
            className="border rounded-lg hover:border-primary h-13 outline-none w-full p-2 border-stroke dark:border-strokedark bg-transparent dark:bg-form-input"
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

export default GifModal;

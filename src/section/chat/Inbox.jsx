import {
  DotsThree,
  Gif,
  LinkSimple,
  Microphone,
  PaperPlane,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "@phosphor-icons/react";
import User01 from "/home/kiran/my_react/chatapp/src/images/user/user-01.png";
import DropDown from "../../components/DropDown";
import EmojiPicker from "../../components/EmojiPicker";
import { useState } from "react";
import UserInfo from "./UserInfo";
import Giphy from "../../components/Giphy";
import { useDispatch } from "react-redux";
import { ToggleAudioModal } from "../../redux/slices/app";
import Attachment from "../../components/Attachment";
import MsgSeparator from "../../components/MsgSeparator";
import TypingIndicator from "../../components/TypingIndicator";
import { TextMessage } from "../../components/Messages";

const Inbox = () => {
  const dispatch = useDispatch();
  const [userInfoOpen, setUserInfoOpen] = useState(false);

  const [gifOpen, setGifOpen] = useState(false);

  const handleGifOpen = (e) => {
    e.preventDefault();
    setGifOpen((prev) => !prev);
  };

  const handleToggleUserInfo = () => {
    setUserInfoOpen((prev) => !prev);
  };

  const handleVoiceClick = (e) => {
    e.preventDefault();
    dispatch(ToggleAudioModal(true));
  };

  const handleAttachmentClick = (e) => {
    e.preventDefault(e);
  };

  return (
    <>
      <div
        className={`flex h-full flex-col border-1 border-stroke dark:border-strokedark ${
          userInfoOpen ? "xl:w-1/2" : "xl:w-3/4"
        } `}
      >
        {/* Chat Header */}
        <div className="sticky flex items-center flex-row justify-between border-b border-stroke dark:border-strokedark px-6 py-4.5">
          <div className="flex items-center" onClick={handleToggleUserInfo}>
            <div className="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
              <img
                src={User01}
                alt="avatar"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <h5 className="font-medium text-black dark:text-white">
                Kiran Kosanam
              </h5>
              <p className="text-xs dark:text-bodydark1">
                Don't just exist... Live
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <button className="hover:cursor-pointer">
              <VideoCamera size={24} />
            </button>
            <button className="hover:cursor-pointer">
              <Phone size={24} />
            </button>
            <DropDown />
          </div>
        </div>

        {/* MessagesList */}

        <div className="max-h-full space-y-3.5 overflow-auto no-scrollbar px-6 py-7.5 grow">
          <div className="max-w-125">
            <p className="mb-2.5 text-xs dark:text-bodydark1 ">Andri Thomas</p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
              <p className="text-[15px] dark:text-bodydark1">
                Hi! Hello... How are you?
              </p>
            </div>
            <p className="text-[10px] dark:text-bodydark1">1.55pm</p>
          </div>

          <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary text-white px-5 py-3">
              <p className="text-[15px]">
                Hi! Hello... I am fine. How are you?
              </p>
            </div>
            <p className="text-[10px] dark:text-bodydark1">1.55pm</p>
          </div>

          <TextMessage
            author="Kiran"
            content="Hi hello mawa https://www.npmjs.com/"
            read_receipt="delivered"
            incoming={false}
            timestamp="1.55pm"
          />
          <MsgSeparator />

          <div className="max-w-125">
            <p className="mb-2.5 text-xs dark:text-bodydark1 ">Andri Thomas</p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
              <p className="text-[15px] dark:text-bodydark1">
                Hi! Hello... How are you?
              </p>
            </div>
            <p className="text-[10px] dark:text-bodydark1">1.55pm</p>
          </div>

          <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary text-white px-5 py-3">
              <p className="text-[15px]">
                Hi! Hello... I am fine. How are you?
              </p>
            </div>
            <p className="text-[10px] dark:text-bodydark1">1.55pm</p>
          </div>
          <div className="max-w-125">
            <p className="mb-2.5 text-xs dark:text-bodydark1 ">Andri Thomas</p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
              <p className="text-[15px] dark:text-bodydark1">
                Hi! Hello... How are you?
              </p>
            </div>
            <p className="text-[10px] dark:text-bodydark1">1.55pm</p>
          </div>

          <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary text-white px-5 py-3">
              <p className="text-[15px]">
                Hi! Hello... I am fine. How are you?
              </p>
            </div>
            <p className="text-[10px] dark:text-bodydark1">1.55pm</p>
          </div>
          <div className="max-w-125">
            <p className="mb-2.5 text-xs dark:text-bodydark1 ">Andri Thomas</p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
              <p className="text-[15px] dark:text-bodydark1">
                Hi! Hello... How are you?
              </p>
            </div>
            <p className="text-[10px] dark:text-bodydark1">1.55pm</p>
          </div>

          <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary text-white px-5 py-3">
              <p className="text-[15px]">
                Hi! Hello... I am fine. How are you?
              </p>
            </div>
            <p className="text-[10px] dark:text-bodydark1">1.55pm</p>
          </div>
          <div className="max-w-125">
            <p className="mb-2.5 text-xs dark:text-bodydark1 ">Andri Thomas</p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
              <p className="text-[15px] dark:text-bodydark1">
                Hi! Hello... How are you?
              </p>
            </div>
            <p className="text-[10px] dark:text-bodydark1">1.55pm</p>
          </div>

          <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary text-white px-5 py-3">
              <p className="text-[15px]">
                Hi! Hello... I am fine. How are you?
              </p>
            </div>
            <p className="text-[10px] dark:text-bodydark1">1.55pm</p>
          </div>

          <TypingIndicator />
        </div>

        {/* Input */}
        <div className="sticky bottom-0 border-t border-stroke dark:border-strokedark bg-white px-6 py-3 dark:bg-boxdark">
          <form className="flex items-center justify-between space-x-4.5">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Type your msg..."
                className="h-13 w-full rounded-md border border-stroke  bg-gray pl-5 pr-19 text-black placeholder-body outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2 dark:text-white"
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 items-center justify-end space-x-4">
                <button
                  onClick={handleAttachmentClick}
                  className="hover:text-primary dark:text-bodydark1"
                >
                  <Attachment />
                </button>
                <button className="hover:text-primary dark:text-bodydark1">
                  <EmojiPicker />
                </button>
                <button
                  onClick={handleVoiceClick}
                  className="hover:text-primary dark:text-bodydark1"
                >
                  <Microphone size={24} />
                </button>
                <button
                  onClick={handleGifOpen}
                  className="hover:text-primary dark:text-bodydark1"
                >
                  <Gif size={24} />
                </button>
              </div>
            </div>
            <button className="flex items-center justify-center h-13 max-w-13 w-full rounded-md bg-primary text-white hover:bg-opacity-90">
              <PaperPlaneTilt size={24} weight="bold" />
            </button>
          </form>

          {gifOpen && <Giphy />}
        </div>
      </div>

      {userInfoOpen && (
        <div className="w-1/4">
          <UserInfo handleToggleUserInfo={handleToggleUserInfo} />
        </div>
      )}
    </>
  );
};

export default Inbox;

import React from "react";
import { ChatList, ChatSidebar, MessageInbox } from "../section/chat";
import GifModal from "../components/GifModal";
import VoiceRecorder from "../components/VoiceRecorder";
import MediaPicker from "../components/MediaPicker";
import DocumentPicker from "../components/DocumentPicker";

export default function Messages() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex flex-row h-full shadow-6 border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
        <ChatSidebar />
        <ChatList />
        <MessageInbox />
      </div>

      <GifModal />
      <VoiceRecorder />
      <MediaPicker />
      <DocumentPicker />
    </div>
  );
}

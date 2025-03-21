import {
  Chat,
  Clock,
  DotsThreeVertical,
  VideoCamera,
  X,
} from "@phosphor-icons/react";

const UserInfo = (props) => {
  const { handleToggleUserInfo } = props;
  return (
    <div className="border-l flex flex-col h-full border-stroke dark:border-strokedark">
      <div className="sticky border-b border-stroke dark:border-strokedark flex flex-row items-center justify-between w-full px-6 py-7.5">
        <div className="text-black dark:text-white font-semibold text-lg">
          Profile
        </div>
        <button onClick={handleToggleUserInfo}>
          <X size={24} />
        </button>
      </div>

      <div className="mx-auto my-8">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
          alt="profile"
          className="w-44 h-auto rounded-lg object-cover object-center"
        />
      </div>

      <div className="px-6 space-y-1">
        <div className="text-black dark:text-white text-xl font-medium">
          Kiran Kosanam
        </div>

        <span className="text-body text-sm">Software Developer</span>
      </div>

      <div className="px-6 my-6">
        <div className="flex flex-row items-center space-x-2">
          <Clock size={20} />
          <div className="text-sm">6:50AM Local time</div>
        </div>
      </div>

      <div className="px-6 flex flex-row space-x-2">
        <button className="w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center">
          <Chat size={20} className="mr-3" />
          Message
        </button>

        <button className="w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center">
          <VideoCamera size={20} className="mr-3" />
          Call
        </button>

        <button className="w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center">
          <DotsThreeVertical size={20} />
        </button>
      </div>
    </div>
  );
};

export default UserInfo;

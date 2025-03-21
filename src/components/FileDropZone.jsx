import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Dropzone from "dropzone";
import { UploadSimple } from "@phosphor-icons/react";

const FileDropZone = ({
  acceptedFiles = "image/*,video/*",
  maxFileSize = 16 * 1024 * 1024,
  url = "/file/post",
}) => {
  const dropzoneRef = useRef(null);

  const formRef = useRef(null);

  useEffect(() => {
    Dropzone.autoDiscover = false;

    if (!dropzoneRef.current && formRef.current) {
      dropzoneRef.current = new Dropzone(formRef.current, {
        url,
        acceptedFiles,
        maxFileSize: maxFileSize / (1024 * 1024),
      });
    }
    return () => {
      if (dropzoneRef.current) {
        dropzoneRef.current.destroy();
        dropzoneRef.current = null;
      }
    };
  }, []);

  return (
    <div className="rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-6.5 ">
        <form
          action={url}
          ref={formRef}
          id="upload"
          className="dropzone rounded-md !border-dashed !border-bodydark1 bg-gray hover:!border-primary dark:!border-strokedark dark:bg-graydark dark:hover:!border-primary "
        >
          <div className="dz-message">
            <div className="mb-2.5 flex flex-col items-center justify-center space-y-2">
              <div className="shadow-10 flex h-15 w-15 items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white">
                <UploadSimple size={24} weight="bold" />
              </div>
              <span className="font-medium text-black dark:text-white">
                Drop files here to upload
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileDropZone;

import React from "react";
import Microlink from "@microlink/react";
import { extractLinks } from "../../utils/extractLinks";
import { Check, Checks } from "@phosphor-icons/react";

const Text = ({
  incoming,
  author,
  timestamp, // "sent" or "delivered" or "read"
  read_receipt,
  content,
}) => {
  const { originalString, links } = extractLinks(content, incoming);
  return incoming ? (
    <div className="max-w-125">
      <p className="mb-2.5 text-xs dark:text-bodydark1 ">{author}</p>
      <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2 space-y-2">
        <p
          className="text-[15px] dark:text-bodydark1"
          dangerouslySetInnerHTML={{ __html: originalString }}
        ></p>
        {links.length > 0 && (
          <Microlink url={links[0]} style={{ width: "100%" }} />
        )}
      </div>
      <p className="text-[10px] dark:text-bodydark1">{timestamp}</p>
    </div>
  ) : (
    <div className="max-w-125 ml-auto">
      <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary text-white px-5 py-3 space-y-2">
        <p
          className="text-[15px]"
          dangerouslySetInnerHTML={{ __html: originalString }}
        ></p>
        {links.length > 0 && (
          <Microlink url={links[0]} style={{ width: "100%" }} />
        )}
      </div>

      <div className="flex flex-row items-center justify-end space-x-2">
        <div
          className={`${
            read_receipt === "delivered"
              ? "text-body dark:text-white"
              : "text-primary"
          }`}
        >
          {read_receipt === "sent" ? (
            <Check weight="bold" size={16} />
          ) : (
            <Checks weight="bold" size={18} />
          )}
        </div>
        <p className="text-[10px] dark:text-bodydark1">1.55pm</p>
      </div>
    </div>
  );
};

export default Text;

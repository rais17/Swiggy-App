import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const FAQS = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      className="w-full p-6 space-y-2 border-b-2 cursor-pointer"
      onClick={() => setIsVisible(!isVisible)}
    >
      <div className="flex justify-between">
        <h1 className="font-sans text-base font-medium">{title}</h1>
        <button>
          {isVisible ? (
            <MdOutlineKeyboardArrowDown style={{ fontSize: "25" }} />
          ) : (
            <MdOutlineKeyboardArrowUp style={{ fontSize: "25" }} />
          )}
        </button>
      </div>

      {isVisible && (
        <p className="font-sans text-sm font-normal text-[#64748b]">
          {description}
        </p>
      )}
    </div>
  );
};

export default FAQS;

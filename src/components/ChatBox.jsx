import React, { useState } from "react";
import { ReactComponent as AttatchmentIcon } from "../assets/attachment.svg";
import { ReactComponent as SendIcon } from "../assets/send.svg";
import classNames from "classnames";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { List } from "./list/List";
import { cardsArray } from "../constants/dummy-data";
import { motion } from "framer-motion";
import VideoList from "./videoList/VideoList";

export const ChatBox = ({ isFocused, setIsFocused }) => {
  const [text, setText] = useState("");

  return (
    <div
      className={classNames(
        "p-6 fixed bottom-10 left-60 right-60 bg-background rounded-xl shadow-[0px_0px_100px_5px_#0000001A] border border-[#9747FF] flex flex-col justify-end z-20",
        {
          "bg-[#EEE8F5]": isFocused,
        }
      )}
    >
      {isFocused && (
        <IconButton
          sx={{
            position: "absolute",
            right: "20px",
            top: "20px",
            zIndex: 10,
          }}
          onClick={() => setIsFocused(false)}
        >
          <Close />
        </IconButton>
      )}

      <div
        className={classNames(
          "transition-all h-0 w-full duration-500 flex-grow overflow-auto",
          {
            "h-[80vh]": isFocused,
          }
        )}
      >
        {/* <List cards={cardsArray} /> */}
        {isFocused && <VideoList />}
      </div>

      <div className="bg-white p-2 w-full rounded-[30px] flex items-center border border-border">
        <div className="p-1 bg-accent rounded-full size-11">
          <AttatchmentIcon />
        </div>
        <input
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Start typing here..."
          className="w-full h-full ml-4 outline-none"
        />
        <button>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <SendIcon />
          </motion.div>
        </button>
      </div>
    </div>
  );
};

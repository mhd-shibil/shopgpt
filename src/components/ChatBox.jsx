import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as AttatchmentIcon } from "../assets/attachment.svg";
import { ReactComponent as SendIcon } from "../assets/send.svg";
import classNames from "classnames";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { List } from "./list/List";
import VideoList from "./videoList/VideoList";
import { respData } from "../constants/responseData";

export const ChatBox = ({ isFocused, setIsFocused }) => {
  const [text, setText] = useState("");
  const [messageList, setMessageList] = useState([]);
  const messageEndRef = useRef(null);

  const getData = async (text) => {
    const url = `http://192.168.5.38:3000/api/v1/shopGPT?input=${encodeURIComponent(
      text
    )}`;
    try {
      const resp = { ok: true, respData };

      if (resp.ok) {
        const data = respData;
        setMessageList((curr) => [
          ...curr,
          { request: text, response: data, id: uuidv4() },
        ]);
      } else {
        console.error(`Error: ${resp.status} ${resp.statusText}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const onSubmit = (e) => {
    if (e.key === "Enter") {
      getData(e.target.value);
      setText("");
      setIsFocused(true);
    }
  };

  const handleTry = () => {
    console.log("Trying on...");
  };

  useEffect(() => {
    if (messageList.length > 1) {
      // Only scroll if there's more than one message
      messageEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messageList]);

  return (
    <div
      className={classNames(
        "p-6 fixed bottom-10 left-60 right-60 bg-background rounded-xl shadow-[0px_0px_100px_5px_#0000001A] border border-[#9747FF] flex flex-col justify-end z-20",
        {
          "bg-[#EEE8F5] pt-8": isFocused,
        }
      )}
    >
      {isFocused && (
        <IconButton
          sx={{
            position: "absolute",
            right: "5px",
            top: "5px",
            zIndex: 10,
          }}
          onClick={() => setIsFocused(false)}
        >
          <Close />
        </IconButton>
      )}

      <div
        className={classNames(
          "transition-all h-0 w-full duration-500 flex-grow overflow-auto flex flex-col gap-4",
          {
            "h-[80vh]": isFocused,
          }
        )}
      >
        {messageList?.map((message) => (
          <div key={message.id}>
            {message?.request && (
              <div className="bg-[#DCD3E9] py-1 px-[20px] rounded-[30px] flex items-center border border-border mb-2 w-fit ml-auto text-[14px] font-bold">
                {message?.request}
              </div>
            )}
            {message?.response?.text && (
              <div className="bg-yellow-200 p-2 rounded-[30px] flex items-center border border-border w-fit">
                {message?.response?.text}
              </div>
            )}
            {message?.response?.videos && <VideoList />}
            {message?.response?.products && (
              <List cards={message?.response?.products} handleTry={handleTry} />
            )}
          </div>
        ))}
        {/* This is the div to scroll to */}
        <div ref={messageEndRef} />
      </div>

      <div className="bg-white p-2 w-full rounded-[30px] flex items-center border border-border">
        <div className="p-1 bg-accent rounded-full size-11">
          <AttatchmentIcon />
        </div>
        <input
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onSubmit}
          value={text}
          placeholder="Start typing here..."
          className="w-full h-full ml-4 outline-none"
        />
        <button
          onClick={onSubmit}
          className="hover:scale-110 transition-transform"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

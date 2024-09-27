import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as AttatchmentIcon } from "../assets/attachment.svg";
import { ReactComponent as SendIcon } from "../assets/send.svg";
import classNames from "classnames";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { List } from "./list/List";
import VideoList from "./videoList/VideoList";
import VoiceRecorder from "../components/voice/voiceRecorder";
import Loader from "../components/loader/Loader";
import FollowUp from "./follow-up/FollowUp";
// import { respData } from "../constants/responseData";

export const ChatBox = ({ isFocused, setIsFocused }) => {
  const [text, setText] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastMessage, setLastMessage] = useState("");

  const getData = async (text) => {
    setIsLoading(true);
    const url = `http://192.168.5.38:3000/api/v1/shopGPT?input=${encodeURIComponent(
      text
    )}`;
    try {
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const resp = { ok: true, respData };

      if (resp.ok) {
        const data = await resp.json();
        // const data = respData;
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
    setIsLoading(false);
  };

  const onSubmit = (value) => {
    getData(value);
    setText("");
    setLastMessage(value);
    setIsFocused(true);
  };

  const handleTry = () => {
    console.log("Trying on...");
  };

  const handleFollowUpClick = (value) => {
    onSubmit(value);
  };

  useEffect(() => {
    if (messageList.length > 1) {
      document
        .getElementById(messageList[messageList.length - 1].id)
        .scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
    }
  }, [messageList]);

  useEffect(() => {
    if (isLoading) {
      document.getElementById("loader").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [isLoading]);

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
          "transition-all h-0 w-full duration-500 flex-grow overflow-auto flex flex-col gap-4 px-4",
          {
            "h-[75vh] mt-8": isFocused,
          }
        )}
      >
        {messageList?.map((message) => (
          <div key={message.id}>
            {message?.request && (
              <div className="bg-[#F5F5F5] py-1 px-6 rounded-[30px] flex items-center border border-border mb-2 w-fit ml-auto font-bold text-base">
                {message?.request}
              </div>
            )}
            <div id={message.id}>
              {message?.response?.text && (
                <div className="bg-yellow-200 p-2 rounded-[30px] flex items-center border border-border w-fit">
                  {message?.response?.text}
                </div>
              )}
              {message?.response?.videos && <VideoList />}
              {message?.response?.products && (
                <List
                  cards={message?.response?.products}
                  handleTry={handleTry}
                />
              )}
            </div>
          </div>
        ))}
        {messageList.length >= 1 && !isLoading && (
          <FollowUp onClick={handleFollowUpClick} />
        )}
        {isLoading && (
          <div id="loader">
            {lastMessage && (
              <div className="bg-[#F5F5F5] py-1 px-6 rounded-[30px] flex items-center border border-border mb-2 w-fit ml-auto font-bold text-base">
                {lastMessage}
              </div>
            )}
            <Loader />
          </div>
        )}
      </div>

      <div className="bg-white p-2 w-full rounded-[30px] flex items-center border border-border">
        <div className="p-1 bg-accent rounded-full size-11">
          <AttatchmentIcon />
        </div>
        <input
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit(e.target.value);
          }}
          value={text}
          placeholder="Start typing here..."
          className="w-full h-full ml-4 outline-none"
        />
        <VoiceRecorder
          setText={(text) => {
            setText(text);
            setTimeout(() => {
              onSubmit(text);
            }, 500);
          }}
        />
        <button
          onClick={() => onSubmit(text)}
          className="hover:scale-110 transition-transform"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

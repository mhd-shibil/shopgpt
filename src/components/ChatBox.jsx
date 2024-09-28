import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as AttatchmentIcon } from "../assets/attachment.svg";
import { ReactComponent as SendIcon } from "../assets/send.svg";
import { ReactComponent as ResponseIcon } from "../assets/response.svg";
import classNames from "classnames";
import { IconButton, Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import { List } from "./list/List";
import VideoList from "./videoList/VideoList";
import VoiceRecorder from "../components/voice/voiceRecorder";
import Loader from "../components/loader/Loader";
import FollowUp from "./follow-up/FollowUp";
import { iphoneVideoData } from "../constants/videoData";
import { TryOn } from "./TryOn";
// import { respData } from "../constants/responseData";

export const ChatBox = ({ isFocused, setIsFocused }) => {
  const [text, setText] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastMessage, setLastMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [tryOnDress, setTryOnDress] = useState("");

  const getData = async (text) => {
    let currentUserId = userId;
    if (!currentUserId) {
      currentUserId = uuidv4();
      setUserId(currentUserId);
    }
    if (text.includes("review")) {
      let videoList = [];
      if (text.includes("iphone")) {
        videoList = iphoneVideoData;
      }
      setMessageList((curr) => [
        ...curr,
        { request: text, response: { videos: videoList }, id: uuidv4() },
      ]);
      return;
    }

    setIsLoading(true);
    const url = `http://192.168.5.38:3000/api/v1/shopGPT?input=${encodeURIComponent(
      text
    )}&userId=${currentUserId}`;
    try {
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const resp = { ok: true, respData };
      setIsLoading(false);

      if (resp.ok) {
        const data = await resp.json();
        // const data = respData;
        if (!data?.text && !data?.products?.length && !data?.videos?.length) {
          setMessageList((curr) => [
            ...curr,
            {
              request: text,
              response: {
                text: "Sorry, I am not able to fetch the data right now. Please try again later.",
              },
              id: uuidv4(),
            },
          ]);
        } else {
          setMessageList((curr) => [
            ...curr,
            {
              request: text,
              response: data,
              id: uuidv4(),
            },
          ]);
        }
      } else {
        setMessageList((curr) => [
          ...curr,
          {
            request: text,
            response: {
              text: "Sorry, I am not able to fetch the data right now. Please try again later.",
            },
            id: uuidv4(),
          },
        ]);
        console.error(`Error: ${resp.status} ${resp.statusText}`);
      }
    } catch (error) {
      setIsLoading(false);
      setMessageList((curr) => [
        ...curr,
        {
          request: text,
          response: {
            text: "Sorry, I am not able to fetch the data right now. Please try again later.",
          },
          id: uuidv4(),
        },
      ]);
      console.error("Fetch error:", error);
    }
  };

  const onSubmit = (value) => {
    getData(value);
    setText("");
    setLastMessage(value);
    setIsFocused(true);
  };

  const handleTry = (url) => {
    setTryOnDress(url)
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
    <>
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
            onClick={() => {
              setUserId("");
              setMessageList([])
              setIsFocused(false);
            }}
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
          <div className="flex flex-col justify-between h-full ">
            <div>
              {messageList?.map((message, index) => (
                <div key={message.id} className="mb-4">
                  {message?.request && (
                    <div className="bg-[#F5F5F5] py-1 px-6 rounded-[30px] flex items-center border border-border mb-2 w-fit ml-auto font-bold text-base">
                      {message?.request}
                    </div>
                  )}
                  <div className="flex" id={message.id}>
                    <div className="bg-gradient-to-br from-[#C167F6] to-[#5548C7] size-11 flex items-center justify-center rounded-md mr-10">
                      <ResponseIcon />
                    </div>
                    <div>
                      {message?.response?.text && (
                        <div className="p-2 rounded-[30px] flex items-center w-fit  font-bold">
                          {message?.response?.text}
                        </div>
                      )}
                      {message?.response?.videos && (
                        <VideoList
                          videos={message?.response?.videos}
                          autoPlay={index + 1 === messageList.length}
                        />
                      )}
                      {message?.response?.products && (
                        <List
                          cards={message?.response?.products}
                          handleTry={handleTry}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {messageList.length >= 1 && !isLoading && (
              <FollowUp
                onClick={handleFollowUpClick}
                questions={
                  messageList[messageList.length - 1].response?.followUpQns
                }
              />
            )}
          </div>

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
          <div className="p-1 bg-[#5548C7] rounded-full size-11">
            <AttatchmentIcon />
          </div>
          <input
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSubmit(e.target.value);
            }}
            value={text}
            placeholder="Start typing here..."
            className="w-full h-full ml-4 outline-none text-lg font-medium"
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
      <Modal
        open={!!tryOnDress}
        onClose={() => setTryOnDress("")}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
        }}
      >
        <div style={{ width: "80%", height: "70%", position: "relative" }}>
          <IconButton
            onClick={() => setTryOnDress("")}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 1)",
              },
            }}
          >
            <Close />
          </IconButton>
          <TryOn tryOnDress={tryOnDress} />
        </div>
      </Modal>
    </>
  );
};

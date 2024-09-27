import React, { useState } from "react";

import { ReactComponent as MicrophoneIcon } from "../../assets/microphone.svg";

// Check for SpeechRecognition support in different browsers
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const VoiceRecorder = ({ setText }) => {
  const [isRecording, setIsRecording] = useState(false);
  //   const [transcript, setTranscript] = useState('');

  const handleSpeechRecognition = () => {
    if (!SpeechRecognition) {
      alert("Your browser doesn't support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false; // Set to true if you want continuous listening
    recognition.interimResults = false; // If you want interim results during speech recognition
    recognition.lang = "en-US"; // Set your desired language

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.onresult = (event) => {
      const lastResult = event.results.length - 1;
      const result = event.results[lastResult][0].transcript;
      setText(result);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsRecording(false);
    };

    // Start the recognition
    recognition.start();
  };

  return (
    <div className="size-8 flex items-center mr-2">
      {/* Icon to start/stop recording */}
      <button
        onClick={handleSpeechRecognition}
        className={`size-8 rounded-full ${isRecording ? "" : ""}`}
      >
        {isRecording && (
          <div className="flex items-center space-x-1">
            <div className="dot-loader bg-[#c167f6] w-3 h-3 rounded-full animate-bounce"></div>
            <div className="dot-loader bg-[#c167f6] w-3 h-3 rounded-full animate-bounce delay-100"></div>
            <div className="dot-loader bg-[#c167f6] w-3 h-3 rounded-full animate-bounce delay-200"></div>
          </div>
        )}
        {!isRecording && <MicrophoneIcon className="size-7" />}
      </button>
    </div>
  );
};

export default VoiceRecorder;

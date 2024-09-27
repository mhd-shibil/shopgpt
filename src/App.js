import { useState } from "react";

import TopBar from "./components/top-bar/TopBar";
import TileList from "./components/tile/TileList";
import { ChatBox } from "./components/ChatBox";

import "./App.css";

function App() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="App">
      <TopBar />
      <div
        className={`h-[calc(100vh-200px)] mt-[200px] overflow-auto px-[32px] no-scrollbar pb-16 ${
          isFocused ? "opacity-50 blur-sm" : ""
        }`}
      >
        <TileList />
      </div>
      <ChatBox isFocused={isFocused} setIsFocused={setIsFocused} />
    </div>
  );
}

export default App;

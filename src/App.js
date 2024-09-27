import TopBar from "./components/top-bar/TopBar";
import TileList from "./components/tile/TileList";

import "./App.css";
import './App.css';
import { ChatBox } from './components/ChatBox';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="h-[calc(100vh-200px)] mt-[200px] overflow-auto px-[32px] no-scrollbar pb-16">
        <TileList />
      </div>
        <ChatBox/>
    </div>
  );
}

export default App;

import TopBar from "./components/top-bar/TopBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="h-[calc(100vh-200px)] mt-[201px] overflow-hidden px-[32px]">
        main layout
      </div>
    </div>
  );
}

export default App;

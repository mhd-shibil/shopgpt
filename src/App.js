import { List } from "./components/list/List";
import Loader from "./components/loader/Loader";
import TopBar from "./components/top-bar/TopBar";
import { cardsArray } from "./constants/dummy-data";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="h-[calc(100vh-200px)] mt-[201px]">
        <Loader />
        <List cards={cardsArray} />
      </div>
    </div>
  );
}

export default App;

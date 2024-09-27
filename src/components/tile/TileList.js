import { cardsArray } from "../../constants/dummy-data";
import Tile from "./Tile";

const TileList = () => {
  return (
    <div className="flex gap-2">
      <div className="flex gap-4 flex-col w-2/5 h-full">
        <div className="flex gap-2">
          <Tile key={cardsArray[0].key} data={cardsArray[0]} />
          <Tile key={cardsArray[1].key} data={cardsArray[1]} />
        </div>
        <div className="flex gap-2">
          <Tile key={cardsArray[2].key} data={cardsArray[2]} />
          <Tile key={cardsArray[3].key} data={cardsArray[3]} />
        </div>
      </div>
      <div className="flex flex-col w-2/5">
        <Tile key={cardsArray[4].key} data={cardsArray[4]} />
      </div>
      <div className="flex flex-col gap-2 w-1/5">
        <Tile key={cardsArray[0].key} data={cardsArray[0]} />
        <Tile key={cardsArray[1].key} data={cardsArray[1]} />
      </div>
    </div>
  );
};

export default TileList;

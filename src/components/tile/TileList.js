import { cardsArray } from "../../constants/dummy-data";
import Tile from "./Tile";

const TileList = () => {
  const resultArray = [];
  for (let i = 0; i < cardsArray.length; i += 7) {
    const tempArray = cardsArray.slice(i, i + 7);
    if (tempArray.length === 7) {
      resultArray.push(tempArray);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {resultArray.map((cardsArray, index) => (
        <div
          className={`flex gap-2 ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
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
      ))}
    </div>
  );
};

export default TileList;

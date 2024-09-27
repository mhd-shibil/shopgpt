import { useState } from "react";
import { cardsArray } from "../../constants/dummy-data";
import Tile from "./Tile";

const TileList = () => {
  const [isAnyTileHovered, setIsAnyTileHovered] = useState(false); // State to track if any tile is hovered

  const resultArray = [];
  for (let i = 0; i < cardsArray.length; i += 7) {
    const tempArray = cardsArray.slice(i, i + 7);
    if (tempArray.length === 7) {
      resultArray.push(tempArray);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {resultArray.map((item, index) => (
        <div
          key={index}
          className={`flex gap-2 ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="flex gap-2 flex-col w-2/5 h-12">
            <div className="flex gap-2 min-h-80 max-h-80">
              <Tile
                key={item[0].key}
                data={item[0]}
                isAnyTileHovered={isAnyTileHovered}
                setIsAnyTileHovered={setIsAnyTileHovered}
              />
              <Tile
                key={item[1].key}
                data={item[1]}
                isAnyTileHovered={isAnyTileHovered}
                setIsAnyTileHovered={setIsAnyTileHovered}
              />
            </div>
            <div className="flex gap-2 min-h-80 max-h-80">
              <Tile
                key={item[2].key}
                data={item[2]}
                isAnyTileHovered={isAnyTileHovered}
                setIsAnyTileHovered={setIsAnyTileHovered}
              />
              <Tile
                key={item[3].key}
                data={item[3]}
                isAnyTileHovered={isAnyTileHovered}
                setIsAnyTileHovered={setIsAnyTileHovered}
              />
            </div>
          </div>
          <div className="flex flex-col w-2/5 min-h-[648px] max-h-[648px]">
            <Tile
              key={item[4].key}
              data={item[4]}
              isAnyTileHovered={isAnyTileHovered}
              setIsAnyTileHovered={setIsAnyTileHovered}
            />
          </div>
          <div className="flex flex-col gap-2 w-1/5 min-h-[648px] max-h-[648px]">
            <Tile
              key={item[5].key}
              data={item[5]}
              isAnyTileHovered={isAnyTileHovered}
              setIsAnyTileHovered={setIsAnyTileHovered}
            />
            <Tile
              key={item[6].key}
              data={item[6]}
              isAnyTileHovered={isAnyTileHovered}
              setIsAnyTileHovered={setIsAnyTileHovered}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TileList;

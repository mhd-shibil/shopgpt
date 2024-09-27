import { ReactComponent as DefaultIcon } from "../../assets/shopIcons/common.svg";
import { ReactComponent as AmazonIcon } from "../../assets/shopIcons/amazon.svg";
import { ReactComponent as CromaIcon } from "../../assets/shopIcons/croma.svg";

const ShopIcon = ({ shopLink, shopName, style }) => {
  const getShopIcon = () => {
    if (shopName === "Amazon.in") return <AmazonIcon />;
    if (shopName === "Croma") return <CromaIcon className="" />;
    return <DefaultIcon />;
  };

  const getShopName = () => {
    if (shopName === "Amazon.in") return "Amazon";
    if (shopName === "Croma") return "Croma";
    return "";
  };

  const getStyle = () => {
    if (shopName === "Croma") return "w-20 h-8";
    return "size-8";
  };

  return (
    <div className="mb-1 ml-2 flex gap-2 items-center">
      <a
        href={shopLink}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
        className={getStyle()}
      >
        {getShopIcon()}
      </a>
      <div className="text-sm font-semibold">{getShopName()}</div>
    </div>
  );
};

export default ShopIcon;

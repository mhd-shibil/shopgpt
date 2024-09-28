// import { ReactComponent as DefaultIcon } from "../../assets/shopIcons/common.svg";
import { ReactComponent as AmazonIcon } from "../../assets/shopIcons/amazon.svg";
import { ReactComponent as CromaIcon } from "../../assets/shopIcons/croma.svg";
import { ReactComponent as FlipkartIcon } from "../../assets/shopIcons/flipkart.svg";
import { ReactComponent as AppleIcon } from "../../assets/shopIcons/apple.svg";

const ShopIcon = ({ shopLink, shopName, style }) => {
  const getStyle = () => {
    if (shopName === "Croma") return "w-20 h-8";
    return "size-8";
  };

  const getShopIcon = () => {
    if (shopName === "Amazon.in") return <AmazonIcon className={getStyle()} />;
    if (shopName === "Croma") return <CromaIcon className={getStyle()} />;
    if (shopName === "Flipkart") return <FlipkartIcon className={getStyle()} />;
    if (shopName === "Apple") return <AppleIcon className={getStyle()} />;
    return null;
  };

  const getShopName = () => {
    if (shopName === "Amazon.in") return "Amazon";
    return shopName;
  };

  return (
    <div className="mb-1 ml-2 flex gap-2 items-center">
      <div className={getStyle()}>{getShopIcon()}</div>
      <div className="text-sm font-semibold">{getShopName()}</div>
    </div>
  );
};

export default ShopIcon;

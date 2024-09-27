const TopBar = () => {
  return (
    <div className="bg-white fixed top-0 h-[200px] flex justify-center items-center w-full flex-col z-10">
      <div className="text-[60px] font-bold bg-gradient-to-bl from-[#C167F6] to-[#5548C7] bg-clip-text text-transparent">
        Shop<span className="text-black">Agent</span>
      </div>
      <div className="text-[16px] font-bold text-black">
        Shopping Reimagined with AI
      </div>
    </div>
  );
};

export default TopBar;

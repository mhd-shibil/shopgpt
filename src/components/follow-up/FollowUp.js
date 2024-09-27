const FollowUp = ({ questions, onClick }) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-6">
      {questions?.map((followUp, index) => (
        <div
          role="presentation"
          onClick={() => onClick(followUp)}
          key={index}
          className="cursor-pointer bg-[#DCD3E9] py-2 px-[30px] rounded-[30px] flex items-center border-[2px] border-black mb-2 w-fit text-[14px] font-bold"
        >
          {followUp}
        </div>
      ))}
    </div>
  );
};

export default FollowUp;

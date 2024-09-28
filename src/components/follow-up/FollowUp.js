import { ReactComponent as ArrowIcon } from "../../assets/send.svg";

const FollowUp = ({ questions, onClick }) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-6 mb-4">
      {questions?.map((followUp, index) => (
        <div
          role="presentation"
          onClick={() => onClick(followUp)}
          key={index}
          className="cursor-pointer bg-[#f0f0f0] py-1 px-[30px] rounded-[30px] flex items-center border-[2px] border-[#5548C7] mb-2 w-fit text-sm font-semibold gap-4"
        >
          {followUp}
          {/* <ArrowIcon className="rotate-45 min-w-6 max-w-6" /> */}
        </div>
      ))}
    </div>
  );
};

export default FollowUp;

import { dummyFollowUps } from "../../constants/dummy-data";

const FollowUp = ({ onClick }) => {
  return (
    <div className="flex justify-center items-center gap-3">
      {dummyFollowUps.map((followUp, index) => (
        <div
          role="presentation"
          onClick={() => onClick(followUp)}
          key={index}
          className="cursor-pointer bg-[#DCD3E9] py-1 px-[20px] rounded-[30px] flex items-center border border-border mb-2 w-fit text-[14px] font-bold"
        >
          {followUp}
        </div>
      ))}
    </div>
  );
};

export default FollowUp;

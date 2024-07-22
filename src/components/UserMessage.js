const UserMessage = ({ messageText }) => {
  return (
    <div className="relative text-left float-right pl-[48px] w-[calc(100%-48px)] pb-[16px]">
      <div className="inline-block mr-[-45px] relative p-[16px_20px] rounded-[10px] w-auto max-w-[100%] text-white bg-[#0071b2] float-right">
        <div className="text-[14px] leading-[1.4] m-0 min-h-[10px]">
          {messageText}
        </div>
      </div>
    </div>
  );
};

export default UserMessage;

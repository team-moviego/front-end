import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="mt-9 flex items-center justify-between">
        <p className="text-base">MovieGo</p>
        <div className="flex items-center gap-2">
          <BsFillTicketPerforatedFill size={24} />
          <IoMdMenu size={24} />
        </div>
      </div>
    </div>
  );
}

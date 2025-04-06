import { FaTrash } from "react-icons/fa";
import Header from "../(components)/Header";

export default function TicketPage() {
  return (
    <>
      <Header />

      <div className="mx-auto max-w-6xl px-5">
        <p className="mt-8 text-center">예약현황</p>
        <div className="mt-25 flex gap-1 text-sm">
          <p>예매번호</p>
          <p>0000-0000-0000</p>
        </div>

        <div className="mt-3 h-50 w-80 bg-gray-300"></div>
        <div className="pt-4 pl-5">
          <p className="mb-3 font-semibold">타이틀</p>

          <div className="flex gap-12">
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <p>관람일시</p>
              <p>상영관</p>
              <p>관람인원</p>
              <p>좌석</p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <p>2025.04.08(화) 21:15</p>
              <p>1관</p>
              <p>일반 1</p>
              <p>B 11</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex items-center gap-1 rounded-sm border p-2">
            <FaTrash size={12} />
            <p className="text-xs">예매취소</p>
          </div>
        </div>
      </div>
    </>
  );
}

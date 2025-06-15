import Header from "@/app/(components)/Header";

export default function TicketCompletePage() {
  return (
    <>
      <Header />
      <div className="mx-auto mt-10 max-w-6xl px-5">
        <section className="mt-12">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl">예매가 완료되었습니다</h2>
              <p className="text-sm text-gray-500">
                예매 내역은 마이페이지에서 확인할 수 있습니다
              </p>
            </div>
          </div>
        </section>

        <section className="mt-25">
          <p className="mb-6 text-xl font-bold">예매정보</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-gray-500">예매번호</div>
            <div>1234567890</div>
            <div className="text-gray-500">예매자</div>
            <div>홍길동</div>
            <div className="text-gray-500">예매일</div>
            <div>2025-01-01</div>
            <div className="text-gray-500">영화</div>
            <div>영화제목</div>
            <div className="text-gray-500">관람일시</div>
            <div>2025-01-01 12:00</div>
            <div className="text-gray-500">상영관</div>
            <div>1관</div>
            <div className="text-gray-500">좌석</div>
            <div>A1, A2</div>
          </div>
        </section>
      </div>
    </>
  );
}

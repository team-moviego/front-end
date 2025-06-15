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
          <p className="text-xl font-bold">예매정보</p>
          <div className="mt-5 flex justify-between">
            <p className="text-gray-500">예매번호</p>
            <p>1234567890</p>
          </div>
          <div className="mt-5 flex justify-between">
            <p className="text-gray-500">예매자</p>
            <p>홍길동</p>
          </div>
          <div className="mt-5 flex justify-between">
            <p className="text-gray-500">예매일</p>
            <p>2025-01-01</p>
          </div>
          <div className="mt-5 flex justify-between">
            <p className="text-gray-500">영화</p>
            <p>영화제목</p>
          </div>
          <div className="mt-5 flex justify-between">
            <p className="text-gray-500">관람일시</p>
            <p>2025-01-01 12:00</p>
          </div>
          <div className="mt-5 flex justify-between">
            <p className="text-gray-500">영화명</p>
            <p>영화제목</p>
          </div>
          <div className="mt-5 flex justify-between">
            <p className="text-gray-500">상영관</p>
            <p>상영관</p>
          </div>
          <div className="mt-5 flex justify-between">
            <p className="text-gray-500">좌석</p>
            <p>좌석</p>
          </div>
        </section>
      </div>
    </>
  );
}

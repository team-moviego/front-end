"use client";

import Button from "@/app/(components)/Button";
import Footer from "@/app/(components)/Footer";
import Header from "@/app/(components)/Header";
import { useRouter } from "next/navigation";

export default function TicketCompletePage() {
  const router = useRouter();
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
          <p className="mb-3 text-xl font-bold">예매정보</p>
          <div className="grid grid-cols-2">
            <div className="border-t-2 border-b border-t-black py-3 text-gray-500">
              예매번호
            </div>
            <div className="border-t-2 border-b border-t-black py-3">
              1234567890
            </div>
            <div className="border-b py-3 text-gray-500">예매자</div>
            <div className="border-b py-3">홍길동</div>
            <div className="border-b py-3 text-gray-500">예매일</div>
            <div className="border-b py-3">2025-01-01</div>
            <div className="border-b py-3 text-gray-500">영화</div>
            <div className="border-b py-3">영화제목</div>
            <div className="border-b py-3 text-gray-500">관람일시</div>
            <div className="border-b py-3">2025-01-01 12:00</div>
            <div className="border-b py-3 text-gray-500">상영관</div>
            <div className="border-b py-3">1관</div>
            <div className="border-b py-3 text-gray-500">좌석</div>
            <div className="border-b py-3">A1, A2</div>
          </div>
        </section>

        <section className="mt-25">
          <p className="mb-3 text-xl font-bold">결제정보</p>
          <div className="grid grid-cols-2">
            <div className="border-t-2 border-b border-t-black py-3 text-gray-500">
              결제수단
            </div>
            <div className="border-t-2 border-b border-t-black py-3">
              현재 상태
            </div>
            <div className="border-b py-3 text-gray-500">현재 상태</div>
            <div className="border-b py-3">예매완료</div>
            <div className="border-b py-3 text-gray-500">결제일시</div>
            <div className="border-b py-3">2025-01-01</div>
            <div className="border-b py-3 text-gray-500">결제금액</div>
            <div className="border-b py-3">100,000원</div>
          </div>
        </section>

        <Button className="mt-10" onClick={() => router.push("/")}>
          홈으로
        </Button>
      </div>
      <div className="mb-20"></div>
      <Footer />
    </>
  );
}

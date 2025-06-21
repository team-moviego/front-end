"use client";

import Footer from "../../(components)/Footer";
import Header from "../../(components)/Header";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useRouter } from "next/navigation";

export default function ReservePage() {
  const router = useRouter();
  const handleClick = (value: string) => {
    console.log(`click ${value}`);
  };
  return (
    <>
      <Header />
      <div className="mt-8 h-50 w-full bg-gray-300"></div>
      <div className="mt-8 flex flex-col gap-2 text-center">
        <p className="text-lg font-semibold">타이틀</p>
        <p className="text-sm">2025.3.21(금) 13:40~15:21</p>
        <p className="text-sm">1관</p>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-5">
        <div className="flex items-end gap-3">
          <p className="font-semibold">인원선택</p>
          <p className="text-xs text-gray-400">최대 8명까지 선택 가능</p>
        </div>

        <div className="mt-8 flex">
          <div className="flex basis-[80px] flex-col gap-2">
            <p>일반</p>
            <p>청소년</p>
            <p>경로</p>
            <p>우대</p>
          </div>

          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, i) => {
              return (
                <div className="flex gap-1" key={i}>
                  {Array.from({ length: 8 }).map((_, i) => {
                    return (
                      <p
                        className="flex h-[25px] w-[25px] items-center justify-center border border-black text-sm"
                        key={i}
                      >
                        {i + 1}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-15 flex h-8 w-full items-center justify-center bg-gray-300 text-xs">
          Screen
        </p>

        <div className="mt-5 mb-25 flex gap-2">
          <div className="flex flex-col items-center justify-center gap-2 text-xs">
            {Array.from({ length: 10 }).map((_, i) => {
              const char = String.fromCharCode(65 + i);
              return (
                <p
                  className="flex h-5 w-5 items-center justify-center"
                  key={i}
                  onClick={() => handleClick(char)}
                >
                  {char}
                </p>
              );
            })}
          </div>

          <section className="flex flex-col gap-2">
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <div className="flex gap-5" key={i}>
                  <div className="flex gap-1 text-xs">
                    {Array.from({ length: 2 }).map((_, i) => {
                      return (
                        <p
                          className="flex h-5 w-5 items-center justify-center border border-black"
                          key={i}
                        >
                          {i + 1}
                        </p>
                      );
                    })}
                  </div>

                  <div className="flex gap-1 text-xs">
                    {Array.from({ length: 6 }).map((_, i) => {
                      return (
                        <p
                          className="flex h-5 w-5 items-center justify-center border border-black"
                          key={i}
                        >
                          {i + 3}
                        </p>
                      );
                    })}
                  </div>

                  <div className="flex gap-1 text-xs">
                    {Array.from({ length: 2 }).map((_, i) => {
                      return (
                        <p
                          className="flex h-5 w-5 items-center justify-center border border-black"
                          key={i}
                        >
                          {i + 9}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </section>
        </div>

        <Drawer>
          <DrawerTrigger className="w-full">
            <div className="w-full cursor-pointer rounded-md border border-gray-300 p-3 text-center">
              예매하기
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>최종 결제확인</DrawerTitle>
              <DrawerDescription>
                예매하시려면 아래 버튼을 클릭해주세요.
              </DrawerDescription>
            </DrawerHeader>

            <div className="overflow-x-auto px-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">
                      구분
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      단가
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      매수
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      합계
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">일반</td>
                    <td className="border border-gray-300 p-2">15,000 원</td>
                    <td className="border border-gray-300 p-2">1매</td>
                    <td className="border border-gray-300 p-2">15,000 원</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">청소년</td>
                    <td className="border border-gray-300 p-2">12,000 원</td>
                    <td className="border border-gray-300 p-2">1매</td>
                    <td className="border border-gray-300 p-2">12,000 원</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border border-gray-300 p-2">총계</td>
                    <td className="border border-gray-300 p-2">27,000 원</td>
                    <td className="border border-gray-300 p-2">2매</td>
                    <td className="border border-gray-300 p-2">54,000 원</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <DrawerFooter>
              <div
                className="w-full cursor-pointer rounded-md border border-gray-300 p-3 text-center"
                onClick={() => router.push("/ticket/complete/1")}
              >
                54,000 원 결제하기
              </div>
              <DrawerClose>
                <div className="w-full cursor-pointer rounded-md border border-gray-300 p-3 text-center">
                  취소하기
                </div>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="mb-20"></div>
      <Footer />
    </>
  );
}

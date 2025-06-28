"use client";

import Header from "@/app/(components)/Header";
import { useRouter } from "next/navigation";

export default function ListPage() {
  const array = [
    "액션",
    "애니메이션",
    "스릴러",
    "범죄",
    "판타지",
    "공포",
    "로맨스",
  ];

  return (
    <>
      <Header />

      <div className="mx-auto mt-10 max-w-6xl px-5">
        <div className="space-y-4">
          <div className="flex gap-2 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {array.map((genre, index) => (
              <button
                key={index}
                className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-md border px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-8">
          <ListItem />
        </div>
      </div>
    </>
  );
}

const ListItem = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col gap-20">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex-col gap-2">
          <div className="h-50 w-full rounded-md bg-gray-200"></div>
          <div className="flex flex-col gap-1">
            <p className="pt-4 pl-2 text-lg font-medium">타이틀</p>
            <div className="flex gap-3 pl-2">
              <span className="text-sm">2025.03.26 개봉</span>
              <span className="text-sm">•</span>
              <span className="text-sm text-gray-500">누적관객 100만명</span>
            </div>
            <div className="w-full p-5">
              <div className="line-clamp-3 text-sm leading-6">
                국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의
                발전에 노력하여야 한다. 군인은 현역을 면한 후가 아니면
                국무총리로 임명될 수 없다. 국군의 조직과 편성은 법률로 정한다.
                대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서
                병력으로써 군사상의 필요에 응하거나 공공의 안녕질서를 유지할
                필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수
                있다.
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="w-full rounded-xs border border-gray-300 px-3 py-2 text-sm hover:bg-gray-300"
                onClick={() => router.push(`/list/${index}`)}
              >
                상세보기
              </button>
              <button className="w-full rounded-xs border border-gray-200 bg-gray-200 px-3 py-2 text-sm hover:bg-gray-300">
                예매하기
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

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

      <div className="mx-auto mt-6 max-w-6xl px-4 md:mt-8 md:px-5">
        <div className="mb-6 md:mb-8">
          <h1 className="mb-4 text-xl font-semibold text-gray-800 md:mb-6 md:text-2xl">
            영화 목록
          </h1>

          {/* Genre Filter */}
          <div className="mb-4 md:mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {array.map((genre, index) => (
                <button
                  key={index}
                  className="flex-shrink-0 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium whitespace-nowrap text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-800 md:px-4 md:text-sm"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="영화 제목을 검색해보세요"
              className="flex-1 rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none md:px-4 md:py-3"
            />
            <button className="rounded-lg border border-gray-200 bg-gray-100 px-3 py-2.5 transition-colors hover:bg-gray-200 sm:flex-shrink-0 md:px-4 md:py-3">
              <svg
                className="mx-auto h-4 w-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <ListItem />
        </div>
      </div>
    </>
  );
}

const ListItem = () => {
  const router = useRouter();

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors hover:border-gray-300"
        >
          <div className="flex h-40 items-center justify-center bg-gray-100 sm:h-48 md:h-44 lg:h-48">
            <span className="text-3xl text-gray-400 md:text-4xl">🎬</span>
          </div>

          <div className="p-4 md:p-6">
            <h3 className="mb-2 text-base font-semibold text-gray-800 md:text-lg">
              영화 제목 {index + 1}
            </h3>

            <div className="mb-3 flex items-center gap-2 text-xs text-gray-500 md:mb-4 md:gap-3 md:text-sm">
              <span>2025.03.26 개봉</span>
              <span>•</span>
              <span>누적관객 100만명</span>
            </div>

            <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-gray-600 md:mb-6 md:line-clamp-3 md:text-sm">
              국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의
              발전에 노력하여야 한다. 군인은 현역을 면한 후가 아니면 국무총리로
              임명될 수 없다. 국군의 조직과 편성은 법률로 정한다. 대통령은
              전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써
              군사상의 필요에 응하거나 공공의 안녕질서를 유지할 필요가 있을
              때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.
            </p>

            <div className="flex flex-col gap-2 sm:flex-row md:gap-3">
              <button
                className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 md:px-4 md:text-sm"
                onClick={() => router.push(`/list/${index}`)}
              >
                상세보기
              </button>
              <button
                className="flex-1 rounded-lg bg-gray-800 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-gray-700 md:px-4 md:text-sm"
                onClick={() => router.push(`/reserve/${index}`)}
              >
                예매하기
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

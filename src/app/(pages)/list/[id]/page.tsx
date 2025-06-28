"use client";

import Footer from "@/app/(components)/Footer";
import Header from "@/app/(components)/Header";
import { useState } from "react";

export default function MovieDetailPage() {
  const [gubun, setGubun] = useState("detail");
  const [isMore, setIsMore] = useState(false);

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <div className="mx-auto mt-6 mb-8 flex h-48 w-full max-w-6xl items-center justify-center rounded-lg border border-gray-200 bg-gray-100 px-4 md:mt-8 md:mb-12 md:h-64 md:px-5">
        <span className="text-5xl text-gray-400 md:text-6xl">🎬</span>
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-5">
        {/* Movie Title */}
        <div className="mb-6 text-center md:mb-8">
          <h1 className="mb-2 text-xl font-semibold text-gray-800 md:text-2xl">
            영화 제목
          </h1>
          <p className="text-sm text-gray-500 md:text-base">Original Title</p>
        </div>

        {/* Movie Description */}
        <div className="mb-8 md:mb-12">
          <p
            className={`text-sm leading-relaxed text-gray-600 md:text-base ${isMore || "line-clamp-3"}`}
          >
            국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의
            발전에 노력하여야 한다. 군인은 현역을 면한 후가 아니면 국무총리로
            임명될 수 없다. 국군의 조직과 편성은 법률로 정한다. 대통령은
            전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의
            필요에 응하거나 공공의 안녕질서를 유지할 필요가 있을 때에는 법률이
            정하는 바에 의하여 계엄을 선포할 수 있다.
          </p>
          {!isMore && (
            <button
              className="mt-2 text-sm text-gray-500 transition-colors hover:text-gray-700"
              onClick={() => setIsMore(true)}
            >
              더보기
            </button>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="mb-6 border-b border-gray-200 md:mb-8">
          <div className="flex">
            <button
              className={`flex-1 cursor-pointer py-3 text-sm font-medium transition-colors md:py-4 md:text-base ${
                gubun === "detail"
                  ? "border-b-2 border-gray-800 text-gray-800"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setGubun("detail")}
            >
              상세정보
            </button>
            <button
              className={`flex-1 cursor-pointer py-3 text-sm font-medium transition-colors md:py-4 md:text-base ${
                gubun === "review"
                  ? "border-b-2 border-gray-800 text-gray-800"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setGubun("review")}
            >
              평점 & 후기
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {gubun === "detail" && (
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:gap-8">
            {/* Poster */}
            <div className="mx-auto flex-shrink-0 md:mx-0">
              <div className="flex h-56 w-40 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 md:h-64 md:w-48">
                <span className="text-4xl text-gray-400">🎬</span>
              </div>
            </div>

            {/* Movie Details */}
            <div className="flex-1 space-y-4 text-center md:space-y-6 md:pt-4 md:text-left">
              <div className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700 md:text-sm">
                청소년관람불가
              </div>

              <div className="space-y-3 md:space-y-4">
                <p className="text-sm text-gray-600 md:text-base">
                  2025.03.21 개봉 · 91분
                </p>

                <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
                  <span className="text-sm font-medium text-gray-500">
                    장르
                  </span>
                  <span className="text-sm text-gray-800 md:text-base">
                    스릴러
                  </span>
                </div>

                <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
                  <span className="text-sm font-medium text-gray-500">
                    타입
                  </span>
                  <span className="text-sm text-gray-800 md:text-base">2D</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {gubun === "review" && (
          <div className="mb-12">
            {/* Overall Rating */}
            <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-6 md:mb-8 md:p-8">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">
                  4.2
                </div>
                <div className="mb-2 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">총 1,234개의 평가</p>
              </div>

              {/* Rating Distribution */}
              <div className="mt-6 space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-3">
                    <span className="w-4 text-sm text-gray-600">{star}</span>
                    <div className="h-2 flex-1 rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-yellow-400"
                        style={{
                          width: `${star === 5 ? 45 : star === 4 ? 35 : star === 3 ? 15 : star === 2 ? 3 : 2}%`,
                        }}
                      />
                    </div>
                    <span className="w-8 text-xs text-gray-500">
                      {star === 5
                        ? "45%"
                        : star === 4
                          ? "35%"
                          : star === 3
                            ? "15%"
                            : star === 2
                              ? "3%"
                              : "2%"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Write Review Button */}
            <div className="mb-6">
              <button className="w-full rounded-lg bg-gray-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700 md:w-auto">
                후기 작성하기
              </button>
            </div>

            {/* Reviews List */}
            <div className="space-y-4 md:space-y-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-4 md:p-6"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                        <span className="text-sm text-gray-600">👤</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">
                          사용자{index + 1}
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <span
                              key={starIndex}
                              className={`text-sm ${starIndex < 4 ? "text-yellow-400" : "text-gray-300"}`}
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">2일 전</span>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-600">
                    정말 재미있게 봤습니다. 스토리가 탄탄하고 연기도 훌륭했어요.
                    특히 마지막 반전이 인상적이었습니다. 추천합니다!
                  </p>
                </div>
              ))}
            </div>

            {/* Load More Reviews */}
            <div className="mt-6 text-center">
              <button className="rounded-lg border border-gray-200 px-6 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50">
                더 많은 후기 보기
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

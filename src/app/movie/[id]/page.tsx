"use client";

import Header from "@/app/(components)/Header";
import { useState } from "react";

export default function MovieDetailPage() {
  const [gubun, setGubun] = useState("detail");
  const [isMore, setIsMore] = useState(false);

  const activeMessage = "border-b-3 border-b-gray-600 p-5 text-black";
  const inactiveMessage = "border-b-2 border-b-gray-200 p-5 text-gray-200";

  return (
    <>
      <Header />

      <div className="mt-8 h-[250px] w-full bg-gray-300"></div>
      <div className="mx-auto mt-5 max-w-6xl px-5">
        <div className="flex flex-col items-center gap-1">
          <p className="text-2xl font-semibold">타이틀</p>
          <p className="text-gray-300">타이틀</p>
        </div>
        <p className={`mt-8 ${isMore || "line-clamp-2"}`}>
          국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의
          발전에 노력하여야 한다. 군인은 현역을 면한 후가 아니면 국무총리로
          임명될 수 없다. 국군의 조직과 편성은 법률로 정한다. 대통령은 전시·사변
          또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의 필요에
          응하거나 공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는
          바에 의하여 계엄을 선포할 수 있다.
        </p>

        <p
          className={`text-right text-sm text-gray-300 ${isMore && "hidden"}`}
          onClick={() => setIsMore(true)}
        >
          더보기
        </p>

        <div className="mt-20 flex text-center">
          <p
            className={`basis-1/2 ${gubun == "detail" ? activeMessage : inactiveMessage}`}
            onClick={() => setGubun("detail")}
          >
            상세정보
          </p>
          <p
            className={`basis-1/2 ${gubun != "detail" ? activeMessage : inactiveMessage}`}
            onClick={() => setGubun("review")}
          >
            평점 & 후기
          </p>
        </div>

        <div className="mt-10 flex gap-8">
          <div className="h-40 w-30 bg-gray-300"></div>
          <div className="pt-5">
            <p className="text-sm">청소년관람불가</p>
            <p className="text-sm">2025.03.21 개봉 · 91분 </p>
            <div className="mt-5">
              <span className="text-sm text-gray-300">장르</span>
              <span className="ml-3 text-sm">스릴러</span>
            </div>
            <div className="mt-5">
              <span className="text-sm text-gray-300">타입</span>
              <span className="ml-3 text-sm">2D</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

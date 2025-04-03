"use client";

import Footer from "../(components)/Footer";
import Header from "../(components)/Header";

export default function MoviePage() {
  return (
    <>
      <Header />

      <div className="mx-auto mt-35 px-5">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>

      <Footer />
    </>
  );
}

function ListItem() {
  return (
    <div className="mt-10 flex items-end justify-between">
      <div className="flex gap-5">
        <div className="h-35 w-25 bg-gray-300"></div>
        <div className="flex flex-col gap-1">
          <p>타이틀 12</p>
          <p className="text-xs">2025.03.26 개봉</p>
          <p className="text-xs text-gray-300">누적관객 3,675 명</p>
        </div>
      </div>
      <div>
        <button className="rounded-sm p-2 text-xs ring-1 ring-gray-300">
          예매하기
        </button>
      </div>
    </div>
  );
}

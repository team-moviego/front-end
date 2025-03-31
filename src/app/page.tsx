"use client";

import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5">
        <div className="mt-9 flex items-center justify-between">
          <p className="text-base">MovieGo</p>
          <div className="flex items-center gap-2">
            <BsFillTicketPerforatedFill size={24} />
            <IoMdMenu size={24} />
          </div>
        </div>
      </div>
      <div className="mt-8 mb-20 h-56 w-full bg-gray-300"></div>
      <div className="mx-auto max-w-6xl px-5">
        <p className="mb-4 font-semibold">최신 개봉작</p>
        <ListItem />

        <p className="mt-30 mb-4 font-semibold">지금 뜨는 영화</p>
        <ListItem />

        <div className="mt-30 mb-4 flex items-center justify-between">
          <p className="font-semibold">장르1</p>
          <p className="text-xs text-gray-500">더보기 +</p>
        </div>
        <ListItem />

        <div className="mt-30 mb-4 flex items-center justify-between">
          <p className="font-semibold">장르2</p>
          <p className="text-xs text-gray-500">더보기 +</p>
        </div>
        <ListItem />
        {/* <div className="mt-3 flex gap-2">
          <div className="flex flex-col gap-2">
            <div className="h-45 w-35 bg-gray-300"></div>
            <p className="text-sm">타이틀</p>
            <div className="flex gap-1">
              <p className="text-xs">106분</p>
              <p className="text-xs">|</p>
              <p className="text-xs">15세 관람가</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-45 w-35 bg-gray-300"></div>
            <p className="text-sm">타이틀</p>
            <div className="flex gap-1">
              <p className="text-xs">106분</p>
              <p className="text-xs">|</p>
              <p className="text-xs">15세 관람가</p>
            </div>
          </div>
        </div> */}
      </div>
      {/* footer */}
      <div className="mt-30 flex h-20 w-full items-center bg-gray-300 px-5 text-xs">
        © 2025 MovieGo. All rights reserved.
      </div>
    </>
  );
}

function ListItem() {
  return (
    <Swiper
      className="flex gap-2"
      // spaceBetween={50}
      slidesPerView={2.1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <SwiperSlide className="" key={i}>
          <div className="flex flex-col gap-1">
            <div className="h-45 w-35 bg-gray-300"></div>
            <p className="text-sm">타이틀</p>
            <div className="flex gap-1">
              <p className="text-xs">106분</p>
              <p className="text-xs">|</p>
              <p className="text-xs">15세 관람가</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

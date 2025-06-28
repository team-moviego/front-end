"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Banner */}
      <div className="mx-auto mt-8 mb-16 flex h-64 w-full max-w-6xl items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-5">
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            영화 예매 서비스
          </h1>
          <p className="text-gray-600">원하는 영화를 쉽고 빠르게 예매하세요</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5">
        {/* Latest Movies */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            최신 개봉작
          </h2>
          <ListItem />
        </div>

        {/* Trending Movies */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            지금 뜨는 영화
          </h2>
          <ListItem />
        </div>

        {/* Genre Sections */}
        <div className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">액션</h2>
            <button className="text-sm text-gray-500 transition-colors hover:text-gray-700">
              더보기
            </button>
          </div>
          <ListItem />
        </div>

        <div className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">드라마</h2>
            <button className="text-sm text-gray-500 transition-colors hover:text-gray-700">
              더보기
            </button>
          </div>
          <ListItem />
        </div>
      </div>

      <Footer />
    </>
  );
}

function ListItem() {
  return (
    <Swiper
      className="pb-4"
      slidesPerView={2.2}
      spaceBetween={16}
      breakpoints={{
        640: {
          slidesPerView: 3.2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4.2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 5.2,
          spaceBetween: 28,
        },
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <SwiperSlide key={i}>
          <div className="group cursor-pointer">
            <div className="mb-3 overflow-hidden rounded-lg border border-gray-200 transition-colors hover:border-gray-300">
              <div className="flex h-48 items-center justify-center bg-gray-100 sm:h-56 md:h-64">
                <span className="text-4xl text-gray-400">🎬</span>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-medium text-gray-800">
                영화 제목 {i + 1}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>106분</span>
                <span>•</span>
                <span>15세 관람가</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

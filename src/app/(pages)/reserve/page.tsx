"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, MapPin, CreditCard } from "lucide-react";
import Header from "@/app/(components)/Header";
import { useRouter } from "next/navigation";

// 가상의 영화 데이터
const movies = [
  {
    id: 1,
    title: "아바타: 물의 길",
    rating: "12",
    genre: "SF/액션",
    poster: "🎬",
    runtime: 192,
  },
  {
    id: 2,
    title: "탑건: 매버릭",
    rating: "12",
    genre: "액션/드라마",
    poster: "✈️",
    runtime: 131,
  },
  {
    id: 3,
    title: "닥터 스트레인지 2",
    rating: "12",
    genre: "액션/판타지",
    poster: "🔮",
    runtime: 126,
  },
];

const showtimes = ["10:30", "13:20", "16:10", "19:00", "21:50"];
const dates = [
  { date: "2024-01-15", day: "월" },
  { date: "2024-01-16", day: "화" },
  { date: "2024-01-17", day: "수" },
  { date: "2024-01-18", day: "목" },
  { date: "2024-01-19", day: "금" },
];

type Step = "movie" | "datetime" | "seats" | "payment";

export default function ReservePage() {
  const [currentStep, setCurrentStep] = useState<Step>("movie");
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [adultCount, setAdultCount] = useState(1);
  const [youthCount, setYouthCount] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedTheater, setSelectedTheater] = useState<string>("");

  const router = useRouter();

  const steps = [
    {
      key: "movie",
      title: "영화 선택",
      icon: <CreditCard className="h-4 w-4" />,
    },
    {
      key: "datetime",
      title: "날짜/시간",
      icon: <Calendar className="h-4 w-4" />,
    },
    { key: "seats", title: "좌석 선택", icon: <MapPin className="h-4 w-4" /> },
    { key: "payment", title: "결제", icon: <CreditCard className="h-4 w-4" /> },
  ];

  const totalTickets = adultCount + youthCount;

  const renderMovieSelection = () => (
    <div className="space-y-6">
      <h2 className="mb-8 text-center text-2xl font-bold">
        영화를 선택해주세요
      </h2>
      <div className="grid gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={`cursor-pointer rounded-lg border-2 p-6 transition-all hover:shadow-lg ${
              selectedMovie === movie.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
            onClick={() => setSelectedMovie(movie.id)}
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">{movie.poster}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{movie.title}</h3>
                <div className="text-muted-foreground mt-2 flex items-center gap-4 text-sm">
                  <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                    {movie.rating}세 이상
                  </span>
                  <span>{movie.genre}</span>
                  <span>{movie.runtime}분</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDateTimeSelection = () => (
    <div className="space-y-6">
      <h2 className="mb-8 text-center text-2xl font-bold">
        날짜와 시간을 선택해주세요
      </h2>

      {/* 인원 선택 */}
      <div className="bg-card rounded-lg border p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <Users className="h-5 w-5" />
          인원 선택
        </h3>
        <div className="flex gap-6">
          <div className="flex items-center gap-3">
            <span className="font-medium">성인</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAdultCount(Math.max(0, adultCount - 1))}
              >
                -
              </Button>
              <span className="w-8 text-center">{adultCount}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAdultCount(adultCount + 1)}
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-medium">청소년</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setYouthCount(Math.max(0, youthCount - 1))}
              >
                -
              </Button>
              <span className="w-8 text-center">{youthCount}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setYouthCount(youthCount + 1)}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 영화관 선택 */}
      <div className="bg-card rounded-lg border p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <MapPin className="h-5 w-5" />
          영화관 선택
        </h3>
        <div className="flex gap-4">
          {["1관", "2관"].map((theater) => (
            <label
              key={theater}
              className={`flex cursor-pointer items-center gap-2 rounded border px-4 py-2 transition-colors ${selectedTheater === theater ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}
            >
              <input
                type="radio"
                name="theater"
                value={theater}
                checked={selectedTheater === theater}
                onChange={() => setSelectedTheater(theater)}
                className="accent-primary"
              />
              <span className="font-medium">{theater}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 날짜 선택 */}
      <div className="bg-card rounded-lg border p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <Calendar className="h-5 w-5" />
          날짜 선택
        </h3>
        <div className="grid grid-cols-5 gap-3">
          {dates.map((date) => (
            <Button
              key={date.date}
              variant={selectedDate === date.date ? "default" : "outline"}
              className="flex h-auto flex-col py-3"
              onClick={() => setSelectedDate(date.date)}
            >
              <span className="text-xs">{date.day}</span>
              <span className="text-sm font-semibold">
                {date.date.split("-")[2]}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* 시간 선택 */}
      {selectedDate && (
        <div className="bg-card rounded-lg border p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <Clock className="h-5 w-5" />
            시간 선택
          </h3>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {showtimes.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderSeatSelection = () => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const seatsPerRow = 8;

    const toggleSeat = (seat: string) => {
      if (selectedSeats.includes(seat)) {
        setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      } else if (selectedSeats.length < totalTickets) {
        setSelectedSeats([...selectedSeats, seat]);
      }
    };

    return (
      <div className="space-y-6">
        <h2 className="mb-8 text-center text-2xl font-bold">
          좌석을 선택해주세요
        </h2>

        <div className="text-center">
          <div className="mb-6 inline-block rounded-lg bg-gray-800 px-8 py-2 text-white">
            SCREEN
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          {rows.map((row) => (
            <div
              key={row}
              className="mb-2 flex items-center justify-center gap-2"
            >
              <span className="w-6 text-center text-sm font-semibold">
                {row}
              </span>
              {Array.from({ length: seatsPerRow }, (_, i) => {
                const seatNumber = `${row}${i + 1}`;
                const isSelected = selectedSeats.includes(seatNumber);
                return (
                  <button
                    key={seatNumber}
                    className={`h-8 w-8 rounded text-xs font-medium transition-colors ${
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    onClick={() => toggleSeat(seatNumber)}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-gray-200"></div>
            <span>선택 가능</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary h-4 w-4 rounded"></div>
            <span>선택됨</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-gray-400"></div>
            <span>선택 불가</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            선택된 좌석: {selectedSeats.join(", ") || "없음"} (
            {selectedSeats.length}/{totalTickets})
          </p>
        </div>
      </div>
    );
  };

  const renderPayment = () => (
    <div className="space-y-6">
      <h2 className="mb-8 text-center text-2xl font-bold">결제 정보 확인</h2>

      <div className="bg-card rounded-lg border p-6">
        <h3 className="mb-4 text-lg font-semibold">예매 정보</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>영화</span>
            <span className="font-medium">
              {movies.find((m) => m.id === selectedMovie)?.title}
            </span>
          </div>
          <div className="flex justify-between">
            <span>영화관</span>
            <span className="font-medium">{selectedTheater}</span>
          </div>
          <div className="flex justify-between">
            <span>날짜/시간</span>
            <span className="font-medium">
              {selectedDate} {selectedTime}
            </span>
          </div>
          <div className="flex justify-between">
            <span>좌석</span>
            <span className="font-medium">{selectedSeats.join(", ")}</span>
          </div>
          <div className="flex justify-between">
            <span>인원</span>
            <span className="font-medium">
              성인 {adultCount}명, 청소년 {youthCount}명
            </span>
          </div>
          <hr />
          <div className="flex justify-between text-lg font-bold">
            <span>총 결제금액</span>
            <span>
              {(adultCount * 12000 + youthCount * 9000).toLocaleString()}원
            </span>
          </div>
        </div>
      </div>

      <Button
        className="h-12 w-full text-lg"
        onClick={() => router.push("/ticket/complete/1")}
      >
        결제하기
      </Button>
    </div>
  );

  const canProceed = () => {
    switch (currentStep) {
      case "movie":
        return selectedMovie !== null;
      case "datetime":
        return (
          selectedDate && selectedTime && totalTickets > 0 && selectedTheater
        );
      case "seats":
        return selectedSeats.length === totalTickets;
      case "payment":
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    const stepOrder: Step[] = ["movie", "datetime", "seats", "payment"];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const stepOrder: Step[] = ["movie", "datetime", "seats", "payment"];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  return (
    <>
      <Header />

      <div className="bg-background min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Step Indicator */}
          <div className="mb-12 flex justify-center">
            <div className="flex items-center space-x-4">
              {steps.map((step) => (
                <div
                  key={step.key}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 transition-colors ${
                    currentStep === step.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.icon}
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-4xl">
            {currentStep === "movie" && renderMovieSelection()}
            {currentStep === "datetime" && renderDateTimeSelection()}
            {currentStep === "seats" && renderSeatSelection()}
            {currentStep === "payment" && renderPayment()}
          </div>

          {/* Navigation */}
          <div className="mx-auto mt-12 flex max-w-4xl justify-between">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === "movie"}
            >
              이전
            </Button>

            {currentStep !== "payment" && (
              <Button onClick={handleNext} disabled={!canProceed()}>
                다음
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

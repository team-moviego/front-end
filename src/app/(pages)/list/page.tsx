import Header from "@/app/(components)/Header";

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
                className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 flex-shrink-0 items-center justify-center rounded-md border px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-8">
          <section className="flex justify-between gap-5">
            <div className="flex gap-5">
              <div className="h-35 w-25 rounded-md bg-gray-200"></div>
              <div className="flex flex-col gap-1">
                <p className="pt-4 text-lg font-medium">타이틀</p>
                <p className="text-sm">2025.03.26 개봉</p>
                <p className="text-sm text-gray-500">누적관객 100만명</p>
              </div>
            </div>

            <div className="flex items-end">
              <button className="rounded-xs bg-gray-200 px-3 py-2 text-sm">
                예매하기
              </button>
            </div>
          </section>
          <section className="flex justify-between gap-5">
            <div className="flex gap-5">
              <div className="h-35 w-25 rounded-md bg-gray-200"></div>
              <div className="flex flex-col gap-1">
                <p className="pt-4 font-medium">타이틀</p>
                <p className="text-sm">2025.03.26 개봉</p>
                <p className="text-sm text-gray-500">누적관객 100만명</p>
              </div>
            </div>

            <div className="flex items-end">
              <button className="rounded-xs bg-gray-200 px-3 py-2 text-sm">
                예매하기
              </button>
            </div>
          </section>
          <section className="flex justify-between gap-5">
            <div className="flex gap-5">
              <div className="h-35 w-25 rounded-md bg-gray-200"></div>
              <div className="flex flex-col gap-1">
                <p className="pt-4 font-medium">타이틀</p>
                <p className="text-sm">2025.03.26 개봉</p>
                <p className="text-sm text-gray-500">누적관객 100만명</p>
              </div>
            </div>

            <div className="flex items-end">
              <button className="rounded-xs bg-gray-200 px-3 py-2 text-sm">
                예매하기
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

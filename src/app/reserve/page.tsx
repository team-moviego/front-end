import Header from "../(components)/Header";

export default function ReservePage() {
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
      </div>
    </>
  );
}

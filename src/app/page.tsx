export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="mt-9 flex justify-center">
        <p className="text-base">로그인</p>
      </div>
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        className="mt-30 w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
      />
      <input
        type="text"
        placeholder="비밀번호를 입력하세요"
        className="mt-5 w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
      />
      <p className="mt-5 text-sm">자동로그인</p>
      <button className="mt-20 w-full rounded-md border border-gray-300 p-3 text-sm">
        로그인
      </button>
      <div className="mt-3 flex justify-center gap-2">
        <p className="cursor-pointer text-sm">ID/PW 찾기</p>
        <p className="text-sm">|</p>
        <p className="cursor-pointer text-sm">ID/PW 찾기</p>
      </div>
      <button className="mt-3 w-full rounded-md border border-gray-300 p-3 text-sm">
        카카오로 로그인
      </button>
    </div>
  );
}

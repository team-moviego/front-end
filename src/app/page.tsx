export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="mt-9 flex justify-center">
        <p className="text-base">로그인</p>
      </div>
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        className="mt-30 w-full p-3 border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
      />
      <input
        type="text"
        placeholder="비밀번호를 입력하세요"
        className="mt-5 w-full p-3 border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
      />
      <p className="mt-5 text-sm">자동로그인</p>
      <button className="mt-20 w-full p-3 border text-sm border-gray-300 rounded-md">
        로그인
      </button>
      <div className="mt-3 flex gap-2 justify-center">
        <p className="text-sm cursor-pointer">ID/PW 찾기</p>
        <p className="text-sm">|</p>
        <p className="text-sm cursor-pointer">ID/PW 찾기</p>
      </div>
      <button className="mt-3 w-full p-3 border text-sm border-gray-300 rounded-md">
        카카오로 로그인
      </button>
    </div>
  );
}

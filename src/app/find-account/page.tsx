export default function FindIdPage() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="mt-9 flex justify-center">
        <p className="text-base">아이디 / 비밀번호 찾기</p>
      </div>
      <div className="mt-20 flex text-center">
        <p className="basis-1/2 border-b-3 border-b-gray-600 p-5">
          아이디 찾기
        </p>
        <p className="basis-1/2 border-b-2 border-b-gray-200 p-5 text-gray-200">
          비밀번호 찾기
        </p>
      </div>
      <input
        type="text"
        className="mt-25 w-full rounded-md border border-gray-300 p-3 focus:ring-1 focus:ring-gray-500 focus:outline-none"
        placeholder="이메일주소를 입력해주세요"
      />
      <input
        type="text"
        className="mt-5 w-full rounded-md border border-gray-300 p-3 focus:ring-1 focus:ring-gray-500 focus:outline-none"
        placeholder="아이디를 입력해주세요"
      />

      <button className="mt-25 w-full rounded-md border border-gray-300 p-3">
        아이디 찾기
      </button>
    </div>
  );
}

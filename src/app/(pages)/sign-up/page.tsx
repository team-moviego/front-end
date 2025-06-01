"use client";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="mt-9 flex justify-center">
        <p className="text-base">회원가입</p>
      </div>
      <div className="mt-30 flex gap-2">
        <div className="basis-7/10">
          <input
            type="text"
            placeholder="이메일을 입력"
            className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
          />
        </div>
        <div className="basis-3/10">
          <button className="w-full rounded-md border border-gray-300 p-3 text-sm">
            중복체크
          </button>
        </div>
      </div>
      <div className="mt-5 flex gap-2">
        <div className="basis-7/10">
          <input
            type="text"
            placeholder="아이디 영문8자 이상"
            className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
          />
        </div>
        <div className="basis-3/10">
          <button className="w-full rounded-md border border-gray-300 p-3 text-sm">
            중복체크
          </button>
        </div>
      </div>
      <input
        type="password"
        placeholder="비밀번호 영문,숫자,특수기호 중 2가지 이상"
        className="mt-5 w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
      />
      <input
        type="password"
        placeholder="비밀번호 확인 영문,숫자,특수기호 중 2가지 이상"
        className="mt-5 w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
      />

      <button className="mt-20 w-full rounded-md border border-gray-300 p-3 text-sm">
        회원가입
      </button>
      <div className="mt-3 flex justify-center gap-2">
        <p
          className="cursor-pointer text-sm"
          onClick={() => router.push("/find-account")}
        >
          ID/PW 찾기
        </p>
        <p className="text-sm">|</p>
        <p
          className="cursor-pointer text-sm"
          onClick={() => router.push("/sign-in")}
        >
          로그인
        </p>
      </div>
    </div>
  );
}

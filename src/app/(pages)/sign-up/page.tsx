"use client";

import Button from "@/app/(components)/Button";
import Footer from "@/app/(components)/Footer";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="mt-9 flex justify-center">
        <p className="text-base">회원가입</p>
      </div>
      {/* 이메일 */}
      <div className="mt-30 space-y-3">
        <label htmlFor="email" className="mb-1 block text-sm">
          이메일
        </label>
        <div className="flex items-center gap-2">
          <div className="basis-7/10">
            <input
              type="text"
              placeholder="이메일을 입력"
              className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
            />
          </div>
          <div className="basis-3/10">
            <Button>중복체크</Button>
          </div>
        </div>
      </div>
      {/* 아이디 */}
      <div className="mt-5 space-y-3">
        <label htmlFor="id" className="mb-1 block text-sm">
          아이디
        </label>
        <div className="flex items-center gap-2">
          <div className="basis-7/10">
            <input
              type="text"
              placeholder="아이디 영문8자 이상"
              className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
            />
          </div>
          <div className="basis-3/10">
            <Button>중복체크</Button>
          </div>
        </div>
      </div>
      {/* 비밀번호 */}
      <div className="mt-5 space-y-3">
        <label htmlFor="pwd" className="mb-1 block text-sm">
          비밀번호
        </label>
        <input
          type="password"
          placeholder="비밀번호 영문,숫자,특수기호 중 2가지 이상"
          className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
        />
      </div>
      {/* 비밀번호 확인 */}
      <div className="mt-5 space-y-3">
        <label htmlFor="pwd-check" className="mb-1 block text-sm">
          비밀번호 확인
        </label>
        <input
          type="password"
          placeholder="비밀번호 확인 영문,숫자,특수기호 중 2가지 이상"
          className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
        />
      </div>

      <Button className="mt-20">회원가입</Button>
      <div className="mt-3 flex justify-center gap-2">
        <p
          className="cursor-pointer text-sm"
          onClick={() => router.push("/forgot")}
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
      <div className="mb-20"></div>
      <Footer />
    </div>
  );
}

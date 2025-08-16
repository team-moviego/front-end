"use client";

import Button from "@/app/(components)/Button";
import Footer from "@/app/(components)/Footer";
import { API_ENDPOINT } from "@/config/api";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();

  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const handleSignin = async () => {
    try {
      const response = await axios.post(API_ENDPOINT.user.signin, {
        userId: userId,
        userPw: userPwd,
      });
      console.log("response", response);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      }
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="mt-9 flex justify-center">
        <p className="text-base">로그인</p>
      </div>

      <section className="mt-30 space-y-3">
        <label htmlFor="id" className="mb-1 block text-sm">
          아이디
        </label>
        <input
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          type="text"
          placeholder="아이디를 입력하세요"
          className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
        />
        <label htmlFor="pwd" className="mb-1 block text-sm">
          비밀번호
        </label>
        <input
          value={userPwd}
          onChange={(e) => setUserPwd(e.target.value)}
          type="password"
          placeholder="비밀번호를 입력하세요"
          className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
        />
      </section>

      <div className="mt-5 flex items-center gap-2">
        <input
          type="checkbox"
          id="auto-login"
          className="h-4 w-4 rounded border-gray-300"
        />
        <label htmlFor="auto-login" className="cursor-pointer text-sm">
          자동 로그인
        </label>
      </div>

      <section className="mt-20 space-y-3">
        <Button>카카오로 로그인</Button>
        <Button onClick={handleSignin}>로그인</Button>
      </section>

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
          onClick={() => router.push("/sign-up")}
        >
          회원가입
        </p>
      </div>
      <div className="mb-20"></div>
      <Footer />
    </div>
  );
}

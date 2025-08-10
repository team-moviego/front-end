"use client";

import Button from "@/app/(components)/Button";
import Footer from "@/app/(components)/Footer";
import { useRouter } from "next/navigation";
import { API_ENDPOINT } from "@/config/api";
import { useState } from "react";
import axios, { AxiosError } from "axios";

export default function RegisterPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPwdCheck, setUserPwdCheck] = useState("");
  const [authNum, setAuthNum] = useState("");

  const handleSignup = async () => {
    console.log(userEmail, userId, userPwd, userPwdCheck);
    const response = await axios.post(API_ENDPOINT.user.signup, {
      userEmail: userEmail,
      userId: userId,
      userPw: userPwd,
      confirmPw: userPwdCheck,
    });
    console.log(response);
  };

  const handleCheckEmail = async () => {
    try {
      const response = await axios.get(API_ENDPOINT.user.checkEmail(userEmail));
      console.log("response", response.request.responseURL);
    } catch (error) {
      console.log("error", error);
      const message =
        error instanceof AxiosError
          ? error.response?.data?.message
          : "알 수 없는 오류가 발생했습니다.";

      alert(`${message}`);
    }
  };

  const handleCheckId = async () => {
    try {
      const response = await axios.get(API_ENDPOINT.user.checkId(userId));
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      const message =
        error instanceof AxiosError
          ? error.response?.data?.message
          : "알 수 없는 오류가 발생했습니다.";

      alert(`${message}`);
    }
  };

  const handleSendEmail = async () => {
    const response = await axios.post(API_ENDPOINT.user.sendEmail, {
      userEmail: userEmail,
    });
    console.log("response", response);
  };

  const handleSendEmailChk = async () => {
    const response = await axios.post(API_ENDPOINT.user.sendEmailChk, {
      userEmail: userEmail,
      authNum: authNum,
    });
    console.log("response", response);
  };

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
          <div className="basis-6/10">
            <input
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              type="text"
              placeholder="이메일을 입력"
              className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
            />
          </div>
          <div className="basis-2/10">
            <Button onClick={handleCheckEmail}>중복체크</Button>
          </div>
          <div className="basis-2/10">
            <Button onClick={handleSendEmail}>인증번호 발송</Button>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <label htmlFor="authNum" className="mb-1 block text-sm">
          인증번호
        </label>
        <div className="flex items-center gap-2">
          <div className="basis-6/10">
            <input
              value={authNum}
              onChange={(e) => setAuthNum(e.target.value)}
              type="text"
              placeholder="인증번호 입력"
              className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="basis-2/10">
          <Button onClick={handleSendEmailChk}>인증번호 확인</Button>
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
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              type="text"
              placeholder="아이디 영문8자 이상"
              className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
            />
          </div>
          <div className="basis-3/10">
            <Button onClick={handleCheckId}>중복체크</Button>
          </div>
        </div>
      </div>
      {/* 비밀번호 */}
      <div className="mt-5 space-y-3">
        <label htmlFor="pwd" className="mb-1 block text-sm">
          비밀번호
        </label>
        <input
          value={userPwd}
          onChange={(e) => setUserPwd(e.target.value)}
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
          value={userPwdCheck}
          onChange={(e) => setUserPwdCheck(e.target.value)}
          type="password"
          placeholder="비밀번호 확인 영문,숫자,특수기호 중 2가지 이상"
          className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
        />
      </div>

      <Button className="mt-20" onClick={handleSignup}>
        회원가입
      </Button>
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

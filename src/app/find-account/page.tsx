"use client";

import { useEffect, useState } from "react";
import Button from "../(components)/Button";

export default function FindIdPage() {
  const [gubun, setGubun] = useState("id");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const activeMessage = "border-b-3 border-b-gray-600 p-5 text-black";
  const inactiveMessage = "border-b-2 border-b-gray-200 p-5 text-gray-200";

  useEffect(() => {
    setEmail("");
    setId("");
  }, [gubun]);

  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="mt-9 flex justify-center">
        <p className="text-base">아이디 / 비밀번호 찾기</p>
      </div>
      <div className="mt-20 flex text-center">
        <p
          className={`basis-1/2 ${gubun == "id" ? activeMessage : inactiveMessage}`}
          onClick={() => setGubun("id")}
        >
          아이디 찾기
        </p>
        <p
          className={`basis-1/2 ${gubun != "id" ? activeMessage : inactiveMessage}`}
          onClick={() => setGubun("pwd")}
        >
          비밀번호 찾기
        </p>
      </div>
      <input
        type="text"
        className="mt-25 w-full rounded-md border border-gray-300 p-3 focus:ring-1 focus:ring-gray-500 focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일주소를 입력해주세요"
      />
      {gubun == "pwd" && (
        <input
          type="text"
          className="mt-5 w-full rounded-md border border-gray-300 p-3 focus:ring-1 focus:ring-gray-500 focus:outline-none"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디를 입력해주세요"
        />
      )}

      <Button>{gubun == "id" ? "아이디 찾기" : "비밀번호 찾기"}</Button>
    </div>
  );
}

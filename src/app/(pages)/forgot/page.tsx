"use client";

import Header from "@/app/(components)/Header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function ForgotPage() {
  const [tab, setTab] = useState("id");

  return (
    <>
      <Header />
      <div className="mx-auto max-w-6xl px-5">
        <section className="mt-9 flex justify-center">
          <h1 className="text-lg font-medium tracking-wider">
            아이디 / 비밀번호 찾기
          </h1>
        </section>

        <div className="mt-8">
          <Tabs defaultValue={tab} onValueChange={setTab}>
            <TabsList className="h-12 w-full">
              <TabsTrigger value="id">아이디 찾기</TabsTrigger>
              <TabsTrigger value="pwd">비밀번호 찾기</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-12 space-y-4">
          {tab === "id" && (
            <>
              <label className="mb-1 block text-sm" htmlFor="email">
                이메일
              </label>
              <input
                type="text"
                id="email"
                placeholder="이메일 주소를 입력해주세요"
                className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
              />
            </>
          )}

          <label className="mb-1 block text-sm" htmlFor="email">
            이름
          </label>
          <input
            type="text"
            id="name"
            placeholder="이름을 입력해주세요"
            className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
          />
        </div>

        <div className="mt-40">
          <button className="text-ls w-full rounded-md border border-gray-300 p-3">
            {tab === "id" ? "아이디 찾기" : "비밀번호 찾기"}
          </button>
        </div>
      </div>
    </>
  );
}

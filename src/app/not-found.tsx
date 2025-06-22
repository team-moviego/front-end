"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="mb-2 text-7xl font-bold text-gray-700">404</h1>
          <div className="mx-auto mb-6 h-0.5 w-16 rounded-full bg-gray-300"></div>
          <h2 className="mb-4 text-2xl font-medium text-gray-700">
            페이지를 찾을 수 없습니다
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-8"
        >
          <div className="relative mx-auto mb-6 h-64 w-64">
            <Image
              src="/404-illustration.svg"
              alt="404 illustration"
              fill
              className="object-contain"
            />
          </div>

          <p className="mx-auto mb-8 max-w-md text-gray-500">
            요청하신 페이지가 존재하지 않거나, 이동되었거나, 일시적으로 사용할
            수 없습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            size="default"
            className="bg-gray-800 transition-all duration-200 hover:bg-gray-900"
          >
            <Link href="/">홈으로 돌아가기</Link>
          </Button>
          <Button
            variant="outline"
            size="default"
            onClick={() => window.history.back()}
            className="border transition-all duration-200 hover:bg-gray-100"
          >
            이전 페이지로
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

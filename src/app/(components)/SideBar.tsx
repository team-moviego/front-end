import { IoMdMenu } from "react-icons/io";
import {
  RiHistoryFill,
  RiLockFill,
  RiMailFill,
  RiMovie2Fill,
} from "react-icons/ri";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaHome } from "react-icons/fa";
import { LucideTicket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLogin(false);
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <IoMdMenu size={24} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <FaHome
              size={18}
              onClick={() => {
                router.push("/");
                setIsOpen(false);
              }}
              className="cursor-pointer"
            />
          </SheetTitle>
          <div
            className="my-10 flex cursor-pointer items-center justify-between"
            onClick={() => router.push("/sign-in")}
          >
            {isLogin ? <p>xx님 환영합니다</p> : <p>로그인 후 이용해주세요</p>}
            <MdOutlineArrowForwardIos />
          </div>
          <div>
            <p className="inline-block border-b border-black py-2 text-black">
              MENU
            </p>
          </div>
          {/* 메뉴리스트 */}
          <section className="mt-5 flex flex-col gap-5">
            <div
              className="flex cursor-pointer items-center gap-5"
              onClick={() => {
                router.push("/my-ticket");
                setIsOpen(false);
              }}
            >
              <RiHistoryFill size={24} color="black" />
              <p>예약내역</p>
            </div>
            <div
              className="flex cursor-pointer items-center gap-5"
              onClick={() => {
                router.push("/list");
                setIsOpen(false);
              }}
            >
              <RiMovie2Fill size={24} color="black" />
              <p>영화조회</p>
            </div>
            <div
              className="flex cursor-pointer items-center gap-5"
              onClick={() => {
                router.push("/reserve");
                setIsOpen(false);
              }}
            >
              <LucideTicket size={24} color="black" />
              <p>바로예매</p>
            </div>
            <div
              className="flex cursor-pointer items-center gap-5"
              onClick={() => {
                router.push("/my-info");
                setIsOpen(false);
              }}
            >
              <RiMailFill size={24} color="black" />
              <p>이메일 변경</p>
            </div>
            <div
              className="flex cursor-pointer items-center gap-5"
              onClick={() => {
                router.push("/my-info");
                setIsOpen(false);
              }}
            >
              <RiLockFill size={24} color="black" />
              <p>비밀번호 변경</p>
            </div>
          </section>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

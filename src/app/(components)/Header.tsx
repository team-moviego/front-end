"use client";

import { useRouter } from "next/navigation";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import SideBar from "./SideBar";

export default function Header() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="mt-9 flex items-center justify-between">
        <p className="text-base" onClick={() => router.push("/")}>
          MovieGo
        </p>
        <div className="flex items-center gap-2">
          <BsFillTicketPerforatedFill
            size={24}
            onClick={() => router.push("/my-ticket")}
          />
          <SideBar />
        </div>
      </div>
    </div>
  );
}

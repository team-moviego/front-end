import { IoMdMenu } from "react-icons/io";
import { RiMovie2Fill } from "react-icons/ri";

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
import { useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <IoMdMenu size={24} />
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
            />
          </SheetTitle>
          <div>
            <p className="inline-block border-b border-black py-2 text-black">
              MENU
            </p>
          </div>
          <div className="mt-5 flex items-center justify-evenly">
            <div className="text-center">
              <div className="rounded-md border-2 border-black p-3">
                <RiMovie2Fill
                  size={48}
                  color="black"
                  onClick={() => {
                    router.push("/movie");
                    setIsOpen(false);
                  }}
                />
              </div>
              <p className="mt-1">영화조회</p>
            </div>
            <div className="text-center">
              <div className="rounded-md border-2 border-black p-3">
                <LucideTicket
                  size={48}
                  color="black"
                  onClick={() => {
                    router.push("/reserve");
                    setIsOpen(false);
                  }}
                />
              </div>
              <p className="mt-1">바로예매</p>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

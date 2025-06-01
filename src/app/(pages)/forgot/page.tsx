import Header from "@/app/(components)/Header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ForgotPage() {
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
          <Tabs defaultValue="account">
            <TabsList className="h-10 w-full">
              <TabsTrigger value="account">아이디 찾기</TabsTrigger>
              <TabsTrigger value="password">비밀번호 찾기</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-10 space-y-4">
          <label className="text-sm" htmlFor="email">
            이메일 주소
          </label>
          <input
            type="text"
            id="email"
            placeholder="이메일 주소를 입력해주세요"
            className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-1 focus:ring-gray-500 focus:outline-none"
          />
          <label className="text-sm" htmlFor="email">
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
            아이디 찾기
          </button>
        </div>
      </div>
    </>
  );
}

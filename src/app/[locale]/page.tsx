
"use client"

import { ModalExample } from "@/components/ModalExample";
export default function Home() {
  return (
    <div className="cn-center h-screen bg-fixed-inverse">
      <div className="cn-center gap-[300px] max-xl:flex-col">
        <div
          className="flex h-[452.7px] w-[419.55px] items-center bg-cover bg-center max-xl:hidden"
          style={{ backgroundImage: "url('/png/loginBgImage.png')" }}
        >
          <div className="line-height-[48px] font-size-32 -translate-y-[10%] font-semibold  text-fixed-white-fixed">
            <div className="mb-6 [&_path]:fill-fixed-white-fixed">
            </div>
            똑똑한 AI 휴먼.
            <br />
            <span className="font-regular">쉽게사용하기.232312</span>
          </div>
        </div>
        <ModalExample />
      </div>
    </div>
  );
}

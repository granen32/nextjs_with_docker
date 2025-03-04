"use client"

import { Badge } from "@/components/ui/Badge";
import { useModal } from "@/contexts/ModalContext";

export default function Home() {
  const { ConfirmModal } = useModal();
  const testOpenModal = () => {
    ConfirmModal({
      title: "확인",
      content: "확인",
      isOpen: true,
      size: "medium",
      type: "confirm"
    });
  };
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
            <button
              onClick={testOpenModal}
              className="font-semibold text-fixed-white-fixed"
            >
              확인 모달 열기
            </button>
            <Badge variant="primary">
              확인 모달 열기
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

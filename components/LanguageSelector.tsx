// components/LanguageSelector.tsx
import * as React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

const LanguageSelector = () => {
  return (
    <Dialog>
      {/* 语言按钮 */}
      <DialogTrigger asChild>
        <button className="flex items-center space-x-2 text-neutral-900 hover:text-neutral-500">
          <span>EN</span>
          <Image src="/lang.svg" alt="lang" width={20} height={10} />
        </button>
      </DialogTrigger>

      {/* 语言选择弹窗 */}
      <DialogContent className="fixed inset-1/4 bg-white p-6 rounded-lg w-80">
        <DialogHeader>
          <DialogTitle>Select Language</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <ul className="mt-4 space-y-2">
            <li className="py-2 hover:bg-gray-200 rounded">English</li>
            <li className="py-2 hover:bg-gray-200 rounded">Español</li>
            <li className="py-2 hover:bg-gray-200 rounded">日本語</li>
            <li className="py-2 hover:bg-gray-200 rounded">Deutsch</li>
            <li className="py-2 hover:bg-gray-200 rounded">Français</li>
          </ul>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageSelector;

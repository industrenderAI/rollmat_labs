// components/Header.tsx
import React from "react";
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo"; 
import NavigationComponent from "./NavigationComponent"; 

const Header = () => {
  return (
    <header className="flex justify-between items-center p-8 px-8 md:px-6 lg:px-8 bg-white shadow-sm">
      {/* 左侧 logo */}
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Logo" width={100} height={30} />
      </div>

      {/* 中间的导航 */}
      <NavigationComponent />

      {/* 右侧的语言选择 */}
      <div className="flex items-center space-x-4">
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;

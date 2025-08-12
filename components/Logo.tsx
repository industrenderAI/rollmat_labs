// components/Logo.tsx
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      <span className="text-lg font-bold text-white">MyWebsite</span>
    </div>
  );
};

export default Logo;

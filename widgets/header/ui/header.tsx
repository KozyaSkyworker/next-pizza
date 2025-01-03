import { Title } from "@/shared/components";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b-[1px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-center justify-between py-[42px]">
          <div className="flex gap-3">
            <Image src={"/logo.png"} alt="logo" width={35} height={35} />
            <div>
              <Title />
              <p>вкусней уже некуда</p>
            </div>
          </div>

          <input
            className="w-[764px] bg-[#F9F9F9] h-[50px]"
            placeholder="Поиск пиццы..."
          />

          <div className="flex gap-3">
            <button>Войти</button>
            <button>
              <ShoppingCart />
              корзина
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

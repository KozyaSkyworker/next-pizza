import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/widgets/container";

import { Button, Search, Title } from "@/shared/components";
import { cn } from "@/shared/lib/utils";

const Header = () => {
  return (
    <header className="border-b-[1px]">
      <Container>
        <div className="flex items-center justify-between py-[42px] gap-[40px]">
          <Link className="flex gap-3 items-center" href={"/"}>
            <Image
              className="w-[35px] h-[35px]"
              src={"/logo.png"}
              alt="logo"
              width={"35"}
              height={"35"}
            />
            <div>
              <Title
                text={"NEXT PIZZA"}
                className="uppercase text-xl font-black"
              />
              <p>вкусней уже некуда</p>
            </div>
          </Link>
          <Search className="flex-1" />
          <div className="flex gap-3">
            <Button variant={"outline"}>
              <User />
              <span>Войти</span>
            </Button>
            <Button className={cn("group relative")}>
              <b>666 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0 ">
                <ShoppingCart
                  size={16}
                  className="relative mr-2"
                  strokeWidth={2}
                />
                <b>9</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

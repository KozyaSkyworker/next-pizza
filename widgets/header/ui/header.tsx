import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/widgets/container";

import { Button, Search, Title } from "@/shared/components";

import CartDrawer from "./cart-drawer";

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
            <CartDrawer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

"use client";

import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";

import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Title,
} from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { useCartStore } from "@/shared/store";

import CartItem from "./cart-item";

const CartDrawer = () => {
  const cart = useCartStore((state) => state);

  const totalItems = cart.getTotals().quantity;
  const totalPrice = cart.getTotals().price;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className={cn("group relative")}
          onClick={() => {
            console.log(cart.items);
          }}
        >
          <b>{totalPrice} ₽</b>
          <span className="h-full w-[1px] bg-white/30 mx-3" />
          <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0 ">
            <ShoppingCart size={16} className="relative mr-2" strokeWidth={2} />
            <b>{totalItems}</b>
          </div>
          <ArrowRight
            size={20}
            className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        className={cn(
          "flex flex-col bg-[#F4F1EE] p-0",
          !totalItems && "justify-center bg-white",
        )}
      >
        {totalItems > 0 && (
          <SheetHeader className="p-[20px]">
            <SheetTitle>
              В корзине{" "}
              <span className="font-bold">{totalItems} ед. товара</span>
            </SheetTitle>
          </SheetHeader>
        )}

        {!totalItems && (
          <div className="flex flex-col gap-[30px] items-center justify-center">
            <div>
              <Image
                className="w-[120px] h-[120px]"
                src={"/box.png"}
                alt="empty cart"
                width={"120"}
                height={"120"}
              />
            </div>
            <div className="text-center">
              <Title variant="h4" text="Корзина пустая" />
              <p>Добавьте хотя бы одну пиццу, чтобы совершить заказ</p>
            </div>
            <SheetClose>
              <Button className="w-56 h-12 text-base" size="lg">
                <ArrowLeft className="w-5 mr-2" />
                Вернуться назад
              </Button>
            </SheetClose>
          </div>
        )}

        {totalItems > 0 && (
          <>
            <div className="flex-grow flex flex-col gap-5 overflow-y-auto">
              {cart.items.map((itm) => (
                <CartItem key={itm.id} data={itm} />
              ))}
            </div>
            <SheetFooter
              className={"bg-white p-[20px] gap-[20px] flex flex-col"}
            >
              <div className="flex justify-between gap-2">
                <span>Итого:</span>
                <div className="flex-grow w-1 h-1 border-b border-dashed border-b-neutral-200 relative -top-2 self-end" />
                <span className="font-bold">{totalPrice} ₽</span>
              </div>
              <Button className="p-7">
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;

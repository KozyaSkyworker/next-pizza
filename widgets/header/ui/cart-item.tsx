"use client";

import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

import { Button, Title } from "@/shared/components";
import { CartItem as TCartItem, useCartStore } from "@/shared/store";

const CartItem = ({ data }: { data: TCartItem }) => {
  const { removeItem, updateQuantity } = useCartStore();

  const handleRemove = () => {
    removeItem(data.id);
  };

  return (
    <div className="flex bg-white p-[20px] gap-4">
      <Image
        className="w-[65px] h-[65px]"
        src={data.img}
        alt={data.name}
        width={"65"}
        height={"65"}
      />
      <div className="flex flex-col gap-[5px]">
        <div className="flex justify-between items-center">
          <Title variant={"h5"} text={data.name} />
          <Button
            className="p-0 text-gray-500 hover:text-primary"
            variant={"secondary"}
            onClick={handleRemove}
          >
            <Trash />
          </Button>
        </div>
        <p>{data.ingridients}</p>
        <div className="block w-full h-[1px] bg-gray-200 my-[5px]" />
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <Button
              className="p-2 h-max"
              variant="outline"
              disabled={data.quantity === 1}
              onClick={() => updateQuantity(data.id, "minus")}
            >
              <Minus />
            </Button>
            <span>{data.quantity}</span>
            <Button
              className="p-2 h-max"
              variant="outline"
              onClick={() => updateQuantity(data.id, "plus")}
            >
              <Plus />
            </Button>
          </div>
          <span className="font-bold">{data.startPrice * data.quantity} ₽</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

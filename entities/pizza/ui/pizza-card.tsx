"use client";

import { Plus } from "lucide-react";
import Image from "next/image";

import { Button, Title } from "@/shared/components";
import { useCartStore } from "@/shared/store";

import { PizzaDTO } from "../model";

const PizzaCard = ({ data }: { data: PizzaDTO }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(data);
  };

  return (
    <div className="flex flex-col gap-[15px] justify-between">
      <div className="bg-secondary flex items-center justify-center rounded-[15px]">
        <Image
          className="w-[211px] h-[211px] mt-3"
          src="/pepperoni.avif"
          alt="pepperoni"
          width={211}
          height={211}
        />
      </div>
      <div>
        <Title variant="h3" text={data.name} />
        <p className="text-[14px] text-gray-400 mt-[7px] h-[70px] text-ellipsis line-clamp-3">
          {data.ingridients}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[20px]">
          от <span className="font-bold ">{data.startPrice} ₽</span>
        </p>
        <Button variant={"secondary"} onClick={handleAddToCart}>
          <Plus />
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default PizzaCard;

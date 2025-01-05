import { Button, Title } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/widgets/container";
import { ArrowUpDown, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: 1, name: "Все" },
  { id: 2, name: "Мясные" },
  { id: 3, name: "Острые" },
  { id: 4, name: "Сладкие" },
  { id: 5, name: "Вегетарианские" },
];

const active = 3;

export default function Home() {
  return (
    <Container>
      <div className="py-[40px]">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          {/* Категории */}
          <div className="flex items-center bg-gray-50 rounded-[15px] w-max p-[6px]">
            {categories.map((itm) => (
              <Link
                key={itm.id}
                href={`/#${itm.name}`}
                className={cn(
                  "py-[10px] px-[16px] hover:text-primary font-medium",
                  active === itm.id && "bg-white rounded-[15px] text-primary",
                )}
              >
                {itm.name}
              </Link>
            ))}
          </div>

          {/* Сортировка */}
          <div className="flex items-center gap-[10px] bg-gray-50 w-max py-[16px] px-[22px] rounded-[15px]">
            <ArrowUpDown />
            Сортировка по:{" "}
            <span className="text-primary font-medium">рейтингу</span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-[40px] flex gap-[60px]">
          {/* Sidebar */}
          <div className="basis-[245px] flex flex-col gap-[60px]">
            <Title variant="h2" text="Фильтрация" />

            <div>
              <Title variant="h4" text="Тип теста:" />
            </div>

            <div>
              <Title variant="h4" text="Цена от и до:" />
            </div>

            <div>
              <Title variant="h4" text="Ингридиенты:" />
            </div>

            <Button
              className="hover:bg-primary hover:text-white"
              variant={"outline"}
            >
              Примениить
            </Button>
          </div>
          {/* Pizza List */}
          <div className="flex-grow flex flex-col gap-[60px]">
            <div id="Мясные">
              {/* category name */}
              <Title variant="h2" text="Мясные" />
              {/* pizzas */}
              <div className="grid grid-cols-3 mt-[30px] gap-[50px]">
                {/* pizza */}
                <div className="flex flex-col gap-[15px] justify-between">
                  <div className="bg-secondary flex items-center justify-center rounded-[15px]">
                    <Image
                      className="w-[211px] h-[211px]"
                      src="/pepperoni.avif"
                      alt="pepperoni"
                      width={211}
                      height={211}
                    />
                  </div>
                  <div>
                    <Title variant="h3" text="PizzaName" />
                    <p className="text-[14px] text-gray-400 mt-[7px] h-[70px] text-ellipsis line-clamp-3">
                      Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус
                      песто, кубики брынзы, томаты, красный лук, моцарелла,
                      фирменный соус альфредо, чеснок, итальянские травы
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[20px]">
                      от <span className="font-bold ">666 ₽</span>
                    </p>
                    <Button>
                      <Plus />
                      Добавить
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] justify-between">
                  <div className="bg-secondary flex items-center justify-center rounded-[15px]">
                    <Image
                      className="w-[211px] h-[211px]"
                      src="/pepperoni.avif"
                      alt="pepperoni"
                      width={211}
                      height={211}
                    />
                  </div>
                  <div>
                    <Title variant="h3" text="PizzaName" />
                    <p className="text-[14px] text-gray-400 mt-[7px] h-[70px] text-ellipsis line-clamp-3">
                      Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус
                      песто, кубики брынзы, томаты, красный лук, моцарелла,
                      фирменный соус альфредо, чеснок, итальянские травы
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[20px]">
                      от <span className="font-bold ">666 ₽</span>
                    </p>
                    <Button>
                      <Plus />
                      Добавить
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] justify-between">
                  <div className="bg-secondary flex items-center justify-center rounded-[15px]">
                    <Image
                      className="w-[211px] h-[211px]"
                      src="/pepperoni.avif"
                      alt="pepperoni"
                      width={211}
                      height={211}
                    />
                  </div>
                  <div>
                    <Title variant="h3" text="PizzaName" />
                    <p className="text-[14px] text-gray-400 mt-[7px] h-[70px] text-ellipsis line-clamp-3">
                      Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус
                      песто, кубики брынзы, томаты, красный лук, моцарелла,
                      фирменный соус альфредо, чеснок, итальянские травы
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[20px]">
                      от <span className="font-bold ">666 ₽</span>
                    </p>
                    <Button>
                      <Plus />
                      Добавить
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] justify-between">
                  <div className="bg-secondary flex items-center justify-center rounded-[15px]">
                    <Image
                      className="w-[211px] h-[211px]"
                      src="/pepperoni.avif"
                      alt="pepperoni"
                      width={211}
                      height={211}
                    />
                  </div>
                  <div>
                    <Title variant="h3" text="PizzaName" />
                    <p className="text-[14px] text-gray-400 mt-[7px] h-[70px] text-ellipsis line-clamp-3">
                      Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус
                      песто, кубики брынзы, томаты, красный лук, моцарелла,
                      фирменный соус альфредо, чеснок, итальянские травы
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[20px]">
                      от <span className="font-bold ">666 ₽</span>
                    </p>
                    <Button>
                      <Plus />
                      Добавить
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] justify-between">
                  <div className="bg-secondary flex items-center justify-center rounded-[15px]">
                    <Image
                      className="w-[211px] h-[211px]"
                      src="/pepperoni.avif"
                      alt="pepperoni"
                      width={211}
                      height={211}
                    />
                  </div>
                  <div>
                    <Title variant="h3" text="PizzaName" />
                    <p className="text-[14px] text-gray-400 mt-[7px] h-[70px] text-ellipsis line-clamp-3">
                      Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус
                      песто, кубики брынзы, томаты, красный лук, моцарелла,
                      фирменный соус альфредо, чеснок, итальянские травы
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[20px]">
                      от <span className="font-bold ">666 ₽</span>
                    </p>
                    <Button>
                      <Plus />
                      Добавить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div id="Острые">
              {/* category name */}
              <Title variant="h2" text="Острые" />
              {/* pizzas */}
              <div className="grid grid-cols-3 mt-[30px] gap-[50px]">
                {/* pizza */}
                <div className="flex flex-col gap-[15px] justify-between">
                  <div className="bg-secondary flex items-center justify-center rounded-[15px]">
                    <Image
                      className="w-[211px] h-[211px]"
                      src="/pepperoni.avif"
                      alt="pepperoni"
                      width={211}
                      height={211}
                    />
                  </div>
                  <div>
                    <Title variant="h3" text="PizzaName" />
                    <p className="text-[14px] text-gray-400 mt-[7px] h-[70px] text-ellipsis line-clamp-3">
                      Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус
                      песто, кубики брынзы, томаты, красный лук, моцарелла,
                      фирменный соус альфредо, чеснок, итальянские травы
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[20px]">
                      от <span className="font-bold ">666 ₽</span>
                    </p>
                    <Button>
                      <Plus />
                      Добавить
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] justify-between">
                  <div className="bg-secondary flex items-center justify-center rounded-[15px]">
                    <Image
                      className="w-[211px] h-[211px]"
                      src="/pepperoni.avif"
                      alt="pepperoni"
                      width={211}
                      height={211}
                    />
                  </div>
                  <div>
                    <Title variant="h3" text="PizzaName" />
                    <p className="text-[14px] text-gray-400 mt-[7px] h-[70px] text-ellipsis line-clamp-3">
                      Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус
                      песто, кубики брынзы, томаты, красный лук, моцарелла,
                      фирменный соус альфредо, чеснок, итальянские травы
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[20px]">
                      от <span className="font-bold ">666 ₽</span>
                    </p>
                    <Button>
                      <Plus />
                      Добавить
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] justify-between">
                  <div className="bg-secondary flex items-center justify-center rounded-[15px]">
                    <Image
                      className="w-[211px] h-[211px]"
                      src="/pepperoni.avif"
                      alt="pepperoni"
                      width={211}
                      height={211}
                    />
                  </div>
                  <div>
                    <Title variant="h3" text="PizzaName" />
                    <p className="text-[14px] text-gray-400 mt-[7px] h-[70px] text-ellipsis line-clamp-3">
                      Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус
                      песто, кубики брынзы, томаты, красный лук, моцарелла,
                      фирменный соус альфредо, чеснок, итальянские травы
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[20px]">
                      от <span className="font-bold ">666 ₽</span>
                    </p>
                    <Button>
                      <Plus />
                      Добавить
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] justify-between">
                  <div className="bg-secondary flex items-center justify-center rounded-[15px]">
                    <Image
                      className="w-[211px] h-[211px]"
                      src="/pepperoni.avif"
                      alt="pepperoni"
                      width={211}
                      height={211}
                    />
                  </div>
                  <div>
                    <Title variant="h3" text="PizzaName" />
                    <p className="text-[14px] text-gray-400 mt-[7px] h-[70px] text-ellipsis line-clamp-3">
                      Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус
                      песто, кубики брынзы, томаты, красный лук, моцарелла,
                      фирменный соус альфредо, чеснок, итальянские травы
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[20px]">
                      от <span className="font-bold ">666 ₽</span>
                    </p>
                    <Button>
                      <Plus />
                      Добавить
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] justify-between">
                  <div className="bg-secondary flex items-center justify-center rounded-[15px]">
                    <Image
                      className="w-[211px] h-[211px]"
                      src="/pepperoni.avif"
                      alt="pepperoni"
                      width={211}
                      height={211}
                    />
                  </div>
                  <div>
                    <Title variant="h3" text="PizzaName" />
                    <p className="text-[14px] text-gray-400 mt-[7px] h-[70px] text-ellipsis line-clamp-3">
                      Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус
                      песто, кубики брынзы, томаты, красный лук, моцарелла,
                      фирменный соус альфредо, чеснок, итальянские травы
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[20px]">
                      от <span className="font-bold ">666 ₽</span>
                    </p>
                    <Button>
                      <Plus />
                      Добавить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

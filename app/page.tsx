import { cn } from "@/shared/lib/utils";
import { Container } from "@/widgets/container";
import { ArrowUpDown } from "lucide-react";
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
      <div className="pt-[40px]">
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
      </div>
    </Container>
  );
}

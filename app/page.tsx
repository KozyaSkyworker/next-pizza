import { PizzaCard } from "@/entities/pizza";
import { Title, TopBar } from "@/shared/components";
import { Container } from "@/widgets/container";
import { Sidebar } from "@/widgets/sidebar";

// TODO: дублирование
const categories = [
  {
    id: 1,
    name: "Мясные",
  },
  {
    id: 2,
    name: "Острые",
  },
  {
    id: 3,
    name: "Сладкие",
  },
  {
    id: 4,
    name: "Вегетарианские",
  },
];

// TODO: вынести
const pizzas = [
  {
    id: 1,
    category: 1,
    name: "PEPPERONI",
    img: "/pepperoni.avif",
    ingridients:
      "Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы",
    startPrice: 666,
  },
  {
    id: 2,
    category: 1,
    name: "MARGHERITA",
    img: "/pepperoni.avif",
    ingridients: "Сыр моцарелла, томатный соус, свежие томаты, базилик",
    startPrice: 500,
  },
  {
    id: 3,
    category: 1,
    name: "HAWAIIAN",
    img: "/pepperoni.avif",
    ingridients: "Ветчина, ананас, сыр моцарелла, томатный соус",
    startPrice: 600,
  },
  {
    id: 4,
    category: 1,
    name: "BBQ CHICKEN",
    img: "/pepperoni.avif",
    ingridients: "Курица, лук, сыр моцарелла, соус барбекю",
    startPrice: 650,
  },
  {
    id: 5,
    category: 1,
    name: "VEGGIE",
    img: "/pepperoni.avif",
    ingridients: "Шпинат, томаты, грибы, лук, сыр моцарелла, томатный соус",
    startPrice: 550,
  },
  {
    id: 6,
    category: 2,
    name: "MEAT LOVERS",
    img: "/pepperoni.avif",
    ingridients: "Пепперони, ветчина, бекон, сыр моцарелла, томатный соус",
    startPrice: 700,
  },
  {
    id: 7,
    category: 2,
    name: "SUPREME",
    img: "/pepperoni.avif",
    ingridients:
      "Пепперони, ветчина, грибы, лук, оливки, сыр моцарелла, томатный соус",
    startPrice: 720,
  },
  {
    id: 8,
    category: 2,
    name: "BUFFALO CHICKEN",
    img: "/pepperoni.avif",
    ingridients: "Курица, острый соус, сыр моцарелла, соус барбекю",
    startPrice: 680,
  },
  {
    id: 9,
    category: 2,
    name: "SEAFOOD",
    img: "/pepperoni.avif",
    ingridients: "Креветки, кальмары, мидии, сыр моцарелла, соус альфредо",
    startPrice: 750,
  },
  {
    id: 10,
    category: 2,
    name: "CHEESE LOVERS",
    img: "/pepperoni.avif",
    ingridients:
      "Сыр моцарелла, сыр чеддер, сыр пармезан, сыр гауда, томатный соус",
    startPrice: 670,
  },
  {
    id: 11,
    category: 3,
    name: "MEDITERRANEAN",
    img: "/pepperoni.avif",
    ingridients: "Оливки, томаты, шпинат, сыр фета, сыр моцарелла, соус песто",
    startPrice: 690,
  },
  {
    id: 12,
    category: 3,
    name: "PESTO CHICKEN",
    img: "/pepperoni.avif",
    ingridients: "Курица, соус песто, сыр моцарелла, томаты, базилик",
    startPrice: 710,
  },
  {
    id: 13,
    category: 3,
    name: "SPICY PEPPERONI",
    img: "/pepperoni.avif",
    ingridients: "Пепперони, перец халапеньо, сыр моцарелла, томатный соус",
    startPrice: 680,
  },
  {
    id: 14,
    category: 3,
    name: "TRUFFLE MUSHROOM",
    img: "/pepperoni.avif",
    ingridients: "Грибы, трюфельное масло, сыр моцарелла, соус альфредо",
    startPrice: 740,
  },
  {
    id: 15,
    category: 3,
    name: "CAPRICCIOSA",
    img: "/pepperoni.avif",
    ingridients:
      "Ветчина, грибы, артишоки, оливки, сыр моцарелла, томатный соус",
    startPrice: 730,
  },
  {
    id: 16,
    category: 4,
    name: "QUATTRO FORMAGGI",
    img: "/pepperoni.avif",
    ingridients:
      "Сыр моцарелла, сыр пармезан, сыр гауда, сыр дор блю, соус альфредо",
    startPrice: 760,
  },
  {
    id: 17,
    category: 4,
    name: "PROSCIUTTO",
    img: "/pepperoni.avif",
    ingridients: "Прошутто, руккола, сыр моцарелла, томатный соус",
    startPrice: 770,
  },
  {
    id: 18,
    category: 4,
    name: "CALZONE",
    img: "/pepperoni.avif",
    ingridients:
      "Ветчина, грибы, сыр моцарелла, томатный соус (закрытая пицца)",
    startPrice: 780,
  },
  {
    id: 19,
    category: 4,
    name: "DIABLO",
    img: "/pepperoni.avif",
    ingridients:
      "Пепперони, перец халапеньо, острый соус, сыр моцарелла, томатный соус",
    startPrice: 750,
  },
  {
    id: 20,
    category: 4,
    name: "FRUTTI DI MARE",
    img: "/pepperoni.avif",
    ingridients:
      "Креветки, мидии, кальмары, чеснок, сыр моцарелла, соус альфредо",
    startPrice: 790,
  },
];

export default function Home() {
  return (
    <Container>
      <div className="py-[40px]">
        <TopBar />
        <div className="mt-[40px] flex gap-[60px]">
          <Sidebar />
          <div className="flex-grow flex flex-col gap-[60px]">
            {categories.map((category) => (
              <div id={category.name} key={category.name}>
                <Title variant="h2" text={category.name} />
                <div className="grid grid-cols-3 mt-[30px] gap-[50px]">
                  {pizzas
                    .filter((itm) => itm.category === category.id)
                    .map((pizza) => (
                      <PizzaCard key={pizza.id} data={pizza} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

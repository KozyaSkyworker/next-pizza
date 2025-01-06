import { Title, Button } from "@/shared/components";

const Sidebar = () => {
  return (
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

      <Button className="hover:bg-primary hover:text-white" variant={"outline"}>
        Примениить
      </Button>
    </div>
  );
};

export default Sidebar;

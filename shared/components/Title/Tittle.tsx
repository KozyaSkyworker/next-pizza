import { clsx as cn } from "clsx";
import { FC } from "react";

interface TitleProps {
  className?: string;
}

const Title: FC<TitleProps> = ({ className }) => {
  return <h2 className={cn("text-zinc-500", className)}>qweqw</h2>;
};

export default Title;

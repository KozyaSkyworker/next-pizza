import { cn } from "@/shared/lib/utils";
import { FC } from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5";

interface TitleProps {
  className?: string;
  variant?: Variant;
  text: string;
}

const mapSize: Record<Variant, `text-${string}`> = {
  h1: `text-[40px]`,
  h2: `text-[32px]`,
  h3: `text-[26px]`,
  h4: `text-[22px]`,
  h5: `text-[16px]`,
};

const mapWeight: Record<Variant, `font-${string}`> = {
  h1: `font-extrabold`,
  h2: `font-bold`,
  h3: `font-bold`,
  h4: `font-bold`,
  h5: `font-bold`,
};

export const Title: FC<TitleProps> = ({
  className = "",
  variant = "h1",
  text,
}) => {
  return (
    <h2
      className={cn(
        "text-black",
        mapSize[variant],
        mapWeight[variant],
        className,
      )}
    >
      {text}
    </h2>
  );
};

import { cn } from "@/shared/lib/utils";
import { FC, ReactNode } from "react";

const Container: FC<{ className?: string; children: ReactNode }> = ({
  className = "",
  children,
}) => {
  return (
    <div className={cn("mx-auto max-w-[1280px]", className)}>{children}</div>
  );
};

export default Container;

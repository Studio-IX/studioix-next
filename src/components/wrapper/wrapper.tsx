import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-3xl px-3 md:px-20", className)}
    >
      {children}
    </div>
  );
};

export default Wrapper;

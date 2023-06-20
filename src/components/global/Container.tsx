import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  const style = clsx(
    "p-6 lg:px-8 mx-auto",
    className,
    !className && "max-w-7xl"
  );
  return <div className={style}>{children}</div>;
};

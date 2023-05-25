type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`p-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

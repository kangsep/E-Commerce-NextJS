type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`max-w-[1400px] mx-auto px-4 md:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
export default function Button({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`w-full rounded-md border border-gray-300 p-3 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

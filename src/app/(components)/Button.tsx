export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="mt-25 w-full rounded-md border border-gray-300 p-3"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

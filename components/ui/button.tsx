export function Button({ children, variant }: { children: React.ReactNode; variant?: string }) {
  const style =
    variant === "outline"
      ? "border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      : "bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition";
  return <button className={style}>{children}</button>;
}

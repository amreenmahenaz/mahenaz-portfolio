export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl bg-gray-900 shadow-lg">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

export default function Frame({
  children,
  mat = "p-3",
  outer = "p-[5px]",
  className = "",
}: {
  children: React.ReactNode;
  mat?: string;
  outer?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative ${outer} bg-[#3d2817] bg-gradient-to-br from-[#4a311e] via-[#3d2817] to-[#251606] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45),0_2px_4px_rgba(0,0,0,0.18)] ${className}`}
    >
      <div className={`${mat} bg-[var(--color-paper)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]`}>
        <div className="shadow-[inset_0_2px_6px_rgba(0,0,0,0.25)]">
          {children}
        </div>
      </div>
    </div>
  );
}

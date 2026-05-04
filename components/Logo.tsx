export default function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={className}
    >
      <circle cx="20" cy="20" r="18" fill="none" stroke="#F0E055" strokeWidth="3" />
      <circle cx="20" cy="13.5" r="5.5" fill="none" stroke="var(--color-accent)" strokeWidth="2.4" />
      <circle cx="26.5" cy="20" r="5.5" fill="none" stroke="var(--color-accent-2)" strokeWidth="2.4" />
      <circle cx="20" cy="26.5" r="5.5" fill="none" stroke="var(--color-accent)" strokeWidth="2.4" />
      <circle cx="13.5" cy="20" r="5.5" fill="none" stroke="var(--color-accent-2)" strokeWidth="2.4" />
      <circle cx="20" cy="20" r="1.8" fill="var(--color-gold)" />
    </svg>
  );
}

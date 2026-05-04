type Intensity = "subtle" | "medium" | "bold";

const HEIGHTS: Record<Intensity, number> = { subtle: 32, medium: 44, bold: 56 };
const OPACITIES: Record<Intensity, number> = { subtle: 0.45, medium: 0.65, bold: 0.85 };

export default function BatikDivider({
  intensity = "subtle",
  className = "",
  id = "batik-mega-mendung",
}: { intensity?: Intensity; className?: string; id?: string }) {
  const height = HEIGHTS[intensity];
  const opacity = OPACITIES[intensity];
  const tileW = 120;
  return (
    <div
      aria-hidden="true"
      className={`block w-full text-[var(--color-accent-2)] ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox={`0 0 1200 ${height}`}
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height, display: "block" }}
      >
        <defs>
          <pattern id={id} x="0" y="0" width={tileW} height={height} patternUnits="userSpaceOnUse">
            <path
              d={`M 0 ${height * 0.55}
                  C ${tileW * 0.1} ${height * 0.25}, ${tileW * 0.25} ${height * 0.25}, ${tileW * 0.3} ${height * 0.55}
                  C ${tileW * 0.35} ${height * 0.3}, ${tileW * 0.5} ${height * 0.3}, ${tileW * 0.55} ${height * 0.55}
                  C ${tileW * 0.6} ${height * 0.25}, ${tileW * 0.75} ${height * 0.25}, ${tileW * 0.8} ${height * 0.55}
                  C ${tileW * 0.85} ${height * 0.3}, ${tileW} ${height * 0.3}, ${tileW} ${height * 0.55}`}
              fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
            />
            <path
              d={`M 0 ${height * 0.7}
                  C ${tileW * 0.1} ${height * 0.45}, ${tileW * 0.25} ${height * 0.45}, ${tileW * 0.3} ${height * 0.7}
                  C ${tileW * 0.35} ${height * 0.5}, ${tileW * 0.5} ${height * 0.5}, ${tileW * 0.55} ${height * 0.7}
                  C ${tileW * 0.6} ${height * 0.45}, ${tileW * 0.75} ${height * 0.45}, ${tileW * 0.8} ${height * 0.7}
                  C ${tileW * 0.85} ${height * 0.5}, ${tileW} ${height * 0.5}, ${tileW} ${height * 0.7}`}
              fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"
            />
            <path
              d={`M ${tileW * 0.05} ${height} L ${tileW * 0.15} ${height * 0.78} L ${tileW * 0.25} ${height} Z
                  M ${tileW * 0.3} ${height} L ${tileW * 0.4} ${height * 0.78} L ${tileW * 0.5} ${height} Z
                  M ${tileW * 0.55} ${height} L ${tileW * 0.65} ${height * 0.78} L ${tileW * 0.75} ${height} Z
                  M ${tileW * 0.8} ${height} L ${tileW * 0.9} ${height * 0.78} L ${tileW} ${height} Z`}
              fill="currentColor" opacity="0.5"
            />
            <circle cx={tileW * 0.15} cy={height * 0.4} r="1.6" fill="currentColor" />
            <circle cx={tileW * 0.4} cy={height * 0.42} r="1.6" fill="currentColor" />
            <circle cx={tileW * 0.65} cy={height * 0.4} r="1.6" fill="currentColor" />
            <circle cx={tileW * 0.9} cy={height * 0.42} r="1.6" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="1200" height={height} fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

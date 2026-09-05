import type { SVGProps } from "react";
import type { Locale } from "@/lib/i18n";

const STRIPE = 20 / 13;

function BR(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="28" height="20" fill="#009b3a" />
      <path d="M14 2 25 10 14 18 3 10Z" fill="#fedf00" />
      <circle cx="14" cy="10" r="3.8" fill="#002776" />
    </svg>
  );
}

function ES(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="28" height="20" fill="#c60b1e" />
      <rect y="5" width="28" height="10" fill="#ffc400" />
    </svg>
  );
}

function US(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="28" height="20" fill="#b22234" />
      {[1, 3, 5, 7, 9, 11].map((i) => (
        <rect key={i} y={STRIPE * i} width="28" height={STRIPE} fill="#fff" />
      ))}
      <rect width="12.6" height={STRIPE * 7} fill="#3c3b6e" />
    </svg>
  );
}

const FLAGS: Record<Locale, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  pt: BR,
  es: ES,
  en: US,
};

export function Flag({ locale, height = 16 }: { locale: Locale; height?: number }) {
  const Svg = FLAGS[locale];
  const width = Math.round((height * 28) / 20);
  return (
    <span
      style={{ width, height }}
      className="inline-block shrink-0 overflow-hidden rounded-[3px] ring-1 ring-white/15"
    >
      <Svg width={width} height={height} style={{ display: "block" }} />
    </span>
  );
}

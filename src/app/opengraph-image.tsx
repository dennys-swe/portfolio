import { ImageResponse } from "next/og";

export const alt = "Dennys Alves · Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "#3ECFA0";
const BG = "#0a0a0b";
const FG = "#fafafa";
const MUTED = "#a1a1aa";

async function loadGoogleFont(family: string, text: string, weight = 400, italic = false) {
  const axis = italic ? `ital,wght@1,${weight}` : `wght@${weight}`;
  const url = `https://fonts.googleapis.com/css2?family=${family}:${axis}&text=${encodeURIComponent(
    text,
  )}`;
  const css = await (await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })).text();
  const src = css.match(/src: url\((.+?)\) format\(['"]?(opentype|truetype|woff2?)['"]?\)/);
  if (!src) throw new Error(`font ${family} not found`);
  const res = await fetch(src[1]);
  if (!res.ok) throw new Error(`font ${family} download failed`);
  return res.arrayBuffer();
}

export default async function Image() {
  const name = "Dennys Alves";
  const role = "Full-Stack Developer";
  const proof = "Full-stack em produção · +350 testes automatizados";

  const fonts: { name: string; data: ArrayBuffer; weight: 400 | 600; style: "normal" | "italic" }[] =
    [];
  try {
    const [fraunces, mono] = await Promise.all([
      loadGoogleFont("Fraunces", name, 600, true),
      loadGoogleFont("Geist+Mono", `${role}${proof}dennys.mandit.com.br$ `, 400),
    ]);
    fonts.push({ name: "Fraunces", data: fraunces, weight: 600, style: "italic" });
    fonts.push({ name: "Geist Mono", data: mono, weight: 400, style: "normal" });
  } catch {
    /* fall back to the built-in font */
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          backgroundImage: `radial-gradient(1000px 500px at 15% -10%, rgba(62,207,160,0.18), transparent)`,
          padding: "80px",
          color: FG,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: BRAND }} />
          <div
            style={{
              fontFamily: "Geist Mono",
              fontSize: 24,
              letterSpacing: 1,
              color: MUTED,
            }}
          >
            $ status --production
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: 128,
              lineHeight: 1,
            }}
          >
            {name}
          </div>
          <div style={{ fontFamily: "Geist Mono", fontSize: 36, color: FG }}>{role}</div>
        </div>

        <div
          style={{
            fontFamily: "Geist Mono",
            fontSize: 22,
            color: MUTED,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span>{proof}</span>
          <span style={{ color: BRAND }}>dennys.mandit.com.br</span>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}

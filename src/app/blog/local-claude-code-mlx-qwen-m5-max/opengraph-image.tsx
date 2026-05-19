import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Local Claude Code agents on M5 Max with MLX and Qwen3.6";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#050505",
          color: "#f2f0ea",
          fontFamily:
            'ui-monospace, "SFMono-Regular", "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "100% 32px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 28, zIndex: 1 }}>
          <div style={{ fontSize: 34, color: "#8f8f8f" }}>{">_ audex.dev"}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              maxWidth: 920,
            }}
          >
            <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.05 }}>
              Local Claude Code Agents
            </div>
            <div style={{ fontSize: 36, color: "#c8c8c8" }}>MLX + Qwen3.6 on M5 Max</div>
          </div>
          <div style={{ fontSize: 28, color: "#9d9d9d" }}>
            35B-A3B vs 27B controlled TypeScript benchmark
          </div>
        </div>
      </div>
    ),
    size,
  );
}

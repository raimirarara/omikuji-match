import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "edge",
}

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        2024年の運勢を占おう！
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

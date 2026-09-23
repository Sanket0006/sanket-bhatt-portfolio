import { NextResponse } from "next/server";
import { getTranscriptUrl } from "@/lib/content";

export const dynamic = "force-dynamic";

const NOT_AVAILABLE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Transcript not available — Sanket Bhatt</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #05070d;
    color: #eef1f8;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 24px;
  }
  .eyebrow {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #6d5bff;
    margin-bottom: 14px;
  }
  h1 { font-size: clamp(28px, 5vw, 44px); font-weight: 600; margin-bottom: 14px; }
  p { color: #8b93a7; max-width: 40ch; margin: 0 auto 28px; line-height: 1.6; }
  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #eef1f8;
    color: #05070d;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    padding: 12px 22px;
    border-radius: 100px;
  }
</style>
</head>
<body>
  <div>
    <div class="eyebrow">404</div>
    <h1>Transcript not available yet</h1>
    <p>This link will show my academic transcript once it's uploaded — check back soon, or reach out directly if you need it now.</p>
    <a href="/">Back home</a>
  </div>
</body>
</html>`;

function notAvailable() {
  return new NextResponse(NOT_AVAILABLE_HTML, {
    status: 404,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function GET() {
  const url = await getTranscriptUrl();
  if (!url) return notAvailable();

  const upstream = await fetch(url);
  if (!upstream.ok || !upstream.body) return notAvailable();

  return new NextResponse(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Sanket-Bhatt-Transcript.pdf"',
      "Cache-Control": "no-store",
    },
  });
}

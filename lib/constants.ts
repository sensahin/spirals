export const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://spirals-kappa.vercel.app/api/webhook"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/webhook`
    : `${process.env.NGROK_URL}/api/webhook`;

export const DEFAULT_PATTERN =
  "https://54fbthi1m2t7mbyo.public.blob.vercel-storage.com/QsoHp2g-gPCuOPrG36ue2aV9SjKKLmGGdIvrjO.png";

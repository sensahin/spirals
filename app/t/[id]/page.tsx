import { kv } from "@vercel/kv";
import { notFound } from "next/navigation";
import FormRSC from "@/components/form-rsc";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}): Promise<Metadata | undefined> {
  const data = await kv.hgetall<{ prompt: string; image?: string }>(params.id);
  if (!data) {
    return;
  }

  const title = `Silüet: ${data.prompt}`;
  const description = `Bu prompt kullanilarak Ataturk silueti olusturuldu: ${data.prompt}`;
  const image = data.image || "https://atasilueti.com/opengraph-image.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@sengpt",
    },
  };
}

export default async function Results({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const data = await kv.hgetall<{
    prompt: string;
    pattern?: string;
    image?: string;
  }>(params.id);

  if (!data) {
    notFound();
  }
  return (
    <FormRSC
      prompt={data.prompt}
      {...(data?.pattern && { pattern: data.pattern })}
      image={data.image || null}
    />
  );
}

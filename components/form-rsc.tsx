import Form from "@/components/form";
import PhotoBooth from "@/components/photo-booth";
import { CountDisplay, GeneratedCount } from "./generated-count";
import { Suspense } from "react";

export default function FormRSC({
  prompt,
  pattern,
  image,
}: {
  prompt?: string;
  pattern?: string;
  image: string | null;
}) {
  return (
    <div className="z-10 w-full max-w-xl px-2.5 xl:px-0">
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Atatürk Silüeti
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Yapay zeka kullanarak Atatürk silüeti oluşturabilirsiniz. Arka plan seçip hazır promptlardan kullanabilirsiniz ya da kendi promptunuzu yazabilirsiniz.
      </p>
      <Form promptValue={prompt} patternValue={pattern} />
      <Suspense fallback={<CountDisplay />}>
        <GeneratedCount />
      </Suspense>
      <PhotoBooth image={image} />
    </div>
  );
}

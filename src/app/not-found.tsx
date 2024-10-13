import Watermark from "@/components/watermark";

export default function Page() {
  return (
    <main className="bg-teal-100 flex flex-col h-screen">
      <Watermark />
      <section className="flex-1 flex flex-col gap-3 items-center justify-center">
        <h1 className="text-teal-600 text-9xl font-light">404</h1>
        <h2 className="text-xl text-gray-600">
          Sorry, we couldn&apos;t find your page.
        </h2>
      </section>
    </main>
  );
}
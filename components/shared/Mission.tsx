import { Quote } from "lucide-react";

function Mission() {
  return (
    <section className="relative overflow-hidden bg-background px-margin py-20 md:py-28 lg:py-32">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Quote className="mx-auto mb-6 h-12 w-12 text-primary-container md:mb-8 md:h-16 md:w-16" />

        <h2 className="mb-8 text-3xl font-headline-lg uppercase leading-tight sm:text-4xl md:text-4xl lg:text-4xl">
          &ldquo;I don&apos;t sell management. I sell{" "}
          <span className="bg-primary-container px-2 text-black">Outcomes</span>
          . My systems are built to endure market shifts and algorithm
          updates.&rdquo;
        </h2>

        <p className="text-sm font-label-bold uppercase tracking-[0.2em] text-primary-container sm:text-base">
          — Tushar K, Performance Architect
        </p>
      </div>

      <div className="data-grid-line pointer-events-none absolute inset-0 opacity-5" />
    </section>
  );
}

export default Mission;

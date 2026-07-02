import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <>
      <section className="relative min-h-204.75 flex flex-col justify-center px-margin overflow-hidden data-grid-line">
        <div className="max-w-container-max mx-auto  w-[80%] py-20 relative z-10">
          <div className="inline-block bg-primary-container text-on-primary px-3 py-1 font-label-mono mb-6 uppercase">
            Status: System Live / PPC Specialist
          </div>
          <h1 className="font-display-lg text-[64px] md:text-display-lg leading-none uppercase mb-8 max-w-4xl tracking-tighter">
            Precision PPC that{" "}
            <span className="text-primary-container">Scales Brands</span>
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl mb-10 text-on-surface-variant">
            Eliminate waste. Maximize yield. I architect high-performance paid
            media systems for aggressive brands ready to dominate their vertical
            through data-led execution.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="bg-primary-container text-on-primary px-10 py-5 font-label-bold text-lg uppercase flex items-center gap-3 hover:bg-white transition-colors group"
            >
              Initiate Audit
              <span
                className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                data-icon="arrow_forward"
              >
                <ArrowRight />
              </span>
            </Link>
            <Link
              href="/calculator"
              className="border-2 border-white text-white px-10 py-5 font-label-bold text-lg uppercase hover:bg-primary-container hover:border-primary-container hover:text-on-primary transition-colors"
            >
              Calculate Expected Returns
            </Link>
          </div>
        </div>

        <div
          className="absolute right-0 bottom-0 w-1/3 h-full opacity-20 pointer-events-none hidden lg:block"
          data-alt="A high-contrast industrial blueprint of a complex circuit board integrated with stock market data visualizations. The aesthetic is monochromatic with Cyber Yellow highlights, feeling high-tech, engineered, and precise. Sharp lines and technical annotations are scattered throughout."
          style={{
            backgroundImage: 'url("./background.jpg")',
          }}
        ></div>
      </section>

      <div className="h-4 w-full hazard-stripe"></div>
    </>
  );
}

export default Hero;

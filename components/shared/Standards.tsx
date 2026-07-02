import { ShieldCheck } from "lucide-react";

function Standards() {
  return (
    <section
      id="standards-section"
      className="py-24 px-margin flex items-center bg-background"
    >
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-gutter">
          <div>
            <h2 className="font-label-mono text-primary-container uppercase mb-2">
              Performance_Logs
            </h2>
            <h3 className="font-headline-lg text-headline-lg uppercase tracking-tight">
              Execution Standards
            </h3>
          </div>
          <div className="font-label-mono text-on-surface-variant max-w-xs text-right">
            Relentless optimization and hands-on account management. NO FLUFF.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 border border-surface-variant p-8 relative flex flex-col justify-between min-h-75 group hover:border-primary-container transition-colors">
            <div className="absolute top-0 right-0 h-1 bg-hazard-stripe w-32"></div>
            <span
              className="material-symbols-outlined text-primary-container text-4xl"
              data-icon="monitoring"
            >
              monitoring
            </span>
            <div>
              <div className="text-6xl md:text-8xl font-black text-white mb-2">
                ZERO
              </div>
              <div className="font-label-bold uppercase text-on-surface-variant">
                Tolerance for Wasted Ad Spend
              </div>
            </div>
          </div>

          <div className="md:col-span-4 border border-surface-variant p-8 flex flex-col justify-between group hover:border-primary-container transition-colors bg-surface">
            <span
              className="material-symbols-outlined text-primary-container text-4xl"
              data-icon="speed"
            >
              speed
            </span>
            <div>
              <div className="text-5xl font-black text-white mb-2">48 HRS</div>
              <div className="font-label-bold uppercase text-on-surface-variant">
                To Complete Campaign Launch
              </div>
            </div>
          </div>

          <div className="md:col-span-4 border border-surface-variant p-8 flex flex-col justify-between group hover:border-primary-container transition-colors bg-surface">
            <span
              className="material-symbols-outlined text-primary-container text-4xl"
              data-icon="database"
            >
              database
            </span>
            <div>
              <div className="text-4xl font-black text-white mb-2 uppercase">
                Manual Care
              </div>
              <div className="font-label-bold uppercase text-on-surface-variant">
                No set-it-and-forget-it automation
              </div>
            </div>
          </div>

          <div className="md:col-span-8 border border-surface-variant p-8 flex flex-col md:flex-row items-center gap-8 group hover:border-primary-container transition-colors">
            <div className="w-full md:w-1/2">
              <div className="text-5xl font-black text-white mb-2">A / B</div>
              <div className="font-label-bold uppercase text-on-surface-variant">
                Continuous Ad Copy & Creative Testing
              </div>
            </div>
            <div className="w-full h-32 bg-surface-container relative overflow-hidden border border-surface-variant">
              <div
                className="absolute bottom-0 left-0 w-full bg-primary-container opacity-50"
                style={{ height: "40%" }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-full bg-hazard-stripe opacity-20"
                style={{ height: "40%" }}
              ></div>
              <div className="absolute inset-0  flex items-center justify-center font-label-mono text-white">
                <ShieldCheck size={42} color="yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Standards;

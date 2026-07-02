"use client";
import {
  compactCurrency,
  currency,
  MAX_OPTIMIZED_RATE,
  OPTIMIZATION_MULTIPLIER,
} from "@/constants";
import { useMemo, useState } from "react";
import Slider from "./Slider";
import Link from "next/link";

function CalculatorSection() {
  const [spend, setSpend] = useState(10000);
  const [cpc, setCpc] = useState(2.5);
  const [convRate, setConvRate] = useState(2.0);
  const [aov, setAov] = useState(150);

  const results = useMemo(() => {
    const safeCpc = cpc > 0 ? cpc : 0.1;
    const clicks = spend / safeCpc;

    const currentRevenue = clicks * (convRate / 100) * aov;

    const optimizedRate = Math.min(
      convRate * OPTIMIZATION_MULTIPLIER,
      MAX_OPTIMIZED_RATE,
    );
    const optimizedRevenue = clicks * (optimizedRate / 100) * aov;

    const untappedRevenue = Math.max(optimizedRevenue - currentRevenue, 0);
    const roi = spend > 0 ? (untappedRevenue / spend) * 100 : 0;

    const maxVal = Math.max(currentRevenue, optimizedRevenue, 1);
    const currentBarPct = Math.max((currentRevenue / maxVal) * 100, 4);
    const optimizedBarPct = Math.max((optimizedRevenue / maxVal) * 100, 4);

    return {
      clicks,
      currentRevenue,
      optimizedRevenue,
      untappedRevenue,
      roi,
      currentBarPct,
      optimizedBarPct,
    };
  }, [spend, cpc, convRate, aov]);

  return (
    <main className="grow flex flex-col relative w-full pt-12 pb-24 bg-black">
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 w-full z-10 relative">
        <div className="mb-12 border-l-4 border-amber-400 pl-6 relative">
          <div
            className="absolute top-0 right-0 w-32 h-2"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #f59e0b, #f59e0b 10px, #111 10px, #111 20px)",
            }}
          />
          <h1 className="font-mono text-4xl md:text-5xl text-white uppercase mb-4 tracking-tighter font-black">
            Quantify Your <br />
            <span className="text-amber-400">Scale Potential</span>
          </h1>
          <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest max-w-2xl">
            <span className="text-red-500 font-bold">&gt; WARNING:</span> STOP
            LEAVING MONEY ON THE TABLE. ADJUST THE VARIABLES BELOW TO PROJECT
            UNTAPPED REVENUE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-neutral-900 border border-neutral-700 p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-neutral-700" />
              <h2 className="font-mono text-xs font-bold uppercase text-neutral-300 mb-6 tracking-wider">
                Variable Configuration
              </h2>

              <div className="space-y-8">
                <Slider
                  label="Monthly ad spend"
                  value={spend}
                  onChange={setSpend}
                  min={1000}
                  max={100000}
                  step={1000}
                  displayValue={currency(spend)}
                />
                <Slider
                  label="Avg. CPC ($)"
                  value={cpc}
                  onChange={setCpc}
                  min={0.1}
                  max={10}
                  step={0.1}
                  displayValue={`$${cpc.toFixed(2)}`}
                />
                <Slider
                  label="Conversion rate (%)"
                  value={convRate}
                  onChange={setConvRate}
                  min={0.1}
                  max={15}
                  step={0.1}
                  displayValue={`${convRate.toFixed(1)}%`}
                />
                <Slider
                  label="Avg. order value ($)"
                  value={aov}
                  onChange={setAov}
                  min={20}
                  max={1000}
                  step={10}
                  displayValue={`$${aov}`}
                />
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800">
                <div className="font-mono text-xs text-neutral-500 mb-2">
                  SYSTEM STATUS:
                </div>
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
                  <span className="w-2 h-2 bg-amber-400 block animate-pulse rounded-full" />
                  LIVE ARCHITECTURE READY
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-neutral-900 border border-neutral-700 p-6 flex flex-col justify-between min-h-40">
                <div className="font-mono text-xs uppercase text-neutral-400 mb-2">
                  Current projected revenue
                </div>
                <div className="font-mono text-3xl md:text-4xl text-white">
                  {currency(Math.round(results.currentRevenue))}
                </div>
                <div className="font-mono text-[10px] uppercase text-neutral-600 mt-auto border-t border-neutral-800 pt-2">
                  Baseline trajectory
                </div>
              </div>

              <div className="bg-neutral-950 border-2 border-amber-400 p-6 relative flex flex-col justify-between min-h-40">
                <div className="absolute top-0 right-0 bg-amber-400 text-black font-mono text-[10px] px-2 py-1 uppercase font-bold">
                  Optimized system
                </div>
                <div className="font-mono text-xs uppercase text-amber-400 mb-2">
                  Untapped revenue (monthly)
                </div>
                <div className="font-mono text-3xl md:text-4xl text-amber-400">
                  {currency(Math.round(results.untappedRevenue))}
                </div>
                <div className="font-mono text-[10px] uppercase text-neutral-600 mt-auto border-t border-neutral-800 pt-2 flex justify-between">
                  <span>Projected ROI</span>
                  <span className="text-amber-400">
                    {results.roi.toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 p-6 grow flex flex-col relative min-h-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-neutral-700" />
              <h3 className="font-mono text-xs font-bold uppercase text-neutral-300 mb-8 tracking-wider">
                Performance delta visualization
              </h3>
              <div className="grow flex items-end justify-center gap-16 md:gap-32 px-4 pb-8 relative">
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between pb-8 z-0">
                  <div className="w-full h-px bg-neutral-800" />
                  <div className="w-full h-px bg-neutral-800" />
                  <div className="w-full h-px bg-neutral-800" />
                  <div className="w-full h-px bg-neutral-800" />
                </div>

                <div className="relative flex flex-col items-center z-10 w-24">
                  <div className="absolute -top-8 font-mono text-xs text-neutral-400">
                    {compactCurrency(results.currentRevenue)}
                  </div>
                  <div
                    className="w-full bg-neutral-700 border border-neutral-600 transition-all duration-500 ease-out"
                    style={{ height: `${results.currentBarPct * 2.4}px` }}
                  />
                  <div className="mt-4 font-mono text-xs uppercase text-neutral-300 text-center font-bold">
                    Baseline
                    <br />
                    Operations
                  </div>
                </div>

                <div className="relative flex flex-col items-center z-10 w-32">
                  <div className="absolute -top-10 font-mono text-xs font-bold text-amber-400 bg-neutral-950 px-2 py-1 border border-amber-400">
                    {compactCurrency(results.optimizedRevenue)}
                  </div>
                  <div
                    className="w-full border-2 border-amber-400 transition-all duration-500 ease-out"
                    style={{
                      height: `${results.optimizedBarPct * 2.4}px`,
                      backgroundImage:
                        "repeating-linear-gradient(45deg, #f59e0b, #f59e0b 10px, #78350f 10px, #78350f 20px)",
                    }}
                  />
                  <div className="mt-4 font-mono text-xs uppercase text-amber-400 text-center font-bold">
                    Optimized
                    <br />
                    Architecture
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Link
                href="/contact"
                className="bg-amber-400 text-black font-mono text-sm font-bold uppercase px-8 py-5 hover:bg-white transition-all duration-150 w-full md:w-auto flex items-center justify-center gap-2 group"
              >
                Initialize system audit
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CalculatorSection;

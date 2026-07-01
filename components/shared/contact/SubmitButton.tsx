import { Zap } from "lucide-react";

export default function SubmitButton() {
  return (
    <button
      type="submit"
      className="w-full bg-primary-container text-on-primary-fixed py-5 text-label-bold font-label-bold uppercase flex items-center justify-center gap-4 hover:bg-white hover:text-black hover:scale-[1.01] transition-all group overflow-hidden relative"
    >
      <span className="relative z-10">INITIALIZE SYSTEM AUDIT</span>

      <span className="cursor-pointer material-symbols-outlined relative z-10 group-hover:translate-x-2 transition-transform">
        <Zap />
      </span>

      <div className="absolute inset-0 hazard-border opacity-0 group-hover:opacity-10 transition-opacity" />
    </button>
  );
}

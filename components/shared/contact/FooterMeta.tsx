export default function FooterMeta() {
  return (
    <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-label-mono font-label-mono text-[10px] uppercase opacity-40">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        SECURE CONNECTION ESTABLISHED
      </div>
      <div>ENCRYPTION: AES-256-INDUSTRIAL</div>
      <div>LAST_OPTIMIZATION: 04:22:11</div>
    </div>
  );
}

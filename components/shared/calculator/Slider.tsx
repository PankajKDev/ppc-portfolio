
interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  displayValue: ()=>string | number;
}

export default function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  displayValue,
}: SliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <label className="font-mono text-xs uppercase tracking-wider text-neutral-400">
          {label}
        </label>
        <span className="font-mono text-sm font-bold text-amber-400">
          {/* Executing the function here so React can render the returned number */}
          {displayValue()}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 appearance-none bg-neutral-800 accent-amber-400 cursor-pointer"
      />
    </div>
  );
}

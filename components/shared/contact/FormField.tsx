import { LucideIcon } from "lucide-react";

export default function FormField({
  id,
  icon,
  label,
  placeholder,
  value,
  onChangeHandler,
  error,
  type = "text",
}: {
  id: "email" | "name" | "requirement";
  icon: LucideIcon;
  label: string;
  placeholder: string;
  value: string | null;
  onChangeHandler: (
    field: "email" | "name" | "requirement",
    value: string | boolean | null,
  ) => void;
  error?: string;
  type?: string;
}) {
  const IconComponent = icon;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-label-mono text-label-mono uppercase text-primary-container flex items-center gap-2"
      >
        <span className="material-symbols-outlined text-[14px]">
          <IconComponent />
        </span>
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value ?? ""}
        onChange={(e) => onChangeHandler(id, e.target.value)}
        required
        placeholder={placeholder}
        className={`bg-background border-2 text-on-surface font-label-mono px-4 py-3 outline-none input-focus-glow transition-all ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-outline-variant focus:border-primary-container"
        }`}
      />

      <span className="text-red-500 text-xs font-label-mono block min-h-4 mt-1">
        {error}
      </span>
    </div>
  );
}

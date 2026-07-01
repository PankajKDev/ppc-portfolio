import { LucideIcon } from "lucide-react";

export default function FormField({
  id,
  icon,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  icon: LucideIcon;
  label: string;
  placeholder: string;
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
        required
        placeholder={placeholder}
        className="bg-background border-2 border-outline-variant text-on-surface font-label-mono px-4 py-3 outline-none focus:border-primary-container input-focus-glow transition-all"
      />
    </div>
  );
}

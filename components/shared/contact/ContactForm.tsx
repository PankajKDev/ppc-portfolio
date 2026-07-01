import FormField from "./FormField";
import SubmitButton from "./SubmitButton";
import { Mail, User } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="space-y-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          id="name"
          icon={User}
          label="01_NAME"
          placeholder="IDENTIFY YOURSELF"
        />

        <FormField
          id="email"
          icon={Mail}
          label="02_COMMUNICATION_LINE"
          placeholder="EMAIL@PROTOCOL.COM"
          type="email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="requirement"
          className="font-label-mono text-label-mono uppercase text-primary-container flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[14px]">
            terminal
          </span>
          03_OBJECTIVES
        </label>

        <textarea
          id="requirement"
          rows={4}
          required
          placeholder="DEFINE YOUR GROWTH REQUIREMENTS AND CURRENT AD SPEND BOTTLE-NECKS..."
          className="bg-background border-2 border-outline-variant text-on-surface font-label-mono px-4 py-3 outline-none focus:border-primary-container input-focus-glow transition-all resize-none"
        />
      </div>

      <SubmitButton />
    </form>
  );
}

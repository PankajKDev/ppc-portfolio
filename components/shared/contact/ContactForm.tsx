"use client";
import { useFormDataStore } from "@/stores/formData.store";
import "react-toastify/dist/ReactToastify.css";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";
import { Mail, User } from "lucide-react";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function ContactForm() {
  const { name, email, requirement, setField, setFieldEmpty } =
    useFormDataStore();
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    requirement: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", requirement: "" };
    if (lastName.trim().length != 0) {
      alert("bot");
      return;
    }

    // Name
    if (!name || name.trim().length < 2) {
      newErrors.name = "ERR: IDENTIFICATION REQUIRED (MIN 2 CHARS)";
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "ERR: INVALID PROTOCOL SUPPLIED";
      isValid = false;
    }

    // Requirement Validation
    if (!requirement || requirement.trim().length < 10) {
      newErrors.requirement = "ERR: INSUFFICIENT DATA (MIN 10 CHARS)";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, requirement, email }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("01_TRANSMISSION_SUCCESSFUL: We will be in contact soon");
        setFieldEmpty();
      } else {
        toast.error(
          data.error || "ERR: TRANSMISSION_REJECTED : Error sending form",
        );
      }
    } catch (e) {
      toast.error("ERR: NETWORK_DISCONNECT");
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-3 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          id="name"
          value={name}
          onChangeHandler={setField}
          icon={User}
          error={errors.name}
          label="01_NAME"
          placeholder="IDENTIFY YOURSELF"
        />

        <FormField
          id="email"
          icon={Mail}
          error={errors.email}
          value={email}
          onChangeHandler={setField}
          label="02_COMMUNICATION_LINE"
          placeholder="EMAIL@PROTOCOL.COM"
          type="email"
        />
      </div>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden={true}
        className="hidden"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

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
          value={requirement ?? ""}
          onChange={(e) => setField("requirement", e.target.value)}
          rows={4}
          placeholder="DEFINE YOUR GROWTH REQUIREMENTS AND CURRENT AD SPEND BOTTLE-NECKS..."
          className={`bg-background border-2 text-on-surface font-label-mono px-4 py-3 outline-none input-focus-glow transition-all resize-none ${
            errors.requirement
              ? "border-red-500 focus:border-red-500"
              : "border-outline-variant focus:border-primary-container"
          }`}
        />
        <span className="text-red-500 text-xs font-label-mono block min-h-4 mt-1">
          {errors.requirement}
        </span>
      </div>

      <SubmitButton />
      <ToastContainer
        position="bottom-right"
        theme="dark"
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        autoClose={2000}
        hideProgressBar={false}
        className="p-2"
        toastClassName={(context) =>
          context?.type === "error"
            ? "hazard-border-error bg-black text-red-500 font-label-mono rounded-none shadow-lg relative flex p-1 min-h-10 justify-between overflow-hidden cursor-pointer"
            : "hazard-border bg-black text-primary-container font-label-mono rounded-none shadow-lg relative flex p-1 min-h-10 justify-between overflow-hidden cursor-pointer"
        }
        progressClassName={(context) =>
          context?.type === "error"
            ? "hazard-stripe-error Toastify__progress-bar"
            : "hazard-stripe Toastify__progress-bar"
        }
      />
    </form>
  );
}

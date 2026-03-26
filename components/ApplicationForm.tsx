"use client";

import { useState, useRef, type FormEvent, type DragEvent } from "react";

export default function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (validTypes.includes(file.type) && file.size <= 10 * 1024 * 1024) {
        if (fileInputRef.current) {
          const dt = new DataTransfer();
          dt.items.add(file);
          fileInputRef.current.files = dt.files;
        }
        setFileName(file.name);
      }
    }
  };

  const handleFileChange = () => {
    const file = fileInputRef.current?.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
        <div className="bg-navy p-6 relative">
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal to-gold" />
          <h3 className="font-display text-xl font-semibold text-white">
            Apply for This Position
          </h3>
          <p className="text-text-light text-sm mt-1">
            Physical Therapist &middot; Oshkosh, WI &middot; Full or Part-Time
          </p>
        </div>
        <div className="p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-display text-2xl font-semibold text-text-dark mb-3">
            Application Received!
          </h4>
          <p className="text-text-mid leading-relaxed">
            Thank you for your interest in joining Fox Valley PT. We&apos;ll review your
            application and be in touch within 3 business days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
      <div className="bg-navy p-6 relative">
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal to-gold" />
        <h3 className="font-display text-xl font-semibold text-white">
          Apply for This Position
        </h3>
        <p className="text-text-light text-sm mt-1">
          Physical Therapist &middot; Oshkosh, WI &middot; Full or Part-Time
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 bg-cream border border-border rounded-lg text-text-dark placeholder:text-text-light focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition"
            placeholder="Jane Smith"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2.5 bg-cream border border-border rounded-lg text-text-dark placeholder:text-text-light focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition"
            placeholder="jane@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2.5 bg-cream border border-border rounded-lg text-text-dark placeholder:text-text-light focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition"
            placeholder="(920) 555-0100"
          />
        </div>

        {/* Position Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-text-dark mb-1.5">
            Position Type <span className="text-red-500">*</span>
          </label>
          <select
            id="type"
            name="type"
            required
            defaultValue=""
            className="w-full px-4 py-2.5 bg-cream border border-border rounded-lg text-text-dark focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Open to Either">Open to Either</option>
          </select>
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1.5">
            Resume / CV <span className="text-red-500">*</span>
          </label>
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative cursor-pointer border-2 border-dashed rounded-lg p-6 text-center transition ${
              dragActive
                ? "border-teal bg-teal/5"
                : fileName
                ? "border-teal/50 bg-teal/5"
                : "border-border hover:border-teal/40"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              name="resume"
              required
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              className="hidden"
            />
            {fileName ? (
              <div className="flex items-center justify-center gap-2 text-teal">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-medium text-sm">{fileName}</span>
              </div>
            ) : (
              <>
                <svg className="w-8 h-8 mx-auto text-text-light mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <p className="text-sm text-text-mid">
                  <span className="font-medium text-teal">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-text-light mt-1">PDF, DOC, or DOCX (max 10MB)</p>
              </>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-1.5">
            Anything else?
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full px-4 py-2.5 bg-cream border border-border rounded-lg text-text-dark placeholder:text-text-light focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition resize-none"
            placeholder="Tell us a bit about yourself or ask a question..."
          />
        </div>

        {errorMessage && (
          <p className="text-red-600 text-sm">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-teal hover:bg-teal-light text-white font-bold py-3.5 px-6 rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed text-base"
        >
          {status === "submitting" ? (
            <span className="inline-flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending Application...
            </span>
          ) : (
            "Send My Application \u2192"
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-text-light">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Your information is private. We&apos;ll respond within 3 business days.</span>
        </div>
      </form>
    </div>
  );
}

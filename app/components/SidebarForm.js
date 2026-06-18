"use client";

import { useState } from "react";
import Button from "./Button";

export default function SidebarForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "callback" }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error?.message || "Callback request failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-ia-bg-light border border-ia-border rounded-md p-8 text-center">
        <span className="text-[32px] text-ia-blue block mb-4">✓</span>
        <h3 className="text-[18px] font-bold text-white mb-2">Request Received</h3>
        <p className="text-[14px] text-ia-text-secondary leading-relaxed">
          Thank you, {formData.name}. One of our partners will call you back shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-ia-bg-light border border-ia-border rounded-md p-8 sticky top-[100px]">
      <h3 className="text-[18px] font-bold text-white mb-6">
        Speak to an Expert
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="side-name" className="text-[13px] font-semibold text-ia-text-primary mb-1.5 uppercase tracking-wide">
            Your Name *
          </label>
          <input
            type="text"
            id="side-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
            className="h-12 px-4 text-[15px] bg-ia-navy-alt border border-ia-border-strong rounded-sm focus:border-ia-blue focus:shadow-input outline-none transition-all duration-200"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="side-email" className="text-[13px] font-semibold text-ia-text-primary mb-1.5 uppercase tracking-wide">
            Email Address *
          </label>
          <input
            type="email"
            id="side-email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email"
            className="h-12 px-4 text-[15px] bg-ia-navy-alt border border-ia-border-strong rounded-sm focus:border-ia-blue focus:shadow-input outline-none transition-all duration-200"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="side-phone" className="text-[13px] font-semibold text-ia-text-primary mb-1.5 uppercase tracking-wide">
            Phone Number *
          </label>
          <input
            type="tel"
            id="side-phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Phone Number"
            className="h-12 px-4 text-[15px] bg-ia-navy-alt border border-ia-border-strong rounded-sm focus:border-ia-blue focus:shadow-input outline-none transition-all duration-200"
          />
        </div>

        {error && (
          <p className="text-[13px] text-red-400 text-center font-medium bg-red-950/20 border border-red-500/20 p-2 rounded-sm">
            {error}
          </p>
        )}

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full mt-2"
          disabled={loading}
        >
          {loading ? "Sending..." : "Request a Callback"}
        </Button>
      </form>

      <hr className="my-6 border-ia-border" />
      <div className="text-center text-[14px] text-ia-text-secondary leading-relaxed">
        <p className="mb-2">Or message us directly:</p>
        <a 
          href="https://wa.me/447828762984" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-white font-bold hover:text-ia-blue transition-colors mb-4 justify-center w-full"
        >
          <svg className="w-4 h-4 text-[#25D366] fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.488 5.35 1.489 5.503 0 9.979-4.477 9.982-9.983.001-2.667-1.036-5.176-2.92-7.062C17.17 1.71 14.665.673 12.003.673 6.5 0.673 2.023 5.15 2.02 10.656c-.001 2.054.499 3.69 1.493 5.358L2.53 21.45l5.117-1.341zM17.65 14.86c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.29-.48-2.45-1.52-.9-0.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.25-.6-.5-.52-.67-.53H8.3c-.2 0-.53.07-.8.38-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 0.73.31 1.3.5 1.74.64.73.23 1.39.2 1.92.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.29.18-1.43-.07-.15-.27-.23-.57-.38z" />
          </svg>
          +44 782 876 2984
        </a>
        <a href="mailto:partner@internalaccountants.com" className="block text-ia-text-muted hover:text-ia-blue underline">
          partner@internalaccountants.com
        </a>
      </div>
    </div>
  );
}

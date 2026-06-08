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
        <p className="mb-1">Or call us directly:</p>
        <a href="tel:+447828762984" className="block text-white font-bold hover:text-ia-blue transition-colors mb-2">
          +44 782 876 2984
        </a>
        <a href="mailto:partners@internalaccountants.com" className="block text-ia-text-muted hover:text-ia-blue underline">
          partners@internalaccountants.com
        </a>
      </div>
    </div>
  );
}

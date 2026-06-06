"use client";

import { useState } from "react";
import Button from "../components/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-ia-bg-light border border-ia-border rounded-md p-10 text-center shadow-card scroll-reveal is-visible">
        <div className="w-16 h-16 bg-ia-blue/10 border border-ia-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-[32px] text-ia-blue leading-none">✓</span>
        </div>
        <h3 className="text-[22px] font-bold text-white mb-3">Message Received</h3>
        <p className="text-[16px] text-ia-text-secondary leading-relaxed max-w-[420px] mx-auto">
          Thank you, <strong>{formData.name}</strong>. Your enquiry regarding <strong>{formData.service || "our services"}</strong> has been sent to our partners. We aim to respond within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="full-name" className="text-[13px] font-semibold text-white mb-1.5 uppercase tracking-wider">
            Full Name *
          </label>
          <input
            type="text"
            id="full-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
            className="h-12 px-4 text-[15px] bg-ia-navy-alt border border-ia-border-strong rounded-[4px] focus:border-ia-blue focus:shadow-input outline-none transition-all duration-200 text-white placeholder:text-ia-text-muted"
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col">
          <label htmlFor="company-name" className="text-[13px] font-semibold text-white mb-1.5 uppercase tracking-wider">
            Company Name
          </label>
          <input
            type="text"
            id="company-name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Company Ltd"
            className="h-12 px-4 text-[15px] bg-ia-navy-alt border border-ia-border-strong rounded-[4px] focus:border-ia-blue focus:shadow-input outline-none transition-all duration-200 text-white placeholder:text-ia-text-muted"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email Address */}
        <div className="flex flex-col">
          <label htmlFor="email-address" className="text-[13px] font-semibold text-white mb-1.5 uppercase tracking-wider">
            Email Address *
          </label>
          <input
            type="email"
            id="email-address"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email Address"
            className="h-12 px-4 text-[15px] bg-ia-navy-alt border border-ia-border-strong rounded-[4px] focus:border-ia-blue focus:shadow-input outline-none transition-all duration-200 text-white placeholder:text-ia-text-muted"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label htmlFor="phone-number" className="text-[13px] font-semibold text-white mb-1.5 uppercase tracking-wider">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone-number"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Phone Number"
            className="h-12 px-4 text-[15px] bg-ia-navy-alt border border-ia-border-strong rounded-[4px] focus:border-ia-blue focus:shadow-input outline-none transition-all duration-200 text-white placeholder:text-ia-text-muted"
          />
        </div>
      </div>

      {/* Service of Interest */}
      <div className="flex flex-col">
        <label htmlFor="service-interest" className="text-[13px] font-semibold text-white mb-1.5 uppercase tracking-wider">
          Service of Interest *
        </label>
        <div className="relative">
          <select
            id="service-interest"
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full h-12 px-4 pr-10 text-[15px] bg-ia-navy-alt border border-ia-border-strong rounded-[4px] focus:border-ia-blue focus:shadow-input outline-none transition-all duration-200 text-white appearance-none"
          >
            <option value="">Select a service</option>
            <option value="Bookkeeping Services">Bookkeeping Services</option>
            <option value="Management Reporting">Management Reporting</option>
            <option value="Budgeting & Financial Planning">Budgeting & Financial Planning</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
          {/* Custom Select Arrow */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-ia-text-secondary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="message" className="text-[13px] font-semibold text-white mb-1.5 uppercase tracking-wider">
          Your Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe your requirements..."
          className="min-h-[140px] p-4 text-[15px] bg-ia-navy-alt border border-ia-border-strong rounded-[4px] focus:border-ia-blue focus:shadow-input outline-none transition-all duration-200 text-white placeholder:text-ia-text-muted resize-y"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-2">
        <Button type="submit" variant="primary" className="w-full justify-center">
          Send Message
        </Button>
      </div>

      <p className="text-[13px] text-ia-text-muted text-center mt-2">
        We aim to respond within 1 business day.
      </p>
    </form>
  );
}

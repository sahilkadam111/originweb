import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useState } from "react";
import contactConfig from "@/config/contactConfig";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", contactNo: "", email: "", message: "" });
  const [showMessage, setShowMessage] = useState(false);
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; contactNo?: string; email?: string }>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    // Clear field error as user types
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function validateForm() {
    const next: { name?: string; contactNo?: string; email?: string } = {};
    if (!form.name.trim()) next.name = "Name is required.";
    // allow only digits and require 10 digits
    if (!/^[0-9]{10}$/.test(form.contactNo)) next.contactNo = "Enter a 10-digit mobile number (digits only).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Clear previous status
    setStatus("idle");
    
    // Run validation
    if (!validateForm()) {
      setStatus("error");
      return;
    }
    
    setStatus("sending");
    try {
      // Include timestamp in the form data
      const formData = {
        timestamp: new Date().toISOString(),
        ...form
      };
      
      const GOOGLE_SCRIPT_URL = contactConfig.CONTACT_ENDPOINT;
      if (GOOGLE_SCRIPT_URL) {
        const res = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors", // Important for cross-origin requests to Google Scripts
          body: JSON.stringify(formData),
        });

        // Since we're using no-cors, we won't get an error response
        // Instead, we'll assume success if the request completes
        setStatus("sent");
        setForm({ name: "", contactNo: "", email: "", message: "" });
        } else {
        // Fallback to mailto with prefilled subject/body
        const subject = encodeURIComponent("Contact from website: " + form.name);
        // Use actual newlines and let encodeURIComponent escape them correctly
        const body = encodeURIComponent(
          `Name: ${form.name}\nContact: ${form.contactNo}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        );
        const mailtoUrl = `mailto:contact@originpodcast.in?subject=${subject}&body=${body}`;

        try {
          // Preferred: navigate directly to mailto (works in most browsers)
          window.location.href = mailtoUrl;
        } catch (err) {
          try {
            // Fallback: create an anchor and click it
            const a = document.createElement("a");
            a.href = mailtoUrl;
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            a.remove();
          } catch (err2) {
            // Final fallback: copy the email address to clipboard so user can paste it manually
            // Use standard Clipboard API if available
            if (typeof navigator !== "undefined" && 'clipboard' in navigator && typeof navigator.clipboard.writeText === 'function') {
              try {
                await navigator.clipboard.writeText("contact@originpodcast.in");
                alert("Could not open your mail client. The email address contact@originpodcast.in has been copied to your clipboard. Please send an email manually.");
              } catch (copyErr) {
                alert("Could not open your mail client. Please contact: contact@originpodcast.in");
              }
            } else {
              alert("Could not open your mail client. Please contact: contact@originpodcast.in");
            }
          }
        }

        setStatus("sent");
        setForm({ name: "", contactNo: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section data-section="contact" id="contact" aria-label="Contact" className="py-20 px-6 bg-gradient-to-b from-card/60 to-card/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text tracking-normal leading-relaxed mb-6">Contact & Collaborate</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
            Have an origin story, a collaboration idea, or studio inquiry? Use the form to reach out. We respond to thoughtful messages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Contact info + socials */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold">Studio & Booking</h3>
              <p className="text-sm text-muted-foreground mt-2">For bookings, press, and creative collaborations drop us a line.</p>

              <div className="mt-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a className="text-sm font-medium text-foreground" href="mailto:contact@originpodcast.in">contact@originpodcast.in</a>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">Available for remote interviews and limited in studio sessions.</div>
              </div>
            </div>



            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> We read every message. If you don't hear back in a week, please send a gentle follow up.
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="glass-card p-6 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="mt-1 block w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your full name"
                />
                {errors.name && <div className="mt-1 text-xs text-red-400">{errors.name}</div>}
              </div>

              <div>
                <label htmlFor="contactNo" className="block text-sm font-medium text-foreground">Contact No</label>
                <input
                  id="contactNo"
                  name="contactNo"
                  type="tel"
                  value={form.contactNo}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="mt-1 block w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your 10-digit mobile number"
                />
                {errors.contactNo && <div className="mt-1 text-xs text-red-400">{errors.contactNo}</div>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="mt-1 block w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your email address"
                />
                {errors.email && <div className="mt-1 text-xs text-red-400">{errors.email}</div>}
              </div>

              {/* Message is optional, reveal on demand */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                  <button
                    type="button"
                    aria-expanded={showMessage}
                    onClick={() => setShowMessage((s) => !s)}
                    className="text-sm text-accent hover:underline"
                  >
                    {showMessage ? 'Hide message' : 'Add message'}
                  </button>
                </div>

                {showMessage && (
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="mt-1 block w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tell us about the story, idea, or collaboration..."
                  />
                )}
              </div>

              <div className="flex items-center gap-3">
                <Button type="submit" variant="hero" className="px-5 py-2">
                  Send Message
                </Button>
                <div className="text-sm text-muted-foreground">
                  {status === "sent" && <span className="text-green-400">Thanks, we'll reply soon.</span>}
                  {status === "sending" && <span>Sending…</span>}
                  {status === "error" && <span className="text-red-400">Please fix the highlighted fields.</span>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
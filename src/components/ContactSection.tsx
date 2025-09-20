import { Button } from "@/components/ui/button";
import { Mail, Instagram, Twitter, Linkedin, Phone } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { name: "Email", icon: Mail, url: "mailto:sahil@theorigin.com", color: "text-blue-500" , label: "Studio inquiries" },
  { name: "Instagram", icon: Instagram, url: "#", color: "text-pink-500" , label: "Behind the scenes" },
  { name: "Twitter", icon: Twitter, url: "#", color: "text-sky-500" , label: "Episode updates" },
  { name: "LinkedIn", icon: Linkedin, url: "#", color: "text-blue-700" , label: "Professional network" },
  { name: "WhatsApp", icon: Phone, url: "https://wa.me/1234567890", color: "text-[#25D366]", label: "Message on WhatsApp" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      // Simulate submission (replace with real endpoint later)
      await new Promise((r) => setTimeout(r, 700));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section data-section="contact" id="contact" aria-label="Contact" className="py-20 px-6 bg-gradient-to-b from-card/60 to-card/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Contact & Collaborate</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
            Have an origin story, a collaboration idea, or studio inquiry? Use the form or reach out on socials — we respond to thoughtful messages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Contact info + socials */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold">Studio & Booking</h3>
              <p className="text-sm text-muted-foreground mt-2">For bookings, press, and creative collaborations — drop us a line.</p>

              <div className="mt-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a className="text-sm font-medium text-foreground" href="mailto:sahil@theorigin.com">sahil@theorigin.com</a>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">Available for remote interviews and limited in-studio sessions.</div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-sm font-semibold mb-3">Follow & Share</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.name} href={s.url} aria-label={s.label} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-transparent hover:bg-muted/10 transition-colors">
                      <Icon className={`${s.color} w-5 h-5`} />
                      <span className="text-sm">{s.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> We read every message. If you don't hear back in a week, please send a gentle follow-up.
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
                  className="mt-1 block w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="you@domain.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-1 block w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Tell us about the story, idea, or collaboration..."
                />
              </div>

              <div className="flex items-center gap-3">
                <Button type="submit" variant="hero" className="px-5 py-2">
                  Send Message
                </Button>
                <div className="text-sm text-muted-foreground">
                  {status === "sent" && <span className="text-green-400">Thanks — we'll reply soon.</span>}
                  {status === "sending" && <span>Sending…</span>}
                  {status === "error" && <span className="text-red-400">Please complete all fields.</span>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
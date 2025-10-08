import hostImage from "../assets/mehak-host.png";
import jasbirImage from "../assets/jasbir-host.png";
import { Mic, Radio, Headphones } from "lucide-react";

export default function HostSection({
  showTitle = true,
  hostName = "Mehak Painter (Host & Brand Persona)",
  hostBullets = [],
  hostDescription = "The voice and energy behind The Origin, leading conversations that inspire and connect, brings curiosity, creativity, and charisma to every episode, making space for entrepreneurs and changemakers to share their journeys.",
  hostImg,
  hostLinkedIn = "",
}: {
  showTitle?: boolean;
  hostName?: string;
  hostBullets?: string[];
  hostDescription?: string;
  hostImg?: string;
  hostLinkedIn?: string;
}) {
  const portraitSrc = hostImg ?? hostImage;
  return (
  <section data-section="host" className="py-12 px-6 bg-background relative">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-80 sm:w-96">
              <div className="rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
                <img src={portraitSrc} alt={`${hostName} Host`} className="w-full h-full object-cover" />
              </div>

              {/* Connect button (LinkedIn) - renders only when hostLinkedIn prop is provided */}
              {hostLinkedIn && (
                <a
                  href={hostLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
                  aria-label={`Connect with ${hostName} on LinkedIn`}
                >
                  <Mic className="inline-block w-4 h-4 mr-2 align-middle" /> Connect
                </a>
              )}
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-7">
            {showTitle && (
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text tracking-normal leading-relaxed mb-6">Meet the Host</h2>
              </div>
            )}

            {hostName && (
              <h3 className="text-2xl font-semibold text-foreground mb-4">{hostName}</h3>
            )}

            {hostBullets.map((b, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-2">
                {b}
              </p>
            ))}

            {hostDescription && (
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{hostDescription}</p>
            )}
  
            {/* social icons removed per request */}
          </div>
        </div>
      </div>
    </section>
  );
}

// Mirrored host section (image on right)
export function HostSectionMirrored({
  showTitle = true,
  hostName = "Jasbir Singh Rawat (Co-Host & Industry Mentor)",
  hostBullets = [],
  hostDescription = "Provides creative inputs, business support, and contributes to strengthening the podcast's foundation. Brings marketing and communication insights to shape engaging narratives, enhance audience connect, and ensure the podcast aligns with brand positioning. Supports in crafting compelling messaging, promotional strategies, and audience engagement plans to expand reach and impact.",
  hostImg,
  hostLinkedIn = "",
}: {
  showTitle?: boolean;
  hostName?: string;
  hostBullets?: string[];
  hostDescription?: string;
  hostImg?: string;
  hostLinkedIn?: string;
}) {
  const portraitSrc = hostImg ?? jasbirImage;
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Column first (left) */}
          <div className="lg:col-span-7 order-1 lg:order-1">
            {showTitle && (
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">Meet the Host</h2>
              </div>
            )}

            <h3 className="text-2xl font-semibold text-foreground mb-4">{hostName}</h3>

            {hostBullets.map((b, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-2">
                {b}
              </p>
            ))}

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{hostDescription}</p>
          </div>

          {/* Portrait Column on right */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-2">
            <div className="relative w-80 sm:w-96">
              <div className="rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
                <img src={portraitSrc} alt={`${hostName} Host mirrored`} className="w-full h-full object-cover" />
              </div>

              {/* Connect button (LinkedIn) - renders only when hostLinkedIn prop is provided */}
              {hostLinkedIn && (
                <a
                  href={hostLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
                  aria-label={`Connect with ${hostName} on LinkedIn`}
                >
                  <Mic className="inline-block w-4 h-4 mr-2 align-middle" /> Connect
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
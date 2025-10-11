import hostImage from "../assets/mehak-host.png";
import jasbirImage from "../assets/jasbir-host.png";
import { Mic, Radio, Headphones } from "lucide-react";

export default function HostSection({
  showTitle = true,
  hostName = "Mehak Painter (Host)",
  hostBullets = ["• Anchor and primary voice of The Origin."],
  hostDescription = "Responsible for content creation, hosting, guest interactions, and shaping the brand identity.",
  hostImg,
  hostLink,
}: {
  showTitle?: boolean;
  hostName?: string;
  hostBullets?: string[];
  hostDescription?: string;
  hostImg?: string;
  hostLink?: string;
}) {
  const portraitSrc = hostImg ?? hostImage;
  return (
  <section data-section="host" className="py-12 px-6 bg-background relative">

      <div className="max-w-7xl mx-auto relative z-10">
        {showTitle && (
          <div className="mb-6 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text tracking-normal leading-relaxed mb-6 md:text-center">Meet the Host</h2>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-80 sm:w-96">
              <div className="rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
                <img src={portraitSrc} alt={`${hostName} (Host)`} className="w-full h-full object-cover" />
              </div>

              {/* Connect button */}
              <a
                href={hostLink ?? "#contact"}
                aria-label={`Connect with ${hostName}`}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-xl text-sm font-semibold inline-flex items-center gap-2"
                target={hostLink ? "_blank" : undefined}
                rel={hostLink ? "noopener noreferrer" : undefined}
              >
                <span className="sr-only">Connect</span>
                <span>Connect</span>
              </a>
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-7">

            <h3 className="text-2xl font-semibold text-foreground mb-4">{hostName}</h3>

            {hostBullets.map((b, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-2">
                {b}
              </p>
            ))}

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{hostDescription}</p>
  
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
  hostName = "Jasbir Singh Rawat (Co-Host)",
  hostBullets = [
    "• Co-host and discussion partner.",
  ],
  hostDescription = "Provides creative inputs, business support, and contributes to strengthening the podcast's foundation.",
  hostImg,
  hostLink,
}: {
  showTitle?: boolean;
  hostName?: string;
  hostBullets?: string[];
  hostDescription?: string;
  hostImg?: string;
  hostLink?: string;
}) {
  const portraitSrc = hostImg ?? jasbirImage;
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Column first on desktop, but portrait should appear first on mobile */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {showTitle && (
              <div className="mb-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4 md:text-center">Meet the Host</h2>
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

          {/* Portrait Column on right (but show first on mobile) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="relative w-80 sm:w-96">
              <div className="rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
                <img src={portraitSrc} alt={`${hostName} (Host mirrored)`} className="w-full h-full object-cover" />
              </div>

              <a
                href={hostLink ?? "#contact"}
                aria-label={`Connect with ${hostName}`}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-xl text-sm font-semibold inline-flex items-center gap-2"
                target={hostLink ? "_blank" : undefined}
                rel={hostLink ? "noopener noreferrer" : undefined}
              >
                <span className="sr-only">Connect</span>
                <span>Connect</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
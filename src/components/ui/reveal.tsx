import { useEffect, useRef, useState, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export default function Reveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("transition-transform duration-700 ease-out opacity-0 translate-y-6", isVisible && "opacity-100 translate-y-0", className)}>
      {children}
    </div>
  );
}

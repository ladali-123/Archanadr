import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 4859, suffixText: "", plus: true, label: "Patient Recovery" },
  { value: 5, suffixText: "", plus: true, label: "Team of Mental Health Professionals" },
  { value: 15, suffixText: "Y", plus: true, label: "Experience" },
];

function useCountUp(target, start, duration = 1500) {
  const [count, setCount] = useState(1);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(1 + eased * (target - 1));
      setCount(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, start }) {
  const count = useCountUp(stat.value, start);

  return (
    <div
      className="
        flex flex-col items-center text-center
        border-t border-white/10 pt-6 first:border-t-0 first:pt-0
        sm:border-t-0 sm:pt-0
      "
    >
      <div className="flex items-start">
        <span className="text-4xl font-semibold leading-none tracking-tight text-[#f0d876] sm:text-5xl">
          {count.toLocaleString()}
          {stat.suffixText}
        </span>
        {stat.plus && (
          <span className="ml-1 mt-1 text-lg font-medium text-[#f0d876]/90 sm:text-xl">
            +
          </span>
        )}
      </div>
      <p className="mt-3 text-sm font-normal text-slate-100/90 sm:text-base">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsBanner() {
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div
        className="
          relative mx-auto max-w-6xl overflow-hidden rounded-[28px]
          bg-gradient-to-br from-[#5a1a7a] via-[#6b2591] to-[#4a1263]
          px-6 py-10 shadow-xl shadow-[#4a1263]/25
          sm:px-10 sm:py-12 lg:px-16 lg:py-14
        "
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full
         bg-white/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full
         bg-[#c9a227]/15 blur-3xl" />

        <div
          className="
            relative grid grid-cols-1 gap-8
            sm:grid-cols-3 sm:gap-6 sm:divide-x sm:divide-white/15
          "
        >
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
}
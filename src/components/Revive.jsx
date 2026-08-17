import { useState, useEffect, useRef, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "Dr. Archana Singh is an experienced, empathetic psychiatrist specializing in anxiety and depression. She's attentive, ensuring patient comfort and safety. Highly recommended for those seeking psychiatric consultation. Exceptional experience. Thank you.",
    name: "Harsh Mehta",
    context: "Visited for Anxiety and Depression",
  },
  {
    quote:
      "I was hesitant to see a psychiatrist, but Dr. Archana Singh made me feel completely at ease from the first session. Her calm approach and clear explanations helped me understand what I was going through.",
    name: "Priya Sharma",
    context: "Visited for Panic Disorder",
  },
  {
    quote:
      "Excellent listener and very thorough with diagnosis. Dr. Archana Singh took the time to understand my history before suggesting any treatment. My sleep and mood have improved a lot in just two months.",
    name: "Rohit Verma",
    context: "Visited for Insomnia and Stress",
  },
  {
    quote:
      "The clinic is professional and Dr. Archana Singh is genuinely caring. She followed up regularly and adjusted my treatment plan as needed. I finally feel like myself again.",
    name: "Sneha Kulkarni",
    context: "Visited for OCD",
  },
  {
    quote:
      "One of the best psychiatric consultations I've had. Dr. Archana Singh explained everything patiently to me and my family, which made the whole process much less stressful.",
    name: "Amit Rao",
    context: "Visited for Bipolar Disorder",
  },
];

const AUTOPLAY_MS = 5000;

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const timerRef = useRef(null);

  // Count-up state
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  const goTo = useCallback((i) => {
    setIndex(((i % REVIEWS.length) + REVIEWS.length) % REVIEWS.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  // Count-up animation
  useEffect(() => {
    const target = 5000;
    const duration = 2000; // 2 seconds

    const animate = (timestamp) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * target);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      startTimeRef.current = null;
    };
  }, []);

  // Touch handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) prev();
    else if (delta < -40) next();
    touchStartX.current = null;
  };

  const review = REVIEWS[index];

  return (
    <div className="w-full bg-[#F5F8FA] pt-1 pb-10 sm:pt-2 sm:pb-12 px-4 sm:px-8 lg:px-16">
      <div
        className="w-full max-w-7xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12">
            {/* Quote panel */}
            <div className="relative flex-1 md:min-h-[220px] flex flex-col justify-start md:justify-center px-2 sm:px-4 md:pl-4 pt-6 sm:pt-0">
              <Quote
                className="absolute top-2 sm:top-4 left-0 w-10 h-10 sm:w-12 sm:h-12 text-[#D7E0E7] rotate-180"
                strokeWidth={0}
                fill="currentColor"
              />
              <div
                key={index}
                className="relative z-10 animate-[fadeIn_0.5s_ease]"
              >
                <p
                  className="font-serif italic text-[#1C2B36] text-base sm:text-lg lg:text-lg
                   leading-relaxed pl-10 sm:pl-14"
                  style={{ fontFamily: "'Lora', Georgia, serif" }}
                >
                  {review.quote}
                </p>
                <p
                  className="mt-5 pl-10 sm:pl-14 text-lg sm:text-xl font-semibold italic 
                  text-[#0F5C73]"
                  style={{ fontFamily: "'Lora', Georgia, serif" }}
                >
                  – {review.name}{" "}
                  <span className="font-normal text-[#4B6373]">
                    ({review.context})
                  </span>
                </p>
              </div>
            </div>

            {/* Stat panel with animated counter */}
            <div className="flex items-center justify-center md:w-72 shrink-0">
              <div className="bg-white rounded-2xl shadow-md w-full max-w-xs md:w-60 py-8 px-6 
              flex flex-col items-center justify-center text-center">
                <div className="flex items-start justify-center">
                  <span className="text-[#1D5D9B] font-extrabold text-3xl sm:text-4xl tracking-tight">
                    {count.toLocaleString()}
                  </span>
                  <span className="text-[#1D5D9B] font-extrabold text-2xl sm:text-3xl leading-none
                   mt-1">
                    +
                  </span>
                </div>
                <span className="mt-3 text-[#1C2B36] text-base sm:text-lg font-medium">
                  Patients Treated
                </span>
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          <button
            aria-label="Previous review"
            onClick={prev}
            className="hidden sm:flex absolute left-[-3rem] lg:left-[-3.5rem] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white hover:bg-[#EFF3F6] shadow text-[#0F5C73] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5D9B]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next review"
            onClick={next}
            className="hidden sm:flex absolute right-[-3rem] lg:right-[-3.5rem] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white hover:bg-[#EFF3F6] shadow text-[#0F5C73] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5D9B]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D5D9B] ${
                i === index
                  ? "w-7 bg-[#1D5D9B]"
                  : "w-2.5 bg-[#C3D2DA] hover:bg-[#9FB4C0]"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
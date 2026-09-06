import { useEffect, useRef, useState } from "react";

type CaseStoryProps = {
  title: string;
  heading: string;
  text: string;
};

export function CaseStory({ title, heading, text }: CaseStoryProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`case-story ${isVisible ? "case-story-visible" : ""}`}
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
        <div className="case-story-label">
          <p className="eyebrow">{title}</p>
        </div>

        <div className="case-story-content">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}

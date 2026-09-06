import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  children: ReactNode;
}) {
  return (
    <div className="page-shell">
      <section className="page-intro">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title">{title}</h1>
          <p className="section-lead max-w-3xl">{text}</p>
        </div>
      </section>
      <section className="page-content">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">{children}</div>
      </section>
    </div>
  );
}

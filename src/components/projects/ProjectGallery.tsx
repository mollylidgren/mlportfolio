import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "../../data/types";
import { useLanguage } from "../../i18n/LanguageContext";

type ProjectGalleryProps = {
  images: GalleryImage[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => {
    setActiveIndex(null);
  };

  const prev = () => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current - 1 + images.length) % images.length;
    });
  };

  const next = () => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % images.length;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowLeft") {
        prev();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  if (!images.length) {
    return null;
  }

  return (
    <>
      <section className="section-pad pt-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="gallery-grid">
            {images.map((image, index) => {
              const caption = image.caption?.[lang];

              return (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  className="gallery-item"
                  onClick={() => setActiveIndex(index)}
                  aria-label={caption || `Bild ${index + 1}`}
                >
                  <img src={image.src} alt={caption || ""} loading="lazy" />

                  {caption && (
                    <span className="gallery-caption">{caption}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={images[activeIndex].caption?.[lang] || "Bildvisning"}
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Stäng"
          >
            <X size={22} />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                prev();
              }}
              aria-label="Föregående bild"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].caption?.[lang] || ""}
            />

            {images[activeIndex].caption && (
              <p className="lightbox-caption">
                {images[activeIndex].caption[lang]}
              </p>
            )}
          </div>

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
              aria-label="Nästa bild"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </>
  );
}

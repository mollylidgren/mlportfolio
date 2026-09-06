import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { useLanguage } from "../i18n/LanguageContext";
import { Rich } from "../i18n/Rich";

const CODEFREEFORM_ACCESS_KEY = "E447CE";

export function ContactPage() {
  const { t } = useLanguage();

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (sending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot:
    // Om en bot fyller i detta osynliga fält
    // skickar vi inte formuläret vidare.
    const honeypot = formData.get("_gotcha");

    if (typeof honeypot === "string" && honeypot.trim() !== "") {
      return;
    }

    setSending(true);
    setError(false);

    formData.set("access_key", CODEFREEFORM_ACCESS_KEY);

    try {
      const response = await fetch(
        "https://codefreeform.com/api/contact-api/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(Object.fromEntries(formData.entries())),
        },
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <PageHero
      eyebrow={t.contact.eyebrow}
      title={<Rich parts={t.contact.title} />}
      text={t.contact.text}
    >
      {" "}
      <div className="contact-layout">
        {/* LEFT — CONTACT INFORMATION */}

        <div className="contact-info">
          <h2>{t.contact.contactHeading}</h2>

          <div className="contact-links">
            <a href="mailto:dinmail@example.com" className="contact-link">
              <span>{t.contact.email}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>

          </div>
        </div>

        {/* RIGHT — CONTACT FORM */}

        <div className="contact-form-card">
          {sent ? (
            /* SUCCESS */

            <div className="contact-success">
              <div className="contact-success-icon">
                <Check size={24} strokeWidth={2} aria-hidden="true" />
              </div>

              <p className="contact-success-label">{t.contact.successLabel}</p>

              <h2>{t.contact.successHeading}</h2>

              <p>{t.contact.successText}</p>

              <button
                type="button"
                className="contact-reset"
                onClick={() => {
                  setSent(false);
                  setError(false);
                }}
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            /* FORM */

            <form className="contact-form" onSubmit={handleSubmit}>
              {/* HONEYPOT */}

              <div className="contact-honeypot">
                <label htmlFor="contact-website">Website</label>

                <input
                  id="contact-website"
                  name="_gotcha"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* NAME */}

              <div className="contact-field">
                <label htmlFor="contact-name">{t.contact.name}</label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={sending}
                />
              </div>

              {/* EMAIL */}

              <div className="contact-field">
                <label htmlFor="contact-email">{t.contact.emailField}</label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={sending}
                />
              </div>

              {/* MESSAGE */}

              <div className="contact-field">
                <label htmlFor="contact-message">{t.contact.message}</label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={7}
                  required
                  disabled={sending}
                />
              </div>

              {/* ERROR */}

              {error && (
                <div className="contact-error" role="alert">
                  {t.contact.error}
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit"
                disabled={sending}
              >
                <span>{sending ? t.contact.sending : t.contact.send}</span>

                <ArrowUpRight size={20} aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </PageHero>
  );
}

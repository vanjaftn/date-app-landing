import Image from "next/image";

const APP_NAME = "Sealed With Love";
const PLAY_STORE_URL = "#"; // TODO: replace with the real Play Store URL once published

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <BackgroundDecor />

      <SiteHeader />

      <Hero />

      <HowItWorks />

      <Showcase />

      <FinalCTA />

      <SiteFooter />
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
      <a href="#" className="flex items-center gap-2 group">
        <EnvelopeMark className="h-7 w-7 text-ink transition-transform group-hover:-rotate-6" />
        <span className="font-display text-xl font-semibold tracking-tight text-ink">
          {APP_NAME}
        </span>
      </a>
      <a
        href={PLAY_STORE_URL}
        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >
        Get the app
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-8 sm:px-10 sm:pt-12 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream-100 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            soon on Google Play
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Date night,{" "}
            <span className="italic text-accent">delivered.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            A little envelope. A surprise date idea inside. Open one,
            live it, then unlock the next. {APP_NAME} turns date night
            into a tiny adventure you share together.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PlayStoreButton href={PLAY_STORE_URL} />
            <a
              href="#how-it-works"
              className="text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              See how it works ↓
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[320px]">
            <DecorEnvelope className="absolute -left-12 -top-10 h-20 w-20 animate-float-slow [--tilt:-12deg]" />
            <DecorHeart className="absolute -right-6 top-10 h-10 w-10 animate-float-medium [--tilt:14deg]" />
            <DecorSparkle className="absolute -bottom-6 -left-6 h-8 w-8 animate-float-medium [--tilt:0deg]" />

            <PhoneFrame
              src="/screenshots/date_idea_app_list_screen_with_rating.jpg"
              alt={`${APP_NAME} app — envelope screen`}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Pick your deck",
      body: "Use our curated date ideas, or craft your own deck just for the two of you.",
      icon: <DeckIcon className="h-7 w-7" />,
    },
    {
      title: "Open the envelope",
      body: "Tap the seal and a new date idea slips out, written like a little love letter.",
      icon: <EnvelopeMark className="h-7 w-7" />,
    },
    {
      title: "Rate the night",
      body: "Give the night a quick rating — a small pause to savour it before the next envelope arrives.",
      icon: <StarIcon className="h-7 w-7" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          how it works
        </p>
        <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          Three little steps,{" "}
          <span className="italic">a hundred sweet nights.</span>
        </h2>
      </div>

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="group relative rounded-3xl border border-cream-200/70 bg-white/60 p-7 shadow-[0_1px_0_0_rgba(217,199,174,0.6)] backdrop-blur transition hover:-translate-y-1 hover:bg-white/80"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-100 text-ink">
                {step.icon}
              </span>
              <span className="font-display text-3xl italic text-cream-200 group-hover:text-accent">
                0{i + 1}
              </span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Showcase() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <div className="rounded-[36px] bg-cream-100/70 px-6 py-16 sm:px-12 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            a peek inside
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Built to feel like{" "}
            <span className="italic">a love letter.</span>
          </h2>
          <p className="mt-4 text-ink-soft">
            Soft, warm, and just a little bit nostalgic — every screen is
            made to slow you down and savour the moment.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 items-end gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-8">
          <div>
            <PhoneFrame
              src="/screenshots/date_idea_app_choose_your_deck.jpg"
              alt={`${APP_NAME} app — your dates list`}
              compact
            />
            <p className="mt-4 text-center text-sm text-ink-soft">
              Your unfolding journey
            </p>
          </div>

          <div>
            <PhoneFrame
              src="/screenshots/date_idea_app_envelope.jpg"
              alt={`${APP_NAME} app — envelope screen`}
              featured
            />
            <p className="mt-4 text-center text-sm text-ink-soft">
              An envelope waiting for you
            </p>
          </div>

          <div>
            <PhoneFrame
              src="/screenshots/date_idea_app_letter.jpg"
              alt={`${APP_NAME} app — letter screen`}
              compact
            />
            <p className="mt-4 text-center text-sm text-ink-soft">
              A handwritten date idea
            </p>
          </div>

          <div>
            <PhoneFrame
              src="/screenshots/date_idea_app_rate.jpg"
              alt={`${APP_NAME} app — your deck`}
              compact
            />
            <p className="mt-4 text-center text-sm text-ink-soft">
              Create a memory
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
      <div className="relative overflow-hidden rounded-[36px] bg-ink px-8 py-16 text-cream-50 sm:px-16 sm:py-20">
        <DecorEnvelope className="absolute -right-10 -top-10 h-40 w-40 text-cream-100/15" />
        <DecorHeart className="absolute -bottom-8 -left-6 h-24 w-24 text-cream-100/15" />

        <div className="relative max-w-2xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Ready for your next{" "}
            <span className="italic text-cream-100">date night?</span>
          </h2>
          <p className="mt-4 text-cream-100/80">
            Download {APP_NAME}, pick a deck, and let the first envelope
            do the rest.
          </p>
          <div className="mt-8">
            <PlayStoreButton href={PLAY_STORE_URL} variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-cream-200/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row sm:px-10">
        <div className="flex items-center gap-2">
          <EnvelopeMark className="h-5 w-5 text-ink" />
          <span className="font-display text-base font-semibold text-ink">
            {APP_NAME}
          </span>
          <span className="ml-2 text-sm text-ink-soft">
            © {new Date().getFullYear()}
          </span>
        </div>
        {/* <nav className="flex items-center gap-6 text-sm text-ink-soft">
          <a href="#" className="hover:text-ink">Privacy</a>
          <a href="#" className="hover:text-ink">Terms</a>
          <a href="mailto:hello@example.com" className="hover:text-ink">
            Contact
          </a>
        </nav> */}
      </div>
    </footer>
  );
}

/* ---------- shared building blocks ---------- */

function PhoneFrame({
  src,
  alt,
  priority,
  compact,
  featured,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  compact?: boolean;
  featured?: boolean;
}) {
  const widthClass = featured
    ? "max-w-[360px]"
    : compact
      ? "max-w-[220px]"
      : "max-w-[280px]";

  return (
    <div className={`relative mx-auto ${widthClass}`}>
      <div
        className="relative overflow-hidden rounded-[42px] border-[6px] border-ink bg-ink p-1.5 shadow-[0_30px_60px_-20px_rgba(61,46,31,0.35)]"
        aria-label={alt}
      >
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-cream-100/40" />
        <div className="relative overflow-hidden rounded-[34px]">
          <Image
            src={src}
            alt={alt}
            width={320}
            height={660}
            priority={priority}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}

function PlayStoreButton({
  href,
  variant = "dark",
}: {
  href: string;
  variant?: "dark" | "light";
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition hover:-translate-y-0.5 hover:shadow-lg";
  const styles =
    variant === "dark"
      ? "bg-ink text-cream-50 shadow-md"
      : "bg-cream-50 text-ink shadow-md";

  return (
    <a href={href} className={`${base} ${styles}`} aria-label="Get it on Google Play">
      <PlayIcon className="h-7 w-7" />
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-[0.18em] opacity-80">
          Get it on
        </span>
        <span className="font-display text-lg font-semibold tracking-tight">
          Google Play
        </span>
      </span>
    </a>
  );
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
      <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-cream-100 blur-3xl opacity-70" />
      <div className="absolute top-[40%] -right-24 h-80 w-80 rounded-full bg-cream-200/60 blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cream-100 blur-3xl opacity-60" />
    </div>
  );
}

/* ---------- icons ---------- */

function EnvelopeMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="2.5"
        y="5.5"
        width="19"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3 7l9 7 9-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="1.6" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

function DeckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="3"
        y="6"
        width="12"
        height="15"
        rx="2"
        transform="rotate(-6 3 6)"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="7"
        y="3"
        width="12"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <path
        d="M13 7.5c-1 0-1.7.7-1.7 1.6 0 1.6 2 2.7 2 2.7s2-1.1 2-2.7c0-.9-.7-1.6-1.7-1.6-.3 0-.6.2-.8.4-.2-.2-.5-.4-.8-.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3.5l2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.9-5.4 2.9 1-6L3.2 9.9l6.1-.9L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="currentColor"
        fillOpacity="0.06"
      />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 12.5l2.7 2.7L16 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="pg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path
        d="M5 3.5v17a1 1 0 0 0 1.5.87L20 12 6.5 2.63A1 1 0 0 0 5 3.5Z"
        fill="url(#pg1)"
      />
    </svg>
  );
}

function DecorEnvelope({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden>
      <rect
        x="6"
        y="20"
        width="68"
        height="46"
        rx="4"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="2"
      />
      <path
        d="M6 22l34 26 34-26"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="2"
      />
      <circle cx="40" cy="44" r="7" fill="#B07A4A" />
      <path
        d="M40 47c-3-2-5-4-3.5-5.5S40 41 40 43c0-2 2-3 3.5-1.5S43 45 40 47Z"
        fill="#F5E6D3"
      />
    </svg>
  );
}

function DecorHeart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        d="M16 27S3 19 3 11.5C3 7.4 6.2 4 10.2 4c2.4 0 4.6 1.3 5.8 3.3C17.2 5.3 19.4 4 21.8 4 25.8 4 29 7.4 29 11.5 29 19 16 27 16 27Z"
        fill="#B07A4A"
      />
    </svg>
  );
}

function DecorSparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2Z"
        fill="#B07A4A"
        opacity="0.85"
      />
    </svg>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "Sealed With Love";

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP_NAME}`,
  description:
    `How ${APP_NAME} handles information for this website and our mobile app.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative mx-auto w-full max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
      <header className="mb-12 border-b border-cream-200/60 pb-8">
        <Link
          href="/"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          ← Back to home
        </Link>
        <h1 className="mt-6 font-display text-4xl tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          Last updated: May 5, 2026
        </p>
      </header>

      <div className="space-y-10 text-[15px] leading-relaxed text-ink-soft sm:text-base">
        <section className="space-y-3">
          <p>
            This policy describes how {APP_NAME} (“we”, “us”) handles
            information when you use our marketing website and our mobile
            application. If you do not agree with this policy, please do not use
            our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-ink">
            What information we collect
          </h2>
          <p>
            <strong className="text-ink">Website visitors.</strong> When you
            visit this site, our hosting and infrastructure may automatically
            receive technical information typical of any website visit, such as
            your IP address, general location derived from that address, browser
            type, device type, referring URLs, and the pages or assets you
            request along with the date and time. We do not use optional contact
            forms on this marketing site; if you email us directly, we receive
            whatever you choose to put in your message.
          </p>
          <p>
            <strong className="text-ink">Mobile app.</strong> If you use our
            Android app, we may collect information needed to run the app and
            deliver its features — for example, content you create or save in the
            app, preferences you set, and diagnostic information that helps us fix
            crashes or improve performance. You may see additional notices or
            choices inside the app where required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-ink">
            How we use information
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>To provide, maintain, and improve our website and app</li>
            <li>To understand how the site and app are used in aggregate</li>
            <li>To secure our services, prevent abuse, and troubleshoot issues</li>
            <li>To respond when you contact us</li>
            <li>To comply with applicable law</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-ink">
            Sharing with third parties
          </h2>
          <p>
            <strong className="text-ink">Service providers.</strong> We may share
            information with vendors that help us host the website, operate the
            app, or provide technical infrastructure (for example, cloud hosting
            or app distribution). They process data only to perform services for
            us and are expected to protect it appropriately.
          </p>
          <p>
            <strong className="text-ink">Advertising and analytics.</strong> We
            do not sell your personal information. This marketing site does not
            load third-party advertising networks or third-party analytics
            scripts (such as ad pixels or cross-site trackers). If we introduce
            analytics or advertising tools in the future, we will update this
            policy and, where required, ask for your consent before those tools
            run.
          </p>
          <p>
            <strong className="text-ink">Legal.</strong> We may disclose
            information if we believe in good faith that disclosure is required
            by law, legal process, or to protect the rights, safety, or security
            of our users, the public, or our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-ink">
            Changes
          </h2>
          <p>
            We may update this policy from time to time. The “Last updated” date
            at the top will change when we do. Continued use of the site or app
            after changes means you accept the updated policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-ink">
            Contact
          </h2>
          <p>
            For privacy questions, you can reach us at the contact option we
            publish for {APP_NAME} (for example, a support or contact email in
            the app store listing or app settings).
          </p>
        </section>
      </div>
    </main>
  );
}

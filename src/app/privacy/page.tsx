import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Privacy Policy | Canais Analytics",
  description: "How Canais Analytics uses YouTube data.",
  alternates: {
    canonical: "/privacy",
  },
};

const LINK = "text-foreground underline underline-offset-4 hover:text-accent";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-medium text-foreground">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}

export default function Privacy() {
  return (
    <>
      <header className="border-b border-line">
        <nav className="mx-auto flex h-16 max-w-6xl items-center px-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-medium tracking-tight"
          >
            <Logo size={20} />
            Elberte Plínio
          </Link>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 md:py-24">
        <h1 className="text-4xl font-medium tracking-tighter md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">
          Canais Analytics. Last updated November 7, 2026.
        </p>
        <div className="mt-12 space-y-10 leading-relaxed text-muted">
          <Section title="What Canais Analytics is">
            Canais Analytics is a private tool that Elberte Plínio uses to read
            the analytics of YouTube channels he owns or manages. It is not
            offered to the public.
          </Section>
          <Section title="What it reads">
            When a channel owner signs in with Google, the tool asks for
            read-only access to YouTube. It reads the channel name and ID, basic
            video details such as duration and view count, and audience
            retention reports. It never uploads, edits, deletes or posts
            anything.
          </Section>
          <Section title="How the data is used and stored">
            The data is used only to study how viewers watch the channel&apos;s
            own videos and to improve future videos. Reports are saved as files
            on the operator&apos;s own computer. The sign-in token is kept in a
            local file that only the operator can read. The data is not sold,
            not shared with third parties and not used for advertising.
          </Section>
          <Section title="YouTube and Google">
            Canais Analytics uses YouTube API Services. By using it, you agree
            to the{" "}
            <a href="https://www.youtube.com/t/terms" className={LINK}>
              YouTube Terms of Service
            </a>
            . Google handles data as the{" "}
            <a href="https://policies.google.com/privacy" className={LINK}>
              Google Privacy Policy
            </a>{" "}
            describes. The use of data received from Google APIs follows the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              className={LINK}
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </Section>
          <Section title="Removing access and data">
            You can remove the tool&apos;s access at any time in your{" "}
            <a href="https://myaccount.google.com/permissions" className={LINK}>
              Google security settings
            </a>
            . To ask a question or to have stored data deleted, email{" "}
            <a href="mailto:elberte.dev@gmail.com" className={LINK}>
              elberte.dev@gmail.com
            </a>
            .
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

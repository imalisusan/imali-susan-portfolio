import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";

const instagramUrl = "https://www.instagram.com/imali_susan_/";
const tiktokUrl = "https://www.tiktok.com/@controlcxcontrolv";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17.35 6.65h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 4c.4 2.6 2.1 4.5 4.8 4.9V12c-1.9 0-3.6-.6-4.8-1.6v5.2a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.2.1v3.1a2.6 2.6 0 1 0 1.9 2.5V4h2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SocialFollowSection() {
  return (
    <Section id="follow" title="Follow Me">
      <Reveal>
        <Card className="relative overflow-hidden p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_20%,rgba(181,126,220,0.40),transparent),radial-gradient(700px_500px_at_80%_30%,rgba(192,132,252,0.34),transparent)] anim-shimmer" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent opacity-70" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(181,126,220,0.45),transparent_65%)] blur-2xl anim-float motion-reduce:animate-none" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(192,132,252,0.40),transparent_65%)] blur-2xl anim-float-slow motion-reduce:animate-none" />

          <div className="relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-foreground/70">
                  Personal • Faith • Tech
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Stay connected beyond the resume.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/80 sm:text-base">
                  Instagram is for my personal life and the work I do around my
                  faith. TikTok is where I share tech jokes and dev life.
                </p>
              </div>
           
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl border border-border bg-[linear-gradient(135deg,rgba(181,126,220,0.28),rgba(234,215,255,0.70),rgba(255,255,255,0.92))] p-7 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-30px_rgba(181,126,220,0.8)] motion-reduce:hover:translate-y-0"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(181,126,220,0.55),transparent_60%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-52 w-52 rounded-full bg-[conic-gradient(from_180deg,rgba(255,0,128,0.25),rgba(255,140,0,0.22),rgba(138,43,226,0.25),rgba(255,0,128,0.25))] opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex min-w-0 flex-col gap-3">
                    <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm ring-1 ring-white/50 transition-transform duration-200 group-hover:scale-105">
                      <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,#ffdd55,#ff543e,#c837ab,#405de6)] opacity-95" />
                      <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur" />
                      <InstagramIcon className="relative h-5 w-5 text-white drop-shadow-sm" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold tracking-tight">
                        Instagram
                      </div>
                      <div className="mt-1 text-sm text-foreground/75">
                        Personal life + faith journey
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm backdrop-blur">
                    Follow
                  </div>
                </div>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  <Chip>Faith</Chip>
                  <Chip>Life</Chip>
                  <Chip>Purpose</Chip>
                  <Chip>Community</Chip>
                </div>
              </a>

              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl border border-border bg-[linear-gradient(135deg,rgba(124,58,237,0.18),rgba(181,126,220,0.28),rgba(255,255,255,0.92))] p-7 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-30px_rgba(124,58,237,0.7)] motion-reduce:hover:translate-y-0"
              >
                <div className="pointer-events-none absolute -left-20 -bottom-20 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.50),transparent_60%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,245,255,0.22),transparent_60%)] opacity-60 blur-3xl" />
                <div className="pointer-events-none absolute -right-24 top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,34,102,0.20),transparent_60%)] opacity-55 blur-3xl" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex min-w-0 flex-col gap-3">
                    <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm ring-1 ring-white/50 transition-transform duration-200 group-hover:scale-105">
                      <div className="absolute inset-0 rounded-2xl bg-[#0b0b0f] opacity-95" />
                      <div className="absolute inset-0 rounded-2xl">
                        <div className="absolute -left-1 top-1 h-7 w-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,245,255,0.55),transparent_65%)] blur-sm" />
                        <div className="absolute left-3 top-3 h-7 w-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,34,102,0.45),transparent_65%)] blur-sm" />
                      </div>
                      <TikTokIcon className="relative h-5 w-5 text-white drop-shadow-[0_0_14px_rgba(0,245,255,0.25)]" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold tracking-tight">
                        TikTok
                      </div>
                      <div className="mt-1 text-sm text-foreground/75">
                        Tech jokes + dev life
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm backdrop-blur">
                    Follow
                  </div>
                </div>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  <Chip>Tech</Chip>
                  <Chip>Dev Humor</Chip>
                  <Chip>Code</Chip>
                  <Chip>Builds</Chip>
                </div>
              </a>
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

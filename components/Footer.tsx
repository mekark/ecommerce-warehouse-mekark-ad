import Link from "next/link";
import { manrope } from "@/lib/fonts";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "https://www.mekark.com/resources/privacy-policy" },
  { label: "Terms Of Service", href: "https://www.mekark.com/resources/terms-of-service" },
  { label: "Cookie Policy", href: "https://www.mekark.com/resources/cookie-policy" },
] as const;

export default function Footer() {
  return (
    <footer
      className={`${manrope.className} border-t border-white/10 bg-black py-6 pl-5 pr-20 text-white sm:pl-10 sm:pr-28`}
    >
      <div className="mx-auto flex max-w-[1920px] flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 sm:text-center tracking-wide text-white/40 sm:text-sm">
          © {new Date().getFullYear()} Mekark Structure India Private Limited. All rights reserved.
        </p>
        <nav aria-label="Legal">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-center sm:gap-x-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch={false}
                  className="text-xs text-white/55 transition-colors hover:text-white sm:text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

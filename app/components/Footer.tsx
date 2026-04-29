import { MessageCircle } from "lucide-react";
import { AMAZON_URL, LEGAL_DISCLAIMER, whatsappLink } from "../lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-rose/10 bg-ink text-ivory/85">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center rounded-full bg-rose-gradient text-ivory"
            >
              <span className="font-display text-lg leading-none">❀</span>
            </span>
            <span className="font-display text-xl font-semibold text-ivory">
              CelGen12 Double Red Rose
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ivory/70">
            A 12-in-1 liquid red superfruit blend with NAC and Roselle. Natural
            Immune Support Supplement — 15 sachets × 10ml.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ivory">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>By Affluence Global</li>
            <li>Made in China</li>
            <li>GMP Certified · FDA-Registered Facility</li>
            <li>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-ivory hover:underline"
              >
                Available on Amazon
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ivory">
            Order & enquiries
          </h3>
          <a
            href={whatsappLink(
              "Hello! I'd like more information about CelGen12 Double Red Rose.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-rose px-5 text-sm font-semibold text-ivory transition-colors hover:bg-rose-deep"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp us
          </a>
          <p className="mt-3 text-sm text-ivory/70">+1 (803) 567-0753</p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl space-y-2 px-5 py-6 text-center text-xs text-ivory/55 sm:px-8">
          <p>
            © {new Date().getFullYear()} CelGen12 Double Red Rose by Affluence
            Global. All rights reserved.
          </p>
          <p>{LEGAL_DISCLAIMER}</p>
        </div>
      </div>
    </footer>
  );
}

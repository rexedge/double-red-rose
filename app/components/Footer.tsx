import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/utils";

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
              Double Red Rose
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ivory/70">
            Nature&apos;s reds, science-backed wellness. A premium liquid
            antioxidant supplement.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ivory">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Manufactured by Affluence Global</li>
            <li>Made in China</li>
            <li>African HQ: Ghana</li>
            <li>US FDA Certified</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ivory">
            Order & enquiries
          </h3>
          <a
            href={whatsappLink(
              "Hello! I'd like more information about Double Red Rose.",
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
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-ivory/55 sm:px-8">
          © {new Date().getFullYear()} Double Red Rose. All rights reserved.
          These statements have not been evaluated by the FDA. This product is
          not intended to diagnose, treat, cure or prevent any disease.
        </div>
      </div>
    </footer>
  );
}

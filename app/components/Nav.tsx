import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/utils";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="#top" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-rose-gradient text-ivory shadow-sm"
          >
            <span className="font-display text-lg leading-none">❀</span>
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Double Red Rose
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
          <a href="#ingredients" className="hover:text-rose transition-colors">
            Ingredients
          </a>
          <a href="#benefits" className="hover:text-rose transition-colors">
            Benefits
          </a>
          <a href="#science" className="hover:text-rose transition-colors">
            Science
          </a>
          <a href="#testimonials" className="hover:text-rose transition-colors">
            Testimonials
          </a>
          <a href="#order" className="hover:text-rose transition-colors">
            Order
          </a>
        </nav>

        <a
          href={whatsappLink(
            "Hello! I'd like to order Double Red Rose. Please share details.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-rose px-4 text-sm font-semibold text-ivory shadow-sm transition-all hover:bg-rose-deep hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Order on WhatsApp</span>
          <span className="sm:hidden">Order</span>
        </a>
      </div>
    </header>
  );
}

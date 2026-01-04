import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[3fr_3fr_1fr_1fr]">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-xl font-serif font-bold text-foreground hover:text-primary transition-colors inline-block"
            >
              {siteConfig.site.name}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              On a mission to help you live in the moment and discover the
              wonders of life that surround you every single day.
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.site.name}. All rights
              reserved.
            </p>
          </div>

          {/* Spacer Column */}
          <div></div>

          {/* Navigation Links */}
          <div className="space-y-4 text-right">
            <h3 className="text-sm font-semibold text-foreground">Pages</h3>
            <nav className="flex flex-col gap-3 items-end">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/posts"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Posts
              </Link>
              <Link
                href="/newsletters"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Newsletters
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4 text-right">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <nav className="flex flex-col gap-3 items-end">
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                YouTube
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                TikTok
              </a>
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

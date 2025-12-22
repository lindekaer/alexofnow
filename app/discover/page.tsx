import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";
import {
  ArrowRight,
  Mail,
  Youtube,
  Instagram,
  ExternalLink,
  Link as LinkIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Discover | alexofnow",
  description: "Connect with me across all platforms and discover my content.",
};

export default function DiscoverPage() {
  const links = [
    {
      title: "Visit My Website",
      url: siteConfig.site.url,
      icon: ExternalLink,
      description: "Read articles and explore content",
    },
    {
      title: "YouTube",
      url: siteConfig.social.youtube,
      icon: Youtube,
      description: "Watch videos and tutorials",
    },
    {
      title: "Instagram",
      url: siteConfig.social.instagram,
      icon: Instagram,
      description: "Follow for daily inspiration",
    },
    {
      title: "TikTok",
      url: siteConfig.social.tiktok,
      icon: LinkIcon,
      description: "Short-form content and tips",
    },
    {
      title: "Email Me",
      url: `mailto:${siteConfig.social.email}`,
      icon: Mail,
      description: "Get in touch",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
            <AvatarImage src="/avatar.png" alt="Alex" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="text-3xl font-serif font-bold text-foreground">
              @alexofnow
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              I'm helping people live better lives by simply taking a break. I
              believe that we have everything we need inside ourselves to feel
              fulfilled and happy.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="w-full h-auto py-4 px-4 justify-start gap-3 hover:bg-accent transition-colors"
                asChild
              >
                <a
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.url.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="font-medium text-foreground">
                      {link.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {link.description}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </a>
              </Button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground">
            Slow your breath. Inhale - and let go.
          </p>
        </div>
      </div>
    </div>
  );
}


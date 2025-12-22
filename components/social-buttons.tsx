import { Button } from "@/components/ui/button";

interface SocialButtonsProps {
  showYouTube?: boolean;
  showInstagram?: boolean;
  showTikTok?: boolean;
  showEmail?: boolean;
  youtubeUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  emailAddress?: string;
}

export function SocialButtons({
  showYouTube = false,
  showInstagram = false,
  showTikTok = false,
  showEmail = false,
  youtubeUrl = "https://youtube.com",
  instagramUrl = "https://instagram.com",
  tiktokUrl = "https://tiktok.com",
  emailAddress = "hello@example.com",
}: SocialButtonsProps) {
  const buttons = [
    { show: showYouTube, name: "youtube" },
    { show: showInstagram, name: "instagram" },
    { show: showTikTok, name: "tiktok" },
    { show: showEmail, name: "email" },
  ].filter((b) => b.show);
  
  const buttonCount = buttons.length;
  const isThreeButtons = buttonCount === 3;
  const lastButtonName = buttons[buttons.length - 1]?.name;

  return (
    <div className="grid grid-cols-2 sm:flex sm:items-center gap-4">
      {showYouTube && (
        <Button 
          variant="outline" 
          size="sm" 
          asChild
          className={isThreeButtons && lastButtonName === "youtube" ? "sm:col-span-1 col-span-2 sm:mx-0 mx-auto" : ""}
        >
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
            YouTube
          </a>
        </Button>
      )}

      {showInstagram && (
        <Button 
          variant="outline" 
          size="sm" 
          asChild
          className={isThreeButtons && lastButtonName === "instagram" ? "sm:col-span-1 col-span-2 sm:mx-0 mx-auto" : ""}
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Instagram
          </a>
        </Button>
      )}

      {showTikTok && (
        <Button 
          variant="outline" 
          size="sm" 
          asChild
          className={isThreeButtons && lastButtonName === "tiktok" ? "sm:col-span-1 col-span-2 sm:mx-0 mx-auto" : ""}
        >
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-1"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            TikTok
          </a>
        </Button>
      )}

      {showEmail && (
        <Button 
          variant="outline" 
          size="sm" 
          asChild
          className={isThreeButtons && lastButtonName === "email" ? "sm:col-span-1 col-span-2 sm:mx-0 mx-auto" : ""}
        >
          <a href={`mailto:${emailAddress}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email
          </a>
        </Button>
      )}
    </div>
  );
}


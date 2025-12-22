import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SocialButtons } from "@/components/social-buttons";

export function ProfileSection() {
  return (
    <section className="flex flex-col items-center text-center py-12 space-y-6">
      <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
        <AvatarImage src="/avatar.png" alt="Alexander" />
        <AvatarFallback>Alex</AvatarFallback>
      </Avatar>
      <div className="space-y-3">
        <h1 className="text-4xl font-serif font-bold text-foreground">
          Hi, I'm Alex!
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          I'm helping people live better lives by simply taking a break. I
          believe that we have everything we need inside ourselves to feel
          fulfilled and happy.
        </p>
      </div>
      <SocialButtons
        showYouTube={true}
        showInstagram={true}
        showTikTok={true}
      />
    </section>
  );
}

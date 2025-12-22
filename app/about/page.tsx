import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { SocialButtons } from "@/components/social-buttons";
import { ProfileSection } from "@/components/profile-section";
import { seoConfig } from "@/lib/seo-config";

export const metadata = seoConfig.about;

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="space-y-12">
            <ProfileSection />

            <Card>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    Slow your breath. Inhale - and let go.
                  </h2>
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p>
                      I'm Alex, and I'm on a mission to help you live in the
                      moment and discover the wonders of life that surround you
                      every single day.
                    </p>
                    <p>
                      For too long, I lived in a state of constant
                      distraction-always planning, always worrying, always
                      somewhere else. My mind raced while my body felt
                      disconnected. I was productive but not present, busy but
                      not fulfilled. It wasn't until I understood that mind and
                      body are deeply connected that everything changed.
                    </p>
                    <p>
                      True happiness isn't found by optimizing one part of
                      yourself while ignoring the rest. You have to look at
                      yourself holistically-your thoughts, your body, your
                      breath, your connection to the world around you. When you
                      do, you begin to see the beauty in ordinary moments, the
                      peace in stillness, and the joy in simply being.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    What I Share
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">
                        Living in the Moment
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Practices and perspectives to help you slow down,
                        breathe, and fully experience the present moment.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">
                        Mind-Body Connection
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Understanding how your thoughts, emotions, and physical
                        body work together to create your experience of life.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">
                        Discovering Wonder
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Finding beauty and meaning in everyday moments, ordinary
                        experiences, and the simple act of being alive.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">
                        Holistic Wellbeing
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Approaches to happiness that honor the whole person-not
                        just productivity or achievement, but genuine
                        fulfillment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    My Philosophy
                  </h2>
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p>
                      I believe that mind and body are not separate-they're
                      intimately connected. You can't truly be happy if you're
                      only tending to your thoughts while ignoring your body, or
                      focusing on physical health while neglecting your mental
                      wellbeing. True happiness comes from recognizing this
                      connection and nurturing both.
                    </p>
                    <p>
                      This isn't about perfection or achieving some ideal state.
                      It's about coming back to yourself, again and again, with
                      kindness and curiosity. It's about taking a break from the
                      constant doing and remembering how to simply be. When you
                      slow down and pay attention, you discover that everything
                      you need to feel fulfilled is already inside you-you just
                      need to pause long enough to notice.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    Beyond the Content
                  </h2>
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p>
                      When I'm not creating content, you'll find me practicing
                      what I preach-taking long, mindful walks, spending time in
                      nature, meditating, and finding joy in simple pleasures.
                      I'm constantly learning and experimenting with ways to
                      live more fully in each moment.
                    </p>
                    <p>
                      This journey is ongoing, and I'm grateful to share it with
                      you. Together, we can learn to slow down, breathe deeply,
                      and discover the wonders that life has to offer. Thanks
                      for being here, and remember: you have everything you need
                      inside yourself to feel fulfilled and happy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col items-center gap-4 text-center pb-12">
              <h2 className="text-2xl font-serif font-bold text-foreground">
                Let's Connect
              </h2>
              <p className="text-muted-foreground max-w-xl">
                I'd love to hear from you. Share your thoughts, questions, or
                just say hello on social media.
              </p>
              <SocialButtons
                showYouTube={true}
                showInstagram={true}
                showTikTok={true}
                showEmail={true}
              />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

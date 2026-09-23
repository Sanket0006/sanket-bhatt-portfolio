import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LoadingIntro } from "@/components/layout/LoadingIntro";
import { PageTransition } from "@/components/layout/PageTransition";
import { getMergedSite } from "@/lib/content";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const mergedSite = await getMergedSite();

  return (
    <SmoothScrollProvider>
      <LoadingIntro />
      <ScrollProgress />
      <CustomCursor />
      <AmbientBackground />
      <Header name={mergedSite.name} />
      <main className="relative z-10">
        <PageTransition>{children}</PageTransition>
      </main>
      <div className="relative z-10">
        <Footer name={mergedSite.name} email={mergedSite.email} social={mergedSite.social} />
      </div>
    </SmoothScrollProvider>
  );
}

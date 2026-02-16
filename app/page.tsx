import { loadSiteConfig } from "@/config";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { GroupsSection } from "./components/GroupsSection";
import { ValuesSection } from "./components/ValuesSection";
import { EventsSection } from "./components/EventsSection";
import { TeamSection } from "./components/TeamSection";
import { CommunitySection } from "./components/CommunitySection";
import { FooterSection } from "./components/FooterSection";

export default function Home() {
  const config = loadSiteConfig();

  const primaryEvents = config.events.items.filter((e) => e.primary);
  const secondaryEvents = config.events.items.filter((e) => !e.primary);

  return (
    <>
      <Navigation />
      <HeroSection stats={config.stats} />
      <GroupsSection groups={config.groups} />
      <ValuesSection values={config.values} />
      <EventsSection
        primaryEvents={primaryEvents}
        secondaryEvents={secondaryEvents}
        showMoreEventsSoon={config.events.showMoreEventsSoon}
      />
      <TeamSection people={config.people} />
      <CommunitySection />
      <FooterSection contacts={config.contacts} social={config.social} />
    </>
  );
}

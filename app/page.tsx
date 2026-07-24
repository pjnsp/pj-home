import { loadSiteConfig } from "@/config";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { GroupsSection } from "./components/GroupsSection";
import { ValuesSection } from "./components/ValuesSection";
import { TeamSection } from "./components/TeamSection";
import { CommunitySection } from "./components/CommunitySection";
import { FooterSection } from "./components/FooterSection";

export default function Home() {
  const config = loadSiteConfig();

  return (
    <>
      <Navigation />
      <HeroSection stats={config.stats} />
      <GroupsSection groups={config.groups} />
      <ValuesSection values={config.values} />
      <TeamSection people={config.people} />
      <CommunitySection />
      <FooterSection contacts={config.contacts} social={config.social} />
    </>
  );
}

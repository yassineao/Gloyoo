import type { LocaleDictionary } from "@/app/lib/i18n";
import type { ServiceSlug } from "@/app/types/Service";
import Graphs from "./Graphs";
import Hero from "./Hero";

type ServiceProps = {
  content: LocaleDictionary["servicePage"];
  service: ServiceSlug;
};

export default function Service({ content, service }: ServiceProps) {
  const heroContent = content.hero[service] ?? content.hero["social-media"];

  return (
    <div>
      <Hero content={heroContent} />
      <Graphs content={content.features} />
    </div>
  );
}

    
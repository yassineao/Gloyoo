import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { AboutTeamContent, TeamMember } from "@/app/types/LocaleDictionary";

const TeamCard = ({ member }: { member: TeamMember }) => (
  <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5">
    {member.image ? (
      <Image
        src={member.image}
        alt={member.name}
        width={640}
        height={720}
        className="mb-5 aspect-[4/5] w-full rounded-xl object-cover"
      />
    ) : (
      <div className="mb-5 flex aspect-[4/5] w-full items-center justify-center rounded-xl border border-brand-petalPink/30 bg-brand-petalPink/10 text-4xl font-semibold text-white">
        {member.name
          .split(" ")
          .map((part) => part[0])
          .join("")
          .slice(0, 2)}
      </div>
    )}
    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
    <p className="mt-1 text-sm font-medium text-brand-petalPink">
      {member.role}
    </p>
    <p className="mt-4 text-sm leading-7 text-brand-graySoft">
      {member.description}
    </p>

    {member.socials && member.socials.length > 0 && (
      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {member.socials.map((social) => (
          <Link
            key={`${member.name}-${social.label}`}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-brand-graySoft transition-colors hover:border-brand-petalPink/50 hover:text-white"
          >
            {social.label}
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        ))}
      </div>
    )}
  </article>
);

export default function TeamSection({ content }: { content: AboutTeamContent }) {
  return (
    <section className="bg-brand-navyDark py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-petalPink">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          {content.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-brand-graySoft">
          {content.description}
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {content.members.map((member) => (
            <TeamCard key={`${member.name}-${member.role}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

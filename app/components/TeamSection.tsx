import Image from "next/image";
import type { People, Person } from "@/config";
import { SectionLabel } from "./shared/SectionLabel";
import { CollapsibleBio } from "./shared/CollapsibleBio";

function shuffle(items: Person[]): Person[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function TeamSection({ people }: { people: People }) {
  const shuffledPriests = shuffle(people.priests);
  const shuffledLeaders = shuffle(people.leaders);
  return (
    <section id="equipo" className="bg-cloud py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <SectionLabel dotColor="red" text="Equipo" />
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight leading-[0.9]">
              Quienes<br />Nos Guían
            </h2>
          </div>
          <div className="md:col-span-7 md:flex md:items-end">
            <p className="text-stone text-base leading-relaxed max-w-md">
              Sacerdotes que acompañan, forman
              y acompañan en sinodalidad a los jóvenes de la parroquia.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {shuffledPriests.map((priest) => (
            <div key={priest.name} className="bg-white p-8 flex gap-6">
              <div className="relative w-28 h-32 flex-shrink-0 overflow-hidden bg-cloud">
                <Image
                  src={priest.image}
                  alt={priest.name}
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver mb-2">
                  {priest.role}
                </p>
                <h3 className="font-display text-2xl uppercase tracking-tight mb-2">
                  {priest.name}
                </h3>
                <CollapsibleBio
                  text={priest.description}
                  className="text-stone text-sm leading-relaxed"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight leading-[0.9]">
              Nuestros<br />Líderes
            </h2>
          </div>
          <div className="md:col-span-7 md:flex md:items-end">
            <p className="text-stone text-base leading-relaxed max-w-md">
              Coordinadores y servidores que caminan y se forman junto a los jóvenes de nuestra comunidad.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {shuffledLeaders.map((leader) => (
            <div key={leader.name} className="bg-white p-6">
              <div className="relative w-full aspect-square mb-4 overflow-hidden bg-cloud">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver mb-1">
                {leader.role}
              </p>
              <h3 className="font-semibold text-sm mb-1">{leader.name}</h3>
              <CollapsibleBio
                text={leader.description}
                className="text-stone text-xs leading-relaxed"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

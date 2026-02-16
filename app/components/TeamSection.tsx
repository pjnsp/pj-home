import type { People } from "@/config";
import { SectionLabel } from "./shared/SectionLabel";
import { PersonIcon } from "./shared/icons/PersonIcon";

export function TeamSection({ people }: { people: People }) {
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
              Sacerdotes, coordinadores y servidores que acompañan, forman
              y caminan junto a los jóvenes de nuestra comunidad.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {people.priests.map((priest) => (
            <div key={priest.name} className="bg-white p-8 flex gap-6">
              <div className="photo-placeholder w-28 h-32 flex-shrink-0">
                <PersonIcon />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver mb-2">
                  {priest.role}
                </p>
                <h3 className="font-display text-2xl uppercase tracking-tight mb-2">
                  {priest.name}
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  {priest.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {people.leaders.map((leader) => (
            <div key={leader.name} className="bg-white p-6">
              <div className="photo-placeholder w-full aspect-square mb-4">
                <PersonIcon />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver mb-1">
                {leader.role}
              </p>
              <h3 className="font-semibold text-sm mb-1">{leader.name}</h3>
              <p className="text-stone text-xs leading-relaxed">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

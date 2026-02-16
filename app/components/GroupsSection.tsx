import Image from "next/image";
import type { Group } from "@/config";
import { SectionLabel } from "./shared/SectionLabel";

export function GroupsSection({ groups }: { groups: Group[] }) {
  return (
    <section id="grupos" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <SectionLabel dotColor="sky" text="Ministerios" />
          <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight leading-[0.9] mb-5">
            Nuestros Grupos
          </h2>
          <p className="text-stone text-base leading-relaxed">
            Seis comunidades con una misión compartida. Cada una ofrece
            un espacio único para crecer, servir y encontrarse con Dios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {groups.map((group) => (
            <a key={group.name} href="#" className="group-card bg-cloud p-8 block">
              <div className="relative w-full aspect-video mb-6 overflow-hidden bg-cloud">
                <Image
                  src={group.image}
                  alt={group.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver mb-2">
                {group.tag}
              </p>
              <h3 className="font-display text-2xl uppercase tracking-tight mb-2">
                {group.name}
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                {group.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { SiteEvent } from "@/config";
import { PjStripe } from "./shared/PjStripe";
import { SectionLabel } from "./shared/SectionLabel";
import { ExternalLinkIcon } from "./shared/icons/ExternalLinkIcon";

function PrimaryEventCard({ event }: { event: SiteEvent }) {
  const titleParts = event.title.split("\n");

  return (
    <div className="bg-ink p-10 md:p-16 mb-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0">
        <PjStripe variant="full" />
      </div>

      <div className="grid md:grid-cols-12 gap-12 pt-4">
        <div className="md:col-span-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
            {event.month}
          </p>
          <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-white leading-[0.9] mb-5">
            {titleParts.map((part, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {part}
              </span>
            ))}
          </h3>
          <p className="text-white/40 text-sm leading-relaxed max-w-md mb-8">
            {event.description}
          </p>
          {event.url && (
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-[12px] font-semibold uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-ink transition-all"
            >
              {event.urlLabel ?? "Ver Evento"}
              <ExternalLinkIcon />
            </a>
          )}
        </div>
        {event.details && event.details.length > 0 && (
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="space-y-8">
              {event.details.map((detail) => (
                <div key={detail.label}>
                  <p className="text-white/20 text-[10px] uppercase tracking-[0.25em] mb-1">
                    {detail.label}
                  </p>
                  <p className="text-white font-display text-2xl uppercase">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SecondaryEventCard({ event }: { event: SiteEvent }) {
  return (
    <div className="bg-cloud p-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="dot-sky"></span>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone">
          {event.month}
        </p>
      </div>
      <h3 className="font-display text-3xl uppercase tracking-tight mb-3">
        {event.title}
      </h3>
      <p className="text-stone text-sm leading-relaxed mb-4">
        {event.description}
      </p>
      {event.dateRange && (
        <p className="text-silver text-[11px] font-bold uppercase tracking-[0.2em]">
          {event.dateRange}
        </p>
      )}
    </div>
  );
}

interface EventsSectionProps {
  primaryEvents: SiteEvent[];
  secondaryEvents: SiteEvent[];
  showMoreEventsSoon: boolean;
}

export function EventsSection({ primaryEvents, secondaryEvents, showMoreEventsSoon }: EventsSectionProps) {
  return (
    <section id="eventos" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <SectionLabel dotColor="lime" text="Calendario" />
          <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight leading-[0.9]">
            Próximos Eventos
          </h2>
        </div>

        {primaryEvents.map((event) => (
          <PrimaryEventCard key={event.title} event={event} />
        ))}

        {(secondaryEvents.length > 0 || showMoreEventsSoon) && (
          <div className="grid md:grid-cols-2 gap-6">
            {secondaryEvents.map((event) => (
              <SecondaryEventCard key={event.title} event={event} />
            ))}
            {showMoreEventsSoon && (
              <div className="bg-cloud p-10 flex flex-col items-center justify-center text-center">
                <div className="flex gap-1.5 mb-3">
                  <span className="dot-sky"></span>
                  <span className="dot-red"></span>
                  <span className="dot-gold"></span>
                  <span className="dot-lime"></span>
                  <span className="dot-navy"></span>
                </div>
                <p className="text-silver text-sm">Más eventos próximamente</p>
                <p className="text-pale text-xs mt-1">Síguenos en redes para enterarte</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

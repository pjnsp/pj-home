import Image from "next/image";
import type { Contact, SocialLink } from "@/config";
import { PjStripe } from "./shared/PjStripe";
import { ExternalLinkIcon } from "./shared/icons/ExternalLinkIcon";
import { SocialIcon } from "./shared/icons/SocialIcon";

interface FooterSectionProps {
  contacts: Contact[];
  social: SocialLink[];
}

export function FooterSection({ contacts, social }: FooterSectionProps) {
  return (
    <footer id="contacto" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="w-10 mb-8">
              <PjStripe />
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight leading-[0.9] mb-6">
              Hablemos
            </h2>
            <p className="text-stone text-base leading-relaxed mb-10">
              Tienes preguntas, quieres unirte a un grupo o simplemente
              quieres conocernos. Escríbenos o búscanos en redes.
            </p>
            <div className="space-y-5 mb-10">
              {contacts.map((contact) => (
                <div key={contact.phoneUri}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver mb-1">
                    {contact.role}
                  </p>
                  <p className="font-semibold">
                    {contact.name} —{" "}
                    <a
                      href={`tel:${contact.phoneUri}`}
                      className="underline underline-offset-2 decoration-pale hover:decoration-ink transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {social.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-pale flex items-center justify-center text-stone hover:text-ink hover:border-ink transition-all"
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver mb-4">Ubicación</p>
            <h3 className="font-display text-xl uppercase tracking-tight mb-3">Parroquia Nuestra Señora de la Paz</h3>
            <p className="text-stone text-sm leading-relaxed mb-1">
              Calle Rancho el Retiro Sur 3517
            </p>
            <p className="text-stone text-sm leading-relaxed mb-1">
              Fracc. Pradera Dorada, CP 32618
            </p>
            <p className="text-stone text-sm leading-relaxed mb-1">
              Ciudad Juárez, Chihuahua
            </p>
            <p className="text-pale text-sm mt-3 mb-12">
              Sábados, 5:00 PM — Salones parroquiales
            </p>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver mb-4">Enlaces</p>
            <div className="space-y-2.5 text-sm">
              <a href="https://www.parroquiansp.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone hover:text-ink transition-colors">
                <ExternalLinkIcon className="w-3 h-3 text-pale" />
                Parroquia Nuestra Señora de la Paz
              </a>
              <a href="https://diocesisciudadjuarez.org/inicio/" className="flex items-center gap-2 text-stone hover:text-ink transition-colors">
                <ExternalLinkIcon className="w-3 h-3 text-pale" />
                Diócesis de Ciudad Juárez
              </a>
            </div>
          </div>
        </div>

        <PjStripe variant="full" />
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="PJ"
              width={26}
              height={26}
              className="rounded-full"
            />
            <p className="text-stone text-xs">
              &copy; 2026 Pastoral Juvenil — Parroquia Nuestra Señora de la Paz
            </p>
          </div>
          <p className="text-pale text-xs">
            Hecho con amor por{" "}
            <a href="https://diogneto-labs.pjnsp.com" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-ink transition-colors">
              Diogneto
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

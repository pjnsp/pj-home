export function SectionLabel({ dotColor, text }: { dotColor: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className={`dot-${dotColor}`}></span>
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone">{text}</p>
    </div>
  );
}

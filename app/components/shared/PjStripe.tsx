export function PjStripe({ variant = "inline" }: { variant?: "inline" | "full" }) {
  const className = variant === "full" ? "pj-stripe-full" : "pj-stripe";

  return (
    <div className={className}>
      <span></span><span></span><span></span><span></span><span></span>
    </div>
  );
}

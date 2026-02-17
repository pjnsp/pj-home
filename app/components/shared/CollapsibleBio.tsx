"use client";

import { useState } from "react";

const TRUNCATE_THRESHOLD = 120;

export function CollapsibleBio({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = text.length > TRUNCATE_THRESHOLD;

  if (!isLong) {
    return <p className={className}>{text}</p>;
  }

  const truncated = text.slice(0, TRUNCATE_THRESHOLD).trimEnd();

  return (
    <p className={className}>
      {isExpanded ? text : `${truncated}…`}
      <button
        type="button"
        onClick={() => setIsExpanded((previous) => !previous)}
        className="ml-1 text-pj-sky hover:underline cursor-pointer"
      >
        {isExpanded ? "ver menos" : "ver más"}
      </button>
    </p>
  );
}

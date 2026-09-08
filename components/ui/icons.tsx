interface IconProps {
  className?: string;
}

/** Bracket mark used next to the wordmark. */
export function LogoMark({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="1" width="22" height="22" rx="5" />
      <path d="M8 6v12h9" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M15.5 21A13.5 13.5 0 0 1 3 8.5V6a2 2 0 0 1 2-2h2l1.5 4-2 1.5a11 11 0 0 0 5 5L13 12.5 17 14v2a2 2 0 0 1-2 2Z" />
    </svg>
  );
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

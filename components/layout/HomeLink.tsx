"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

/**
 * Link to the top of the home page. On the home page itself a plain `/` link
 * does nothing once the URL is already `/`, so it scrolls back to the hero and
 * drops any `#section` from the address instead.
 */
export function HomeLink({ onClick, ...props }: Omit<ComponentProps<typeof Link>, "href">) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (pathname !== "/" || event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    if (window.location.hash) window.history.replaceState(window.history.state, "", "/");
    window.scrollTo({ top: 0 });
  };

  return <Link href="/" onClick={handleClick} {...props} />;
}

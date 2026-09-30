"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface MenuLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export function MenuLink({ href, className, children }: MenuLinkProps) {
  return (
    <Link
      className={className}
      href={href}
      onClick={() => {
        if (typeof window !== "undefined" && window.location.pathname === href) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      {children}
    </Link>
  );
}

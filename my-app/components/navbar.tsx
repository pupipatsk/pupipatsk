"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Photography", path: "/photography" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-border/40 bg-background/80 p-1 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-foreground",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:bg-muted/50"
              )}
            >
              {isActive && (
                <span className="absolute inset-0 -z-10 rounded-full bg-muted" />
              )}
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

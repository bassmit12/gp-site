// components/main-nav.tsx
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, Briefcase, Users, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="#hero"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Home className="mr-2 h-4 w-4" />
        Home
      </Link>
      <Link
        href="#projects"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Briefcase className="mr-2 h-4 w-4" />
        Projects
      </Link>
      <Link
        href="#about"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Users className="mr-2 h-4 w-4" />
        About
      </Link>
      <Link
        href="#contact"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Mail className="mr-2 h-4 w-4" />
        Contact
      </Link>
      <Button variant="outline" className="border-blue-400 text-blue-400">
        Get Quote
      </Button>
    </nav>
  );
};

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "pupipat.sk@gmail.com";

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy email address:", error);
    }
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Interested in working together or have any questions?
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row pt-8">
          <Button
            variant="outline"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
          >
            {copied ? "Copied!" : "Copy Email"}
          </Button>
          <Button variant="outline" asChild>
            <Link
              href="https://www.linkedin.com/in/pupipatsk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href="https://github.com/pupipatsk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

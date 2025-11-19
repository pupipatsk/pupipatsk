import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";

export default function ContactPage() {
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
          <Button asChild>
            <Link href="mailto:pupipat.sk@gmail.com">Email Me</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href="https://www.linkedin.com/in/pupipatsk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href="https://github.com/pupipatsk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}


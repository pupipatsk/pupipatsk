import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

export default function ResumeHeader() {
  return (
    <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 className="text-3xl font-bold">Pupipat Singkhorn</h1>
        <div className="mt-2 flex flex-col space-y-1 text-muted-foreground sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
          <span>📧 pupipat.sk@gmail.com</span>
          <span className="hidden sm:inline">•</span>
          <span>📍 Bangkok, Thailand</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <Link
            href="https://www.linkedin.com/in/pupipatsk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link
            href="https://github.com/pupipatsk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
      <Button variant="outline" className="shrink-0" asChild>
        <Link href="/files/resume.pdf" download>
          <Download className="mr-2 h-4 w-4" /> Download CV
        </Link>
      </Button>
    </div>
  );
}

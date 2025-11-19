import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
            <div className="flex flex-col justify-center space-y-4 mx-auto lg:ml-16 lg:mx-0">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pupipat Singkhorn
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Computer Engineering Student
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground">
                I'm a Computer Engineering student at Chulalongkorn University
                with a passion for data science, machine learning, and financial
                technology. Currently focused on developing skills in risk
                management and quantitative analysis.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/resume">
                    View Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/photography">
                    View Photography <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-full border border-border mx-auto lg:mr-16 lg:mx-0">
              <Image
                src="/profile/profile-photo.png"
                width={450}
                height={450}
                alt="Portrait of Pupipat Singkhorn"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-border py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-sans font-semibold text-2xl tracking-tighter sm:text-3xl">
                Get in Touch
              </h2>
              <p className="max-w-[600px] text-muted-foreground">
                Interested in working together or have any questions?
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
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
      </section>
    </div>
  );
}

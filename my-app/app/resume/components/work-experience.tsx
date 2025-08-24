import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function WorkExperienceSection() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">Work Experience</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              Quantitative Research Intern — Soberin
            </h3>
            <span className="text-sm text-muted-foreground">
              August 2025 - October 2025
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Market Microstructure
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Cryptocurrency
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Quantitative Research
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">Risk Management Analyst Intern — SCBX</h3>
            <span className="text-sm text-muted-foreground">
              May 2025 - July 2025
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Enterprise Risk Management
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Business Process Improvement
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Operational Risk
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">
              Data Scientist Intern — Kiatnakin Phatra Bank
            </h3>
            <span className="text-sm text-muted-foreground">
              June 2024 - July 2024
            </span>
          </div>
          <div className="space-y-2">
            <div>
              <h4 className="font-medium">Used Car Price Forecasting</h4>
              <ul className="ml-5 list-disc text-sm text-muted-foreground">
                <li>
                  Developed ensemble machine learning models to forecast used
                  car prices, aiding strategic decisions for automotive loan
                  approvals.
                </li>
                <li>
                  Collected and cleaned real-world business data, incorporating
                  macro- and micro-economic factors.
                </li>
                <li>
                  Leveraged time-series analysis and Bayesian optimization
                  techniques for enhanced accuracy.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Loss On Sale Forecasting for NPLs</h4>
              <ul className="ml-5 list-disc text-sm text-muted-foreground">
                <li>
                  Built predictive models to estimate losses on Non-Performing
                  Loans (NPLs), improving the bank's credit risk management.
                </li>
                <li>
                  Applied techniques like coarse classing, binning, and memory
                  optimization to improve performance.
                </li>
              </ul>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="rounded-full font-mono text-sm font-light text-muted-foreground"
                >
                  Machine Learning
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full font-mono text-sm font-light text-muted-foreground"
                >
                  Time-Series
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full font-mono text-sm font-light text-muted-foreground"
                >
                  Credit Risk Analytics
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Freelance</h3>
          <div className="space-y-2">
            <div>
              <h4 className="font-medium">Physics & Mathematics Tutor</h4>
              <div className="text-sm text-muted-foreground">
                Provided Physics and Mathematics lessons for Physics Olympiad
                camps, university admissions, and high school preparation.
                <ul className="ml-5 list-disc text-sm text-muted-foreground">
                  <li>
                    Students admitted to Chulalongkorn University's Faculty of
                    Engineering and International School of Engineering (ISE)
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-medium">Photographer</h4>
              <p className="text-sm text-muted-foreground">
                Photographed various events and private sessions.
                <Link
                  href="https://www.instagram.com/pupick.sk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 inline-flex items-center text-sm hover:text-foreground"
                >
                  Instagram Portfolio <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

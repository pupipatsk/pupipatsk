import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillsSection() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">Skills & Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Technical Skills section */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-sans font-medium">Programming languages</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "SQL",
                    "C++",
                    "C",
                    "HTML",
                    "CSS",
                    "LaTeX",
                    "Markdown",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="rounded-full font-mono text-sm font-light text-muted-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-sans font-medium">Libraries & Tools</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "PyTorch",
                    "Scikit-learn",
                    "Pandas",
                    "NumPy",
                    "Matplotlib",
                    "Plotly",
                    "Streamlit",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="rounded-full font-mono text-sm font-light text-muted-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-sans font-medium">Applications</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Excel", "Power BI", "Tableau", "Git", "GitHub"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="rounded-full font-mono text-sm font-light text-muted-foreground"
                      >
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-sans font-medium">Languages</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Thai (Native)", "English"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="rounded-full font-mono text-sm font-light text-muted-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications section */}
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              <li className="space-y-1">
                <div className="font-serif font-medium">
                  Google Business Intelligence Specialization
                </div>
                <div className="text-sm text-muted-foreground">
                  Google (Aug 2025)
                </div>
              </li>
              <li className="space-y-1">
                <div className="font-serif font-medium">
                  Risk Management Specialization
                </div>
                <div className="text-sm text-muted-foreground">
                  New York Institute of Finance (Jun 2025)
                </div>
              </li>
              <li className="space-y-1">
                <div className="font-serif font-medium">
                  Financial Engineering and Risk Management Specialization
                </div>
                <div className="text-sm text-muted-foreground">
                  Columbia University (Nov 2024)
                </div>
              </li>
              <li className="space-y-1">
                <div className="font-serif font-medium">
                  Machine Learning Specialization
                </div>
                <div className="text-sm text-muted-foreground">
                  DeepLearning.AI & Stanford University (Aug 2024)
                </div>
              </li>
              <li className="space-y-1">
                <div className="font-serif font-medium">
                  Google Data Analytics Professional Certificate
                </div>
                <div className="text-sm text-muted-foreground">
                  Google (Jul 2023)
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

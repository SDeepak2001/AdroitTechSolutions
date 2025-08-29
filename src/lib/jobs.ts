export type Job = {
  slug: string;
  title: string;
  description: string;
  location: string;
  type: "CONTRACT" | "FULL_TIME" | "PART_TIME" | "CONTRACT_TO_HIRE";
  remote: boolean;
  skills: string[];
  min?: number; max?: number; currency?: string; unitText?: "HOUR"|"YEAR";
  datePosted: string; // YYYY-MM-DD
};

export const jobs: Job[] = [
  {
    slug: "senior-backend-java-aws-remote",
    title: "Senior Backend Engineer (Java/AWS)",
    description:
      "Build and scale microservices on AWS (Java/Spring, Postgres, event-driven).",
    location: "Remote (USA)",
    type: "CONTRACT",
    remote: true,
    skills: ["Java", "Spring", "AWS", "PostgreSQL"],
    min: 75, max: 90, currency: "USD", unitText: "HOUR",
    datePosted: new Date().toISOString().slice(0,10),
  },
  {
    slug: "devops-engineer-eks-terraform",
    title: "DevOps Engineer (EKS/Terraform)",
    description:
      "Own IaC modules, EKS/ECS, CI/CD, observability and SRE practices.",
    location: "Portland, OR (Remote OK)",
    type: "CONTRACT_TO_HIRE",
    remote: true,
    skills: ["EKS", "Terraform", "GitHub Actions", "CloudWatch"],
    datePosted: new Date().toISOString().slice(0,10),
  },
];

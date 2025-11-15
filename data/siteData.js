// ============================================================
// TUSHAR PATOLE - PORTFOLIO DATA
// ============================================================
// This file contains all the real data for the portfolio website.
// Update this file to customize your portfolio content.
// ============================================================

// BASIC PROFILE INFORMATION
export const siteAuthor = {
  name: "Tushar Patole",
  designation: "DevOps Engineer",
  location: "Mumbai, India",
  email: "patoletusharajit@gmail.com",
  phone: "+91 7767951871",
  status: "Available for work",
  birthday: "22-09-2000",
};

// META / SEO DEFAULTS
export const siteMeta = {
  title: "Tushar Patole | DevOps Engineer",
  description:
    "DevOps Engineer with 4 years of hands-on experience in automating, configuring, and maintaining IT infrastructure and cloud services. Expert in Docker, Kubernetes, Jenkins, Ansible, Terraform, and AWS.",
};

// PATHS TO STATIC ASSETS
export const assetPaths = {
  // HOW TO REPLACE PROFILE IMAGE:
  // 1. Put your profile picture at /public/images/tushar-profile.jpg
  // 2. Or update the path below to match your filename
  profileImage: "/images/tushar-profile.jpeg",

  // HOW TO UPDATE RESUME FILE:
  // 1. Export your resume as PDF
  // 2. Place it at /public/resume/tushar-resume.pdf
  // 3. Or update the path below
  resumePdf: "/resume/tushar-resume.pdf",
};

// SOCIAL LINKS
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Patoletusharr", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/tushar-patole-58122b31a/", icon: "linkedin" },
  { label: "Email", href: "mailto:patoletusharajit@gmail.com", icon: "mail" },
  { label: "Phone", href: "tel:+917767951871", icon: "phone" },
];

// ABOUT / SUMMARY
export const aboutSection = {
  shortIntro:
    "DevOps Engineer with 4 years of hands-on experience in automating, configuring, and maintaining IT infrastructure and cloud services.",
  longBio:
    "DevOps Engineer with 4 years of hands-on experience in automating, configuring, and maintaining IT infrastructure and cloud services. Adept at leveraging Docker, Kubernetes, Jenkins, Ansible, and Terraform to streamline development lifecycles and enhance system reliability. Proven expertise in AWS cloud, CI/CD pipelines, container orchestration, observability, and infrastructure automation — with a strong commitment to DevOps best practices, scalability, and operational excellence.",
};

// WHAT I'M DOING - Service Cards
export const services = [
  {
    title: "DevOps Engineering",
    description: "Building robust CI/CD pipelines, automating infrastructure, and ensuring seamless deployments with zero downtime.",
    icon: "devops",
  },
  {
    title: "Cloud Engineering",
    description: "Designing and managing scalable cloud infrastructure on AWS with focus on cost optimization and high availability.",
    icon: "cloud",
  },
  {
    title: "Site Reliability Engineering",
    description: "Implementing monitoring, alerting, and observability solutions using Prometheus, Grafana, and CloudWatch.",
    icon: "sre",
  },
  {
    title: "Infrastructure as Code",
    description: "Automating infrastructure provisioning and management using Terraform, CloudFormation, and GitOps practices.",
    icon: "iac",
  },
];

// TECHNICAL SKILLS - Organized by category
export const skills = {
  "CI/CD Tools": ["Jenkins", "GitHub Actions", "CodeBuild", "ArgoCD"],
  "Containers & Orchestration": [
    "Docker",
    "Kubernetes",
    "Amazon EKS",
    "ECS Fargate",
    "ECR",
    "Helm",
  ],
  "Infrastructure as Code": ["Terraform", "CloudFormation", "Ansible"],
  "Monitoring & Logging": [
    "CloudWatch",
    "Grafana",
    "Prometheus",
    "ELK Stack",
    "CloudTrail",
  ],
  "AWS Cloud": [
    "EC2",
    "S3",
    "RDS",
    "IAM",
    "VPC",
    "Route53",
    "ASG",
    "CloudFront",
    "Lambda",
    "SNS",
    "SQS",
    "Cost Explorer",
  ],
  "Programming & Scripting": ["Python", "Shell Scripting", "Bash"],
  "Databases": ["MySQL", "PostgreSQL", "Aurora Serverless"],
  "Version Control & Collaboration": ["Git", "GitHub", "GitOps"],
  "Security & Secrets": ["KMS", "Secrets Manager", "SonarQube"],
};

// PROFESSIONAL EXPERIENCE
export const experienceTimeline = [
  {
    company: "Shypbuddy India Pvt Ltd",
    role: "DevOps Engineer",
    period: "March 2025 – Present",
    location: "Mumbai, India",
    description:
      "Leading DevOps initiatives for microservices architecture on AWS, implementing CI/CD pipelines, and building observability solutions.",
    highlights: [
      "Developed & deployed 15+ microservices on Amazon EKS & ECS Fargate",
      "Built observability pipelines (CloudWatch + Grafana)",
      "Automated provisioning using Terraform",
      "Achieved 40% ECR storage cost reduction with cleanup workflows",
      "Designed CI/CD pipelines: CodeBuild, Jenkins, GitHub Actions",
      "Integrated SonarQube for secure code analysis",
      "Implemented Kubernetes health checks & self-healing",
      "Built GitOps workflows using Helm & ArgoCD",
      "Designed Prometheus + Grafana alerting",
      "Implemented asynchronous SQS order processing pipeline",
      "Delivered zero-downtime blue/green and rolling updates",
      "Led incident response & RCA",
      "Built secure, staged CI/CD pipelines for multi-environment deployment",
    ],
  },
  {
    company: "Stanvac Systems Pvt Ltd",
    role: "DevOps Engineer",
    period: "Feb 2022 – Feb 2025",
    location: "Mumbai, India",
    description:
      "Managed AWS infrastructure, designed CI/CD pipelines, and supported DevOps automation adoption across teams.",
    highlights: [
      "Designed CI/CD pipelines in AWS",
      "Managed AWS infrastructure with Terraform",
      "Administered EKS clusters",
      "Managed EC2, S3, IAM, VPC, Route53",
      "Supported release cycles & DevOps automation adoption",
      "Reduced DB and compute costs by 30% using Aurora Serverless v2 & Lambda",
      "Designed cost-optimized high-performance cloud workloads",
    ],
  },
];

// PROJECTS / PORTFOLIO
// ------------------------------------------------------------
// HOW TO ADD NEW PROJECTS:
// 1. Add a new object to this `projects` array.
// 2. Put a thumbnail image in /public/projects
// 3. Reference it via image: "/projects/your-image.jpg"
// ------------------------------------------------------------
export const projects = [
  {
    id: "microservices-eks-deployment",
    title: "Microservices Deployment on EKS",
    description:
      "Architected and deployed 15+ microservices on Amazon EKS with auto-scaling, health checks, and zero-downtime deployments.",
    techStack: ["Kubernetes", "EKS", "Helm", "ArgoCD", "Terraform"],
    image: "/projects/eks-microservices.jpg",
    category: "Cloud Infrastructure",
    highlights: [
      "Implemented GitOps workflows with ArgoCD",
      "Configured horizontal pod autoscaling",
      "Set up blue/green and rolling deployment strategies",
      "Integrated with AWS Load Balancer Controller",
    ],
  },
  {
    id: "cicd-pipeline-automation",
    title: "Multi-Stage CI/CD Pipeline",
    description:
      "Designed and implemented secure, multi-environment CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodeBuild.",
    techStack: ["Jenkins", "GitHub Actions", "CodeBuild", "SonarQube", "Docker"],
    image: "/projects/cicd-pipeline.jpg",
    category: "DevOps Automation",
    highlights: [
      "Integrated SonarQube for code quality gates",
      "Automated security scanning in pipelines",
      "Reduced deployment time by 60%",
      "Implemented approval workflows for production",
    ],
  },
  {
    id: "observability-stack",
    title: "Observability & Monitoring Stack",
    description:
      "Built comprehensive observability solution using Prometheus, Grafana, and CloudWatch for real-time monitoring and alerting.",
    techStack: ["Prometheus", "Grafana", "CloudWatch", "ELK Stack"],
    image: "/projects/observability.jpg",
    category: "Monitoring & SRE",
    highlights: [
      "Designed custom Grafana dashboards",
      "Configured Prometheus alerting rules",
      "Integrated with PagerDuty for incident management",
      "Reduced MTTR by 45%",
    ],
  },
  {
    id: "terraform-infrastructure",
    title: "Infrastructure as Code with Terraform",
    description:
      "Automated AWS infrastructure provisioning using Terraform modules for VPC, EKS, RDS, and supporting services.",
    techStack: ["Terraform", "AWS", "CloudFormation", "Ansible"],
    image: "/projects/terraform-iac.jpg",
    category: "Infrastructure as Code",
    highlights: [
      "Created reusable Terraform modules",
      "Implemented remote state management with S3 + DynamoDB",
      "Automated infrastructure testing with Terratest",
      "Reduced provisioning time from hours to minutes",
    ],
  },
  {
    id: "cost-optimization",
    title: "AWS Cost Optimization Initiative",
    description:
      "Led cost optimization efforts resulting in 30-40% reduction in cloud spending through right-sizing, automation, and serverless adoption.",
    techStack: ["AWS Cost Explorer", "Lambda", "Aurora Serverless", "S3 Lifecycle"],
    image: "/projects/cost-optimization.jpg",
    category: "Cloud Optimization",
    highlights: [
      "Implemented ECR image cleanup workflows (40% storage reduction)",
      "Migrated to Aurora Serverless v2 (30% cost savings)",
      "Configured S3 lifecycle policies",
      "Set up cost anomaly detection alerts",
    ],
  },
];

// EDUCATION
export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  institution: "D.Y. Patil College of Engineering",
  university: "Shivaji University, Kolhapur",
  period: "2018 – 2022",
};

// ACHIEVEMENTS
export const achievements = [
  {
    title: "Hero of the Cluster Award",
    organization: "Stanvac Systems",
    description: "Recognized for outstanding contributions to DevOps initiatives and team collaboration.",
  },
  {
    title: "Cost Optimization Champion",
    organization: "Stanvac Systems",
    description: "Reduced DB and compute costs by 30% using Aurora Serverless v2 & Lambda.",
  },
  {
    title: "Zero-Downtime Deployments",
    organization: "Shypbuddy India",
    description: "Successfully implemented blue/green deployment strategies across 15+ microservices.",
  },
];

// HOBBIES & INTERESTS
export const hobbies = [
  { name: "Calisthenics", icon: "fitness" },
  { name: "Chess", icon: "chess" },
  { name: "Music", icon: "music" },
  { name: "Reading Technical Blogs", icon: "book" },
];

// CERTIFICATIONS (Add your actual certifications here)
// ------------------------------------------------------------
// HOW TO ADD CERTIFICATIONS:
// 1. Drop certificate images inside /public/certifications
// 2. Reference them in the `image` field
// 3. Add a new object to the `certifications` array
// ------------------------------------------------------------
export const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2024",
    image: "/certifications/aws-cert.png",
  },
  // Add more certifications as you earn them
];

// BLOG POSTS
// ------------------------------------------------------------
// HOW TO ADD NEW BLOG POSTS:
// 1. Add a new object to the `blogs` array below
// 2. Provide a unique `slug` and full `content`
// 3. Optionally, add a cover image from /public/blog-images
// ------------------------------------------------------------
export const blogs = [
  {
    slug: "kubernetes-best-practices-production",
    title: "Kubernetes Best Practices for Production Workloads",
    date: "2024-11-10",
    readingTime: "8 min read",
    excerpt:
      "Essential Kubernetes patterns and practices I've learned from managing 15+ microservices in production on Amazon EKS.",
    image: "/blog-images/kubernetes-best-practices.jpg",
    tags: ["Kubernetes", "EKS", "DevOps", "Best Practices"],
    content:
      "After deploying and managing 15+ microservices on Amazon EKS, I've learned valuable lessons about what works in production. This post covers resource limits, health checks, autoscaling strategies, and GitOps workflows that ensure reliability and scalability...",
  },
  {
    slug: "terraform-modules-reusable-infrastructure",
    title: "Building Reusable Terraform Modules for AWS",
    date: "2024-10-22",
    readingTime: "10 min read",
    excerpt:
      "How to design modular, reusable Terraform code that scales across multiple environments and teams.",
    image: "/blog-images/terraform-modules.jpg",
    tags: ["Terraform", "IaC", "AWS", "Automation"],
    content:
      "Infrastructure as Code is most powerful when it's reusable and maintainable. In this post, I share patterns for creating Terraform modules that work across dev, staging, and production environments, with examples from real AWS infrastructure...",
  },
  {
    slug: "cicd-pipeline-security-best-practices",
    title: "Securing Your CI/CD Pipeline: A Practical Guide",
    date: "2024-09-15",
    readingTime: "7 min read",
    excerpt:
      "Practical steps to secure your CI/CD pipelines with code scanning, secret management, and approval workflows.",
    image: "/blog-images/cicd-security.jpg",
    tags: ["CI/CD", "Security", "DevSecOps", "Jenkins"],
    content:
      "Security should be built into your CI/CD pipeline from day one. This guide covers integrating SonarQube for code quality, managing secrets with AWS Secrets Manager, implementing approval gates, and scanning container images for vulnerabilities...",
  },
  {
    slug: "aws-cost-optimization-strategies",
    title: "AWS Cost Optimization: Lessons from Reducing Spend by 30%",
    date: "2024-08-05",
    readingTime: "9 min read",
    excerpt:
      "Real-world strategies that helped me reduce AWS costs by 30-40% without compromising performance or reliability.",
    image: "/blog-images/aws-cost-optimization.jpg",
    tags: ["AWS", "Cost Optimization", "Cloud", "FinOps"],
    content:
      "Cloud costs can spiral quickly if left unchecked. I'll share the exact strategies I used to achieve 30-40% cost reduction: right-sizing instances, implementing lifecycle policies, migrating to Aurora Serverless v2, and setting up cost anomaly detection...",
  },
];

// EXPORT ALL DATA TOGETHER
export const siteData = {
  siteAuthor,
  siteMeta,
  assetPaths,
  socialLinks,
  aboutSection,
  services,
  skills,
  experienceTimeline,
  projects,
  education,
  achievements,
  hobbies,
  certifications,
  blogs,
};

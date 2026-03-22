import logo from '../assets/myLogo/myFinalLogoTeal.png';
import bdsrLogo from '../assets/experienceLogos/bdsr-logo-final.png';
import inteleradLogo from '../assets/experienceLogos/intelerad-logo.jpeg';
import telusLogo from '../assets/experienceLogos/telus-icon.png';

import javaLogo from '../assets/skills/java.png';
import csharpLogo from '../assets/skills/c-sharp.png';
import javascriptLogo from '../assets/skills/javascript-icon.png';
import pythonLogo from '../assets/skills/python-logo-only.png';

import reactLogo from '../assets/skills/React-icon.png';
import astroLogo from '../assets/skills/Astro-icon.png';
import tailwindLogo from '../assets/skills/Tailwind-icon.png';
import reduxLogo from '../assets/skills/Redux-icon.png';

import aspNetLogo from '../assets/skills/Aspnet-core-icon.png';
import nodeLogo from '../assets/skills/node-icon.png';
import flaskLogo from '../assets/skills/flask-logo.png';
import laravelLogo from '../assets/skills/Laravel-icon.png';

import awsLogo from '../assets/skills/Aws-icon.png';
import gcpLogo from '../assets/skills/google-cloud.png';
import dockerLogo from '../assets/skills/docker-logo.webp';
import terraformLogo from '../assets/skills/terraform.png';

import postgresLogo from '../assets/skills/postgresql-logo.png';
import oracleLogo from '../assets/skills/oracle-db-icon.png';
import dbeaverLogo from '../assets/skills/dbeaver-icon.png';
import linuxLogo from '../assets/skills/Linux-icon.png';

import gitLogo from '../assets/skills/git.png';
import githubActionsLogo from '../assets/skills/github-actions-icon.png';
import shellLogo from '../assets/skills/shell-icon.png';
import jiraLogo from '../assets/skills/jira-icon.png';

export type DocumentCategory = 'personal' | 'academic' | 'capstone';

export interface PortfolioDocument {
  title: string;
  path: string;
  type: string;
  summary: string;
  category: DocumentCategory;
}

export const siteMeta = {
  title: 'Henrique Custodio | Portfolio',
  description:
    'Portfolio for Henrique Custodio featuring projects, professional experience, academic background, and capstone work.',
  email: 'h.custodio.dev@gmail.com',
  location: 'Toronto, Ontario, Canada',
  resumePath: '/resume/Henrique_Custodio_Resume_Updated_2025.pdf',
  coverLetterPath: '/docs/cover-letter-template.txt',
  philosophyPath: '/docs/career-philosophy-statement.txt',
  academicSummaryPath: '/docs/academic-credentials-summary.txt',
  capstoneOutlinePath: '/docs/capstone-project-management-outline.txt',
  logo,
};

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hcustod/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/hcustod', icon: 'github' },
  { label: 'Email', href: `mailto:${siteMeta.email}`, icon: 'mail' },
] as const;

export const heroRotator = [
  'Developer',
  'Cloud Engineer',
  'Systems Operator',
  'Automation Builder',
  'Builder',
];

export const homeHighlights = [
  'Work now groups projects, professional material, and capstone coverage into one path.',
  'About combines bio, academic background, certifications, and core documents.',
  'The transparent interface keeps the Three.js background visible across the site.',
];

export const experiences = [
  {
    company: 'Bohrium Data & Security Research Corp.',
    role: 'Assistant Developer',
    date: 'October 2024 - Present',
    location: 'Toronto, ON',
    logo: bdsrLogo,
    link: '#',
    points: [
      'Containerized legacy CMS sites with Docker and deployed them to AWS and GCP environments using repeatable rollout patterns.',
      'Migrated PostgreSQL databases to current supported versions while protecting data integrity and availability.',
      'Provisioned secure cloud infrastructure including virtual machines, storage, DNS, firewalls, and SSL certificates.',
      'Improved operational resilience through backups, monitoring, and disaster recovery routines.',
    ],
    tools: ['Docker', 'PostgreSQL', 'AWS', 'GCP', 'Git', 'Java', 'Bash', 'CI/CD'],
  },
  {
    company: 'Intelerad Medical Systems',
    role: 'System Technology Specialist',
    date: 'January 2024 - September 2024',
    location: 'Toronto, ON',
    logo: inteleradLogo,
    link: 'https://www.intelerad.com/en/',
    points: [
      'Supported production Linux environments powering PACS radiology systems and related services.',
      'Maintained HL7 and DICOM routing services, scheduled jobs, SELinux policies, and network controls.',
      'Administered Sybase and PostgreSQL databases with a focus on performance and security.',
      'Automated repeatable deployment and troubleshooting work with Bash and infrastructure tooling.',
    ],
    tools: ['RHEL', 'PostgreSQL', 'Sybase', 'HL7', 'Bash', 'Ansible', 'DICOM'],
  },
  {
    company: 'TELUS',
    role: 'Developer Analyst II',
    date: 'May 2022 - August 2023',
    location: 'Montreal, QC',
    logo: telusLogo,
    link: 'https://www.telus.com',
    points: [
      'Resolved Google Cloud support cases spanning Cloud SQL, BigQuery, Firestore, Filestore, and Spanner.',
      'Used Linux diagnostics, networking tools, and storage analysis to isolate production issues quickly.',
      'Applied DevOps practices to support enterprise workloads and improve reliability for customers.',
      'Created internal knowledge articles and troubleshooting guides to reduce escalation cycles.',
    ],
    tools: ['GCP', 'Bash', 'Git', 'Jira', 'Networking', 'IAM', 'Java', 'Python'],
  },
];

export const education = [
  {
    school: 'George Brown College',
    location: 'Toronto, Ontario',
    degree: 'Advanced Diploma in Computer Programming and Analysis',
    cgpa: '3.84 / 4.0',
    date: 'September 2022 - April 2025',
    link: 'https://www.georgebrown.ca/',
    coursework: [
      'Object-oriented programming in Java and C#.',
      'Agile team delivery with Git and Jira.',
      'Data structures, algorithms, and performance analysis.',
      'Database-backed web application development.',
      'Linux fundamentals, shell scripting, and operating systems.',
    ],
  },
  {
    school: 'The University of British Columbia',
    location: 'Vancouver, British Columbia',
    degree: 'Bachelor of Arts in Psychology',
    cgpa: '3.13 / 4.33',
    date: 'September 2016 - April 2021',
    link: 'https://www.ubc.ca/',
    coursework: [
      'Research methods and study design.',
      'Quantitative analysis using SPSS and R.',
      'Scientific communication and written reports.',
      'Critical thinking and behavioral analysis.',
    ],
  },
];

export const academicHighlights = [
  {
    title: 'Program standing',
    detail: 'Current portfolio data shows a 3.84 / 4.0 CGPA in the Advanced Diploma program.',
  },
  {
    title: 'Credential summary',
    detail: 'Education history and certifications are grouped here for faster review.',
  },
  {
    title: 'Project archive',
    detail: 'Project work is shown separately in the archive so the portfolio remains easy to scan by category.',
  },
];

export const certifications = [
  {
    title: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    year: '2025',
  },
  {
    title: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    year: '2024',
  },
  {
    title: 'Google Associate Cloud Engineer',
    issuer: 'Google Cloud',
    year: '2023',
  },
  {
    title: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat',
    year: '2023',
  },
  {
    title: 'Systems Security Certified Practitioner (SSCP)',
    issuer: '(ISC)2',
    year: '2023',
  },
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    year: '2022',
  },
  {
    title: 'CompTIA Network+',
    issuer: 'CompTIA',
    year: '2022',
  },
  {
    title: 'CompTIA A+',
    issuer: 'CompTIA',
    year: '2022',
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: javaLogo },
      { name: 'C#', icon: csharpLogo },
      { name: 'JavaScript', icon: javascriptLogo },
      { name: 'Python', icon: pythonLogo },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'Astro', icon: astroLogo },
      { name: 'Tailwind CSS', icon: tailwindLogo },
      { name: 'React', icon: reactLogo },
      { name: 'Redux', icon: reduxLogo },
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      { name: '.NET Core', icon: aspNetLogo },
      { name: 'Node.js', icon: nodeLogo },
      { name: 'Flask', icon: flaskLogo },
      { name: 'Laravel', icon: laravelLogo },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: awsLogo },
      { name: 'GCP', icon: gcpLogo },
      { name: 'Docker', icon: dockerLogo },
      { name: 'Terraform', icon: terraformLogo },
    ],
  },
  {
    title: 'Databases & Systems',
    items: [
      { name: 'PostgreSQL', icon: postgresLogo },
      { name: 'Oracle', icon: oracleLogo },
      { name: 'DBeaver', icon: dbeaverLogo },
      { name: 'Linux', icon: linuxLogo },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: gitLogo },
      { name: 'GitHub Actions', icon: githubActionsLogo },
      { name: 'Shell Scripting', icon: shellLogo },
      { name: 'Jira', icon: jiraLogo },
    ],
  },
];

export const professionalSamples = [
  {
    title: 'Cloud modernization and deployment support',
    organization: 'Bohrium Data & Security Research Corp.',
    summary:
      'Supported modernization work for legacy web properties by containerizing deployments, updating databases, and standardizing cloud infrastructure delivery.',
    outcomes: [
      'Created repeatable Docker-based deployment patterns.',
      'Reduced manual infrastructure setup through documented provisioning steps.',
      'Improved operational resilience with backups and monitoring routines.',
    ],
    tools: ['Docker', 'AWS', 'GCP', 'PostgreSQL', 'Git', 'Bash'],
  },
  {
    title: 'Clinical systems operations and automation',
    organization: 'Intelerad Medical Systems',
    summary:
      'Provided technical support and systems administration for healthcare imaging environments where reliability and incident response were critical.',
    outcomes: [
      'Maintained Linux application servers and database platforms.',
      'Worked through high-severity support issues with SLA pressure.',
      'Improved repeatability through automation and internal documentation.',
    ],
    tools: ['Linux', 'Bash', 'Ansible', 'PostgreSQL', 'Sybase', 'HL7/DICOM'],
  },
  {
    title: 'Enterprise cloud troubleshooting',
    organization: 'TELUS / Google Cloud support work',
    summary:
      'Resolved infrastructure and database issues for cloud customers using structured troubleshooting and written communication.',
    outcomes: [
      'Worked across database, storage, and networking services.',
      'Produced documentation that reduced repeated escalations.',
      'Strengthened customer-facing technical communication.',
    ],
    tools: ['GCP', 'Cloud SQL', 'BigQuery', 'Networking', 'Linux'],
  },
];

export const documents: PortfolioDocument[] = [
  {
    title: 'Resume',
    path: siteMeta.resumePath,
    type: 'PDF',
    summary: 'Current resume used by the homepage and documents index.',
    category: 'personal',
  },
  {
    title: 'Cover Letter Template',
    path: siteMeta.coverLetterPath,
    type: 'TXT',
    summary: 'Editable cover letter template targeted at developer and cloud-focused roles.',
    category: 'personal',
  },
  {
    title: 'Career Philosophy Statement',
    path: siteMeta.philosophyPath,
    type: 'TXT',
    summary: 'Short reflection on career direction, working style, and professional growth.',
    category: 'personal',
  },
  {
    title: 'Academic Credentials Summary',
    path: siteMeta.academicSummaryPath,
    type: 'TXT',
    summary: 'Snapshot of degrees, certifications, and academic highlights.',
    category: 'academic',
  },
  {
    title: 'Capstone Outline',
    path: siteMeta.capstoneOutlinePath,
    type: 'TXT',
    summary: 'Compact written overview of the capstone concept and structure.',
    category: 'capstone',
  },
];

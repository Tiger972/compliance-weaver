import { useState, useEffect, useRef } from "react";
import { 
  Terminal, Activity, FileText, Lock, Shield, Users, BarChart, 
  CheckCircle, AlertTriangle, GitBranch, Copy, Check, ChevronRight,
  Zap, Clock, TrendingUp, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Code Block Component with copy functionality
const CodeBlock = ({ code, language = "bash", showLineNumbers = true }: { 
  code: string; 
  language?: string;
  showLineNumbers?: boolean;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="relative group rounded-xl overflow-hidden border border-border bg-[#1a1b26]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#16171f] border-b border-border/50">
        <span className="text-xs text-muted-foreground font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copié!" : "Copier"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              {showLineNumbers && (
                <span className="w-8 text-muted-foreground/50 select-none text-right mr-4">
                  {i + 1}
                </span>
              )}
              <span className="flex-1">
                {formatCodeLine(line)}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

// Syntax highlighting helper
const formatCodeLine = (line: string) => {
  // Comments
  if (line.trim().startsWith('#') || line.trim().startsWith('//')) {
    return <span className="text-gray-400">{line}</span>;
  }
  // Success messages
  if (line.includes('✅') || line.includes('PASS')) {
    return <span className="text-emerald-400">{line}</span>;
  }
  // Warnings
  if (line.includes('⚠️') || line.includes('FAIL')) {
    return <span className="text-amber-400">{line}</span>;
  }
  // Commands
  if (line.trim().startsWith('$')) {
    const [cmd, ...rest] = line.split(' ');
    return (
      <>
        <span className="text-gray-400">{cmd}</span>
        <span className="text-cyan-400">{' '}{rest.join(' ')}</span>
      </>
    );
  }
  // Keys in YAML/JSON
  if (line.includes(':')) {
    const [key, ...value] = line.split(':');
    return (
      <>
        <span className="text-purple-400">{key}</span>
        <span className="text-white">:</span>
        <span className="text-emerald-400">{value.join(':')}</span>
      </>
    );
  }
  return <span className="text-white">{line}</span>;
};

// Animated section wrapper
const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const HowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const installCode = `# Installation
$ pip install complio

# Configuration AWS credentials
$ complio configure
Profile name: default
AWS Access Key ID: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key: ********
Encryption password: ********

✅ Configuration saved securely (~/.complio/credentials.enc)`;

  const scanCode = `$ complio scan --framework iso27001 --region eu-west-1

✅ License validated: EARLY ACCESS (Founder)
🔍 Scanning AWS account (123456789012)...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 ISO 27001 Infrastructure Tests          4/4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ S3 Bucket Encryption              PASS  15/15 buckets
⚠️  EC2 Security Groups              FAIL  2 issues found
✅ IAM Password Policy               PASS  Policy compliant
✅ CloudTrail Logging                PASS  Multi-region enabled

📊 Compliance Score: 75%
⏱️  Duration: 2m 34s`;

  const iamPolicy = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ComplioReadOnly",
      "Effect": "Allow",
      "Action": [
        "s3:GetBucketEncryption",
        "s3:ListAllMyBuckets",
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeInstances",
        "iam:GetAccountPasswordPolicy",
        "cloudtrail:DescribeTrails",
        "cloudtrail:GetTrailStatus"
      ],
      "Resource": "*"
    }
  ]
}`;

  const markdownReport = `# ISO 27001 Compliance Report
## Executive Summary

**Account:** 123456789012
**Region:** eu-west-1
**Framework:** ISO 27001:2022
**Score:** 75% (3/4 controls passed)
**Generated:** 2024-01-15 14:32:00 UTC

## Test Results

### ✅ A.8.24 - S3 Bucket Encryption
- **Status:** PASS
- **Tested:** 15 buckets
- **Result:** All buckets encrypted (AES-256 or KMS)

### ⚠️ A.13.1.1 - EC2 Security Groups  
- **Status:** FAIL
- **Issues:** 2 security groups with 0.0.0.0/0

**Remediation:**
\`\`\`bash
aws ec2 revoke-security-group-ingress \\
  --group-id sg-0123456789 \\
  --protocol tcp --port 22 \\
  --cidr 0.0.0.0/0
\`\`\``;

  const githubActions = `name: ISO 27001 Compliance Check
on: 
  push:
    branches: [main]
  schedule:
    - cron: '0 6 * * *'

jobs:
  compliance:
    runs-on: ubuntu-latest
    steps:
      - name: Install Compl.io
        run: pip install complio
        
      - name: Run compliance scan
        run: complio scan --framework iso27001
        env:
          AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          
      - name: Check score threshold
        run: |
          SCORE=$(complio report --format json | jq '.score')
          if [ "$SCORE" -lt 80 ]; then exit 1; fi`;

  const gitlabCI = `compliance_check:
  stage: security
  image: python:3.11
  script:
    - pip install complio
    - complio scan --framework iso27001
    - complio report --format pdf --output compliance.pdf
  artifacts:
    paths:
      - compliance.pdf
  rules:
    - if: $CI_PIPELINE_SOURCE == "schedule"
    - if: $CI_COMMIT_BRANCH == "main"`;

  const jenkinsGroovy = `pipeline {
    agent any
    
    stages {
        stage('Compliance Check') {
            steps {
                sh 'pip install complio'
                sh 'complio scan --framework iso27001'
                
                script {
                    def score = sh(
                        script: "complio report --format json | jq '.score'",
                        returnStdout: true
                    ).trim().toInteger()
                    
                    if (score < 80) {
                        error("Compliance score \${score}% below threshold")
                    }
                }
            }
        }
    }
    
    post {
        always {
            archiveArtifacts artifacts: '*.pdf'
        }
    }
}`;

  const scanTimeline = [
    { time: "00:00", label: "Connexion AWS", progress: 0 },
    { time: "00:15", label: "Test S3 Encryption", progress: 25 },
    { time: "00:45", label: "Test EC2 Security Groups", progress: 50 },
    { time: "01:30", label: "Test IAM Password Policy", progress: 75 },
    { time: "02:00", label: "Test CloudTrail", progress: 90 },
    { time: "02:34", label: "Génération rapports ✅", progress: 100 },
  ];

  const testCategories = [
    {
      icon: Lock,
      title: "Chiffrement & Données",
      tests: [
        "S3 bucket encryption (AES-256/KMS)",
        "EBS volume encryption",
        "RDS instance encryption",
        "KMS key rotation",
        "Secrets Manager encryption",
        "DynamoDB encryption",
        "ElastiCache encryption",
        "Redshift encryption",
        "EFS encryption",
        "Backup encryption"
      ]
    },
    {
      icon: Shield,
      title: "Sécurité Réseau",
      tests: [
        "Security Groups restrictions",
        "NACLs configuration",
        "VPC Flow Logs enabled",
        "Public access blocked",
        "ALB/NLB security",
        "WAF rules configured",
        "CloudFront HTTPS only",
        "API Gateway security",
        "VPN configuration",
        "Transit Gateway security"
      ]
    },
    {
      icon: Users,
      title: "Identité & Accès",
      tests: [
        "IAM password policy",
        "MFA enforcement",
        "Root account protection",
        "Access key rotation",
        "IAM policies least privilege",
        "Cross-account access",
        "Service-linked roles",
        "Permission boundaries",
        "Identity federation",
        "Session policies"
      ]
    },
    {
      icon: BarChart,
      title: "Logging & Monitoring",
      tests: [
        "CloudTrail multi-region",
        "Log file validation",
        "Logs stored encrypted",
        "Retention > 90 days",
        "CloudWatch alarms",
        "Config rules enabled",
        "GuardDuty enabled",
        "Security Hub enabled",
        "EventBridge rules",
        "SNS notifications"
      ]
    }
  ];

  const faqs = [
    {
      question: "Quelles permissions AWS sont nécessaires ?",
      answer: "Read-only IAM permissions suffisent. Compl.io ne modifie JAMAIS votre infrastructure. Nous utilisons uniquement des actions Describe* et Get* pour analyser votre configuration."
    },
    {
      question: "Mes credentials AWS sont-elles sécurisées ?",
      answer: "Oui. Vos credentials sont chiffrées AES-256 localement sur votre machine (~/.complio/credentials.enc). Elles ne sont jamais envoyées à nos serveurs."
    },
    {
      question: "Compl.io modifie-t-il mon infrastructure ?",
      answer: "Non. Compl.io est 100% read-only. Nous ne créons, modifions ou supprimons aucune ressource AWS. L'outil se contente de lire les configurations existantes."
    },
    {
      question: "Puis-je scanner plusieurs comptes AWS ?",
      answer: "Oui. Vous pouvez configurer plusieurs profiles AWS avec 'complio configure' et spécifier le profile lors du scan avec --profile."
    },
    {
      question: "Les rapports sont-ils acceptés par les auditeurs ?",
      answer: "Oui. Les rapports PDF sont formatés selon les exigences des auditeurs ISO 27001, avec preuves horodatées et hash cryptographique pour garantir l'intégrité."
    },
    {
      question: "Combien de temps prend un scan ?",
      answer: "2 à 5 minutes selon la taille de votre infrastructure. Un compte avec 50 ressources prend environ 2 minutes, 500+ ressources environ 5 minutes."
    },
    {
      question: "Puis-je automatiser les scans ?",
      answer: "Oui. Compl.io s'intègre facilement dans vos pipelines CI/CD (GitHub Actions, GitLab CI, Jenkins). Voir la section Intégration CI/CD ci-dessus."
    },
    {
      question: "Que se passe-t-il en cas d'échec de test ?",
      answer: "Le rapport détaille chaque échec avec: la description du problème, la ressource concernée, le risque associé et la commande AWS CLI exacte pour corriger."
    }
  ];

  return (
    <div className="min-h-screen page-gradient">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comment ça <span className="gradient-text">fonctionne</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              De l'installation à la conformité ISO 27001 en 3 étapes
            </p>
          </AnimatedSection>

          {/* Timeline Visual */}
          <AnimatedSection className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {[
                { icon: Terminal, label: "Installation", time: "30 secondes", step: 1, target: "installation" },
                { icon: Activity, label: "Scan", time: "5 minutes", step: 2, target: "scan" },
                { icon: FileText, label: "Rapport", time: "Instantané", step: 3, target: "reports" },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <button
                    onClick={() => {
                      setActiveStep(index);
                      document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${
                      activeStep === index 
                        ? "bg-primary/10 border-2 border-primary shadow-lg scale-105" 
                        : "bg-card border border-border hover:border-primary/50"
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 ${
                      activeStep === index ? "gradient-primary" : "bg-secondary"
                    }`}>
                      <item.icon className={`w-8 h-8 ${
                        activeStep === index ? "text-primary-foreground" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="text-xs font-bold text-primary mb-1">ÉTAPE {item.step}</div>
                    <div className="font-semibold text-foreground">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.time}</div>
                  </button>
                  
                  {index < 2 && (
                    <div className="hidden md:flex items-center px-4">
                      <div className="w-16 h-px bg-gradient-to-r from-border to-primary/50" />
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Installation */}
      <section id="installation" className="py-20 lg:py-28">
        <div className="container">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">1</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Installation en <span className="gradient-text">30 secondes</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <CodeBlock code={installCode} language="terminal" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle, text: "Python 3.11+ requis" },
                  { icon: Lock, text: "Credentials chiffrés AES-256" },
                  { icon: Shield, text: "Permissions IAM read-only suffisent" },
                  { icon: Users, text: "Support multi-comptes AWS" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center justify-center gap-2 p-4 bg-card rounded-xl border border-border text-center">
                    <item.icon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-card rounded-xl border border-border">
              <AccordionItem value="iam-config" className="border-none">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-left font-semibold">Configuration IAM recommandée</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <CodeBlock code={iamPolicy} language="json" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Scan */}
      <section id="scan" className="py-20 lg:py-28 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">2</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Scannez votre infrastructure en <span className="gradient-text">5 minutes</span>
              </h2>
            </div>

            <div className="mb-12">
              <CodeBlock code={scanCode} language="terminal" />
            </div>

            {/* Scan Timeline */}
            <div className="mb-12 bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-6">Timeline du scan</h3>
              <div className="space-y-4">
                {scanTimeline.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-sm font-mono text-muted-foreground w-12">{item.time}</span>
                    <div className="flex-1">
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full gradient-primary rounded-full transition-all duration-1000"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm text-foreground w-48">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Compl.io Tests */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <h3 className="font-semibold text-foreground p-6 border-b border-border">
                Ce que Compl.io teste
              </h3>
              <Tabs defaultValue="encryption" className="w-full">
                <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
                  <TabsTrigger 
                    value="encryption" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Chiffrement (A.8.24)
                  </TabsTrigger>
                  <TabsTrigger 
                    value="network"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Sécurité Réseau (A.13.1.1)
                  </TabsTrigger>
                  <TabsTrigger 
                    value="iam"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Identité & Accès (A.9.4.3)
                  </TabsTrigger>
                  <TabsTrigger 
                    value="logging"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    <BarChart className="w-4 h-4 mr-2" />
                    Logging (A.12.4.1)
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="encryption" className="p-6">
                  <ul className="grid md:grid-cols-2 gap-2">
                    {["S3 buckets chiffrés (AES-256 ou KMS)", "EBS volumes chiffrés", "RDS databases chiffrés", "KMS key rotation activée"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="network" className="p-6">
                  <ul className="grid md:grid-cols-2 gap-2">
                    {["Security Groups restrictions", "NACLs configuration", "VPC isolation", "Public access blocked"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="iam" className="p-6">
                  <ul className="grid md:grid-cols-2 gap-2">
                    {["IAM password policy", "MFA enforcement", "Least privilege", "Access key rotation"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="logging" className="p-6">
                  <ul className="grid md:grid-cols-2 gap-2">
                    {["CloudTrail multi-région activé", "Log file validation", "Logs stockés chiffrés", "Retention > 90 jours"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Reports */}
      <section id="reports" className="py-20 lg:py-28">
        <div className="container">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">3</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Rapports <span className="gradient-text">prêts pour auditeurs</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Markdown Preview */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="px-6 py-4 border-b border-border bg-secondary/30">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">FORMAT MARKDOWN (DevOps)</span>
                  </div>
                </div>
                <div className="p-6 max-h-80 overflow-y-auto">
                  <CodeBlock code={markdownReport} language="markdown" showLineNumbers={false} />
                </div>
              </div>

              {/* PDF Preview Mockup */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="px-6 py-4 border-b border-border bg-secondary/30">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">FORMAT PDF (Auditors)</span>
                  </div>
                </div>
                <div className="p-6 bg-secondary/10">
                  <div className="bg-background rounded-lg shadow-lg p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div className="flex items-center gap-2">
                        <Shield className="w-6 h-6 text-primary" />
                        <span className="font-bold text-foreground">Compl.io</span>
                      </div>
                      <span className="text-xs text-muted-foreground">ISO 27001 Report</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-3 bg-secondary rounded w-3/4" />
                      <div className="h-3 bg-secondary rounded w-1/2" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 py-4">
                      <div className="text-center p-3 bg-emerald-500/10 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-500">75%</div>
                        <div className="text-xs text-muted-foreground">Score</div>
                      </div>
                      <div className="text-center p-3 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">4</div>
                        <div className="text-xs text-muted-foreground">Tests</div>
                      </div>
                      <div className="text-center p-3 bg-amber-500/10 rounded-lg">
                        <div className="text-2xl font-bold text-amber-500">1</div>
                        <div className="text-xs text-muted-foreground">Issue</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <div className="h-2 bg-secondary rounded flex-1" />
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        <div className="h-2 bg-secondary rounded flex-1" />
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <div className="h-2 bg-secondary rounded flex-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="bg-card rounded-xl border border-border">
              <AccordionItem value="full-report" className="border-none">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-left font-semibold">Voir exemple complet rapport Markdown</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <CodeBlock code={markdownReport} language="markdown" showLineNumbers={false} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: CI/CD Integration */}
      <section id="cicd" className="py-20 lg:py-28 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Intégrez dans vos <span className="gradient-text">pipelines DevOps</span>
              </h2>
            </div>

            <div className="bg-card rounded-xl border border-border overflow-hidden mb-8">
              <Tabs defaultValue="github" className="w-full">
                <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
                  <TabsTrigger 
                    value="github"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    GitHub Actions
                  </TabsTrigger>
                  <TabsTrigger 
                    value="gitlab"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    GitLab CI
                  </TabsTrigger>
                  <TabsTrigger 
                    value="jenkins"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Jenkins
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="github" className="p-6">
                  <CodeBlock code={githubActions} language="yaml" />
                </TabsContent>
                
                <TabsContent value="gitlab" className="p-6">
                  <CodeBlock code={gitlabCI} language="yaml" />
                </TabsContent>
                
                <TabsContent value="jenkins" className="p-6">
                  <CodeBlock code={jenkinsGroovy} language="groovy" />
                </TabsContent>
              </Tabs>
            </div>

            {/* CI/CD Dashboard Mockup */}
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Dashboard CI/CD</h3>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-sm font-medium rounded-full">
                  Pipeline Passed
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Compliance Check Passed</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">87%</div>
                  <div className="text-sm text-muted-foreground">Score (target: 80%)</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <Clock className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                  <div className="font-semibold text-foreground">2m 45s</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Roadmap */}
      <section id="roadmap" className="py-20 lg:py-28">
        <div className="container">
          <AnimatedSection className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              40 Tests ISO 27001 - <span className="gradient-text">Roadmap Complète</span>
            </h2>

            {/* Timeline */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 mb-12">
              {[
                { phase: "MAINTENANT", version: "v0.1.0", tests: "4 tests", coverage: "8% Annex A", price: "€99/mois", priceNote: "(locked)", highlight: true },
                { phase: "SEMAINE 5", version: "", tests: "10 tests", coverage: "20% Annex A", price: "€99/mois", priceNote: "(locked)", highlight: false },
                { phase: "SEMAINE 10", version: "", tests: "40 tests", coverage: "83% Annex A", price: "€99/mois", priceNote: "(locked)", highlight: false },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`flex-1 p-6 rounded-xl border ${
                    item.highlight 
                      ? "bg-primary/5 border-primary shadow-lg" 
                      : "bg-card border-border"
                  }`}>
                    <div className={`text-sm font-bold mb-2 ${item.highlight ? "text-primary" : "text-muted-foreground"}`}>
                      {item.phase}
                    </div>
                    {item.version && (
                      <div className="text-xs text-muted-foreground mb-3">{item.version}</div>
                    )}
                    <div className="text-2xl font-bold text-foreground mb-1">{item.tests}</div>
                    <div className="text-sm text-muted-foreground mb-4">{item.coverage}</div>
                    <div className="pt-4 border-t border-border">
                      <div className="text-lg font-semibold text-primary">{item.price}</div>
                      <div className="text-xs text-muted-foreground">{item.priceNote}</div>
                    </div>
                  </div>
                  
                  {index < 2 && (
                    <div className="hidden md:flex items-center px-2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Full Test List */}
            <Accordion type="single" collapsible className="bg-card rounded-xl border border-border">
              <AccordionItem value="full-tests" className="border-none">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-left font-semibold">Liste complète des 40 tests</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {testCategories.map((category, catIndex) => (
                      <div key={catIndex} className="space-y-3">
                        <div className="flex items-center gap-2">
                          <category.icon className="w-5 h-5 text-primary" />
                          <span className="font-semibold text-foreground">{category.title}</span>
                          <span className="text-xs text-muted-foreground">(10 tests)</span>
                        </div>
                        <ul className="space-y-1 pl-7">
                          {category.tests.map((test, testIndex) => (
                            <li key={testIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                              {test}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6: Comparison */}
      <section id="comparison" className="py-20 lg:py-28 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Compl.io vs <span className="gradient-text">Processus Manuel</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Manual Process */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-foreground mb-2">Processus Manuel</div>
                  <div className="text-4xl font-bold text-muted-foreground">3 mois</div>
                </div>
                <ul className="space-y-3">
                  {[
                    "1. Inventaire (2 semaines)",
                    "2. Check AWS (4 semaines)",
                    "3. Excel (2 semaines)",
                    "4. Format audit (3 semaines)",
                    "5. Updates manuels",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Coût apparent</span>
                    <span>€0 (ton temps)</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Temps CTO/an</span>
                    <span>500h</span>
                  </div>
                  <div className="flex justify-between font-semibold text-destructive">
                    <span>Coût réel/an</span>
                    <span>€50,000</span>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  {["Erreurs humaines", "Vite obsolète", "Pas répétable"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-destructive text-sm">
                      <AlertTriangle className="w-4 h-4" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Compl.io */}
              <div className="bg-primary/5 rounded-xl border-2 border-primary p-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gradient-primary rounded-full">
                  <span className="text-xs font-bold text-primary-foreground">RECOMMANDÉ</span>
                </div>
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-foreground mb-2">Compl.io</div>
                  <div className="text-4xl font-bold gradient-text">5 minutes</div>
                </div>
                <ul className="space-y-3">
                  {[
                    "1. pip install (30s)",
                    "2. complio scan (5m)",
                    "3. Report auto",
                    "PDF audit-ready",
                    "Scan automatique",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground">
                      <Zap className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <div className="flex justify-between text-foreground">
                    <span>Prix</span>
                    <span className="font-semibold">€99/mois</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Temps/an</span>
                    <span>1h setup</span>
                  </div>
                  <div className="flex justify-between font-semibold text-emerald-500">
                    <span>Coût/an</span>
                    <span>€1,188</span>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  {["Tests automatisés", "Toujours à jour", "Répétable"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-emerald-500 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
                <span className="text-emerald-500 font-semibold">Économisez €48,812/an</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section id="faq" className="py-20 lg:py-28">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Questions <span className="gradient-text">fréquentes</span>
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <span className="text-left font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 8: CTA */}
      <section id="cta" className="py-20 lg:py-28">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="gradient-primary rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 cyber-grid opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                  Prêt à automatiser votre conformité ISO 27001 ?
                </h2>
                
                <ul className="inline-flex flex-col items-start gap-3 mb-8 text-left">
                  {[
                    "Early Access : €99/mois locked forever",
                    "Rejoins les 50 premiers founders",
                    "Setup en 5 minutes",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-primary-foreground/90">
                      <CheckCircle className="w-5 h-5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <Button size="xl" className="bg-background text-primary hover:bg-background/90 shadow-lg">
                    Commencer maintenant
                  </Button>
                  <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                    Voir la démo
                  </Button>
                </div>

                <p className="text-sm text-primary-foreground/70">
                  Ou teste en local (FREE tier) : <code className="px-2 py-1 bg-primary-foreground/10 rounded">$ pip install complio</code>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;

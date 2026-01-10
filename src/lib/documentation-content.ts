// Documentation content structure for Complio

export interface DocSection {
  id: string;
  title: string;
  content: string;
  subsections?: { id: string; title: string }[];
}

export interface DocCategory {
  id: string;
  title: string;
  icon: string;
  sections: DocSection[];
}

export const documentationContent: DocCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: "Rocket",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        subsections: [
          { id: "what-is-complio", title: "What is Complio?" },
          { id: "key-features", title: "Key Features" },
          { id: "glossary", title: "Glossary" },
          { id: "index", title: "Index" },
        ],
        content: `# Getting Started with Complio

Complio helps DevSecOps teams automate ISO 27001 compliance testing for AWS infrastructure. No more manual checks, no more 3-month audit preparation cycles.

## What is Complio?

With Complio, you can:
- **Scan in Seconds**: Complete ISO 27001 compliance report in 3-5 seconds
- **40 Automated Tests**: Full coverage across Encryption, Network, Identity, and Logging
- **Developer-First**: CLI tool that integrates seamlessly into your DevOps workflow
- **Cost-Effective**: €299/month vs €25,000-40,000/year for traditional solutions

Complio operates as a CLI tool installed on your local machine, requiring only AWS credentials to scan your infrastructure. No agents, no network changes, no downtime.

## Key Features

| Feature | Description |
|---------|-------------|
| Fast Scanning | 3-5 seconds for complete scan |
| 40 Tests | Full ISO 27001:2022 coverage |
| Developer-First | CLI integration |
| Cost-Effective | Starting at €299/month |

## Glossary

### Compliance Test
A **Compliance Test** is an automated check that validates a specific security control against ISO 27001:2022 requirements. Each test examines AWS resources and generates findings with severity levels and remediation guidance.

### Finding
A **Finding** is a non-compliant resource discovered during a scan. Findings include severity level (Critical, High, Medium, Low), affected resource ID, description, and actionable remediation steps.

### Scan
A **Scan** is a complete execution of all enabled compliance tests for a specific AWS region. Each scan generates a unique Scan ID, timestamp, and compliance score (0-100%).

### License
A **License** is your Complio activation key (format: \`COMPL-XXXX-XXXX-XXXX-XXXX\`) that unlocks the CLI functionality. Licenses are tied to subscription tiers (Starter, Professional, Enterprise).

### Compliance Score
The **Compliance Score** is calculated as the average of all test scores, weighted by test criticality. A score of 90%+ indicates readiness for ISO 27001 certification audit.

### Framework
A **Framework** is a compliance standard (ISO 27001, SOC2, GDPR) that defines security requirements. Complio currently supports ISO 27001:2022 with plans for additional frameworks.

## Index

### Installation
- [System Requirements](/documentation/installation/system-requirements)
- [Install via pip](/documentation/installation/install-pip)
- [Verify Installation](/documentation/installation/verify)
- [Upgrade Complio](/documentation/installation/upgrade)

### Getting Started
- [Activate License](/documentation/getting-started/activate-license)
- [Configure AWS Credentials](/documentation/getting-started/aws-credentials)
- [Run Your First Scan](/documentation/getting-started/first-scan)
- [Understanding Results](/documentation/getting-started/understanding-results)

### Core Features
- [40 Compliance Tests](/documentation/core-features/compliance-tests)
- [Multi-Region Scanning](/documentation/core-features/multi-region)
- [Output Formats](/documentation/core-features/output-formats)
- [CI/CD Integration](/documentation/core-features/cicd)

### Advanced Usage
- [Custom Scan Profiles](/documentation/advanced/custom-profiles)
- [Scheduled Scans](/documentation/advanced/scheduled-scans)
- [Historical Trending](/documentation/advanced/historical-trending)
- [Team Collaboration](/documentation/advanced/team-collaboration)

### Enterprise Features
- [Multi-Cloud Support](/documentation/enterprise/multi-cloud)
- [API Access](/documentation/enterprise/api-access)
- [White-Label Reports](/documentation/enterprise/white-label)
- [Priority Support](/documentation/enterprise/priority-support)`,
      },
    ],
  },
  {
    id: "installation",
    title: "Installation",
    icon: "Download",
    sections: [
      {
        id: "system-requirements",
        title: "System Requirements",
        subsections: [
          { id: "supported-os", title: "Supported Operating Systems" },
          { id: "software-requirements", title: "Software Requirements" },
          { id: "aws-permissions", title: "AWS Permissions Required" },
          { id: "troubleshooting-requirements", title: "Troubleshooting" },
        ],
        content: `# System Requirements

## Supported Operating Systems
- **Linux**: Ubuntu 20.04+, Debian 11+, RHEL 8+, CentOS 8+
- **macOS**: 12.0 (Monterey) or higher
- **Windows**: Windows 10/11 with WSL2

## Software Requirements

### Python
- **Version**: Python 3.11 or higher
- **Check version**: \`python3 --version\`
- **Install**: See [Python installation guide](https://www.python.org/downloads/)

### AWS CLI
- **Version**: AWS CLI 2.0 or higher
- **Purpose**: Required for AWS credentials configuration
- **Check version**: \`aws --version\`
- **Install**: [AWS CLI installation](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

### Disk Space
- **Minimum**: 50 MB for Complio CLI
- **Recommended**: 200 MB for logs and reports

### Network Requirements
- **Internet access** for license validation
- **AWS API access** (HTTPS port 443)
- **Complio backend**: https://complio-backend.vercel.app

## AWS Permissions Required

Complio needs **SecurityAudit** policy (AWS managed, read-only):

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "s3:GetEncryptionConfiguration",
      "s3:ListAllMyBuckets",
      "s3:GetPublicAccessBlock",
      "ec2:DescribeVolumes",
      "ec2:DescribeSecurityGroups",
      "ec2:DescribeVpcs",
      "ec2:DescribeFlowLogs",
      "rds:DescribeDBInstances",
      "iam:GetAccountPasswordPolicy",
      "iam:ListUsers",
      "iam:ListAccessKeys",
      "iam:GetCredentialReport",
      "cloudtrail:DescribeTrails",
      "cloudtrail:GetTrailStatus",
      "logs:DescribeLogGroups",
      "kms:ListKeys",
      "kms:DescribeKey",
      "kms:GetKeyRotationStatus",
      "guardduty:ListDetectors",
      "securityhub:DescribeHub",
      "config:DescribeConfigurationRecorders"
    ],
    "Resource": "*"
  }]
}
\`\`\`

## Troubleshooting

### Python version too old
\`\`\`bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3.11

# macOS
brew install python@3.11

# Verify
python3.11 --version
\`\`\`

### AWS CLI not found
\`\`\`bash
# Linux/macOS
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Verify
aws --version
\`\`\``,
      },
      {
        id: "install-pip",
        title: "Install via pip",
        subsections: [
          { id: "quick-install", title: "Quick Installation" },
          { id: "install-methods", title: "Installation Methods" },
          { id: "verify-install", title: "Verify Installation" },
          { id: "upgrade", title: "Upgrade Complio" },
          { id: "uninstall", title: "Uninstall" },
          { id: "troubleshooting-install", title: "Troubleshooting" },
        ],
        content: `# Install Complio

## Quick Installation
\`\`\`bash
# Install from PyPI
pip install complio

# Verify installation
complio --version
# Output: Complio version 1.0.0
\`\`\`

## Installation Methods

### Method 1: User Installation (Recommended)
\`\`\`bash
# Install for current user only (no sudo required)
pip install --user complio

# Add to PATH if needed
export PATH="$HOME/.local/bin:$PATH"
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
\`\`\`

### Method 2: Virtual Environment
\`\`\`bash
# Create virtual environment
python3 -m venv complio-env
source complio-env/bin/activate  # Windows: complio-env\\Scripts\\activate

# Install in venv
pip install complio

# Use Complio (venv must be activated)
complio --version
\`\`\`

### Method 3: System-Wide Installation
\`\`\`bash
# Install globally (requires sudo)
sudo pip install complio

# Verify
complio --version
\`\`\`

### Method 4: Install with pipx (Isolated)
\`\`\`bash
# Install pipx
pip install pipx
pipx ensurepath

# Install Complio
pipx install complio

# Verify
complio --version
\`\`\`

## Verify Installation
\`\`\`bash
# Check Complio is accessible
complio --help

# Expected output:
# Usage: complio [OPTIONS] COMMAND [ARGS]...
# 
# Complio - Compliance-as-Code Platform
# 
# Commands:
#   activate  Activate Complio license
#   scan      Run compliance scan
\`\`\`

## Upgrade Complio
\`\`\`bash
# Upgrade to latest version
pip install --upgrade complio

# Check new version
complio --version
\`\`\`

## Uninstall
\`\`\`bash
# Remove Complio
pip uninstall complio

# Clean cache
rm -rf ~/.complio/
\`\`\`

## Troubleshooting

### Issue: "complio: command not found"
**Solution:**
\`\`\`bash
# Check if installed
pip show complio

# Add to PATH
export PATH="$HOME/.local/bin:$PATH"

# Or use full path
~/.local/bin/complio --version
\`\`\`

### Issue: "Permission denied"
**Solution:**
\`\`\`bash
# Don't use sudo with pip
pip install --user complio

# Or use pipx
pipx install complio
\`\`\`

### Issue: "No module named 'complio'"
**Solution:**
\`\`\`bash
# Reinstall
pip uninstall complio
pip install complio

# Or install from source
pip install git+https://github.com/Tiger972/Complio.git
\`\`\``,
      },
    ],
  },
  {
    id: "configuration",
    title: "Configuration",
    icon: "Settings",
    sections: [
      {
        id: "activate-license",
        title: "Activate License",
        subsections: [
          { id: "purchase-license", title: "Purchase License" },
          { id: "activate-cli", title: "Activate CLI" },
          { id: "verify-status", title: "Verify License Status" },
          { id: "tiers-comparison", title: "License Tiers Comparison" },
          { id: "troubleshooting-license", title: "Troubleshooting" },
        ],
        content: `# Activate Your License

## Purchase License

1. Visit [complio.tech/pricing](https://complio.tech/pricing)
2. Choose your plan:
   - **Starter**: €299/month
   - **Professional**: €499/month
   - **Enterprise**: €599/month
3. Complete payment via Stripe
4. Receive license key via email (format: \`COMPL-XXXX-XXXX-XXXX-XXXX\`)

## Activate CLI
\`\`\`bash
# Activate with your license key
complio activate --license-key COMPL-XXXX-XXXX-XXXX-XXXX

# Expected output:
🔐 Validating license key...
✅ License activated successfully!

╭─────────────────────────────────────────╮
│ LICENSE ACTIVATED                       │
│                                         │
│ Tier: PROFESSIONAL                      │
│ Email: your-email@example.com           │
│ Status: ACTIVE                          │
│ Expires: 2027-01-10                     │
╰─────────────────────────────────────────╯
\`\`\`

## Verify License Status
\`\`\`bash
# Check license file
cat ~/.complio/license.json

# Output:
{
  "license_key": "COMPL-XXXX-XXXX-XXXX-XXXX",
  "tier": "professional",
  "email": "your-email@example.com",
  "status": "active",
  "cached_at": "2026-01-10T15:30:00Z"
}
\`\`\`

## License Tiers Comparison

| Feature | Starter | Professional | Enterprise |
|---------|---------|-------------|-----------|
| 40 ISO 27001 Tests | ✅ | ✅ | ✅ |
| Multi-Region Scanning | ✅ | ✅ | ✅ |
| JSON/Markdown Reports | ✅ | ✅ | ✅ |
| SOC2 Framework | ❌ | ✅ | ✅ |
| GDPR Framework | ❌ | ✅ | ✅ |
| Multi-Cloud (Azure/GCP) | ❌ | ✅ | ✅ |
| API Access | ❌ | ❌ | ✅ |
| Priority Support | ❌ | ❌ | ✅ |
| Custom Branding | ❌ | ❌ | ✅ |

## Troubleshooting

### Invalid License Key
**Error:** \`License validation failed: Invalid key format\`

**Solution:**
- Verify format: \`COMPL-XXXX-XXXX-XXXX-XXXX\` (4 groups of 4 characters)
- Check for typos
- Copy-paste from email to avoid errors

### License Already Used
**Error:** \`License key already activated on another machine\`

**Solution:**
- One license = one machine
- Purchase additional licenses for multiple machines
- Or deactivate on old machine: contact support@complio.tech

### Network Error
**Error:** \`Cannot connect to license server\`

**Solution:**
\`\`\`bash
# Check internet connection
ping complio-backend.vercel.app

# Check firewall allows HTTPS (port 443)
curl https://complio-backend.vercel.app/health

# Try again
complio activate --license-key YOUR-KEY
\`\`\`

### Expired License
**Error:** \`License expired\`

**Solution:**
- Renew subscription at complio.tech
- Update payment method if card expired
- Contact billing@complio.tech for assistance`,
      },
      {
        id: "aws-credentials",
        title: "Configure AWS Credentials",
        subsections: [
          { id: "create-iam-user", title: "Create IAM User" },
          { id: "generate-keys", title: "Generate Access Keys" },
          { id: "configure-cli", title: "Configure AWS CLI" },
          { id: "verify-config", title: "Verify Configuration" },
          { id: "multiple-accounts", title: "Multiple AWS Accounts" },
          { id: "security-best-practices", title: "Security Best Practices" },
        ],
        content: `# Configure AWS Credentials

Complio uses AWS CLI credentials to scan your infrastructure. Follow this guide to create secure, read-only credentials.

## Step 1: Create IAM User

### 1. Access AWS Console
- Go to [console.aws.amazon.com](https://console.aws.amazon.com)
- Sign in with root or IAM admin credentials

### 2. Navigate to IAM
- Search for "IAM" in top search bar
- Click **IAM** service

### 3. Create User
1. Left sidebar → **Users**
2. Click **Create user** (orange button, top right)
3. User name: \`complio-scanner\`
4. ☐ **Uncheck** "Provide user access to AWS Management Console"
5. Click **Next**

### 4. Attach Permissions
1. Select: **Attach policies directly**
2. Search: \`SecurityAudit\`
3. ✅ Check **SecurityAudit** (AWS managed policy)
4. Click **Next**

### 5. Review & Create
- Verify: User name = \`complio-scanner\`, Permissions = SecurityAudit
- Click **Create user**

## Step 2: Generate Access Keys

### 1. Select User
- Click on \`complio-scanner\` user

### 2. Security Credentials Tab
- Click **Security credentials** tab
- Scroll to **Access keys** section

### 3. Create Access Key
1. Click **Create access key**
2. Use case: Select **Command Line Interface (CLI)**
3. ✅ Check "I understand the recommendation"
4. Click **Next**

### 4. Add Description (Optional)
- Description tag: \`Complio compliance scanner\`
- Click **Create access key**

### 5. **CRITICAL: Save Keys Now**

⚠️ **This is the ONLY time you can view the secret access key!**

\`\`\`
┌─────────────────────────────────────────────────────┐
│ Access key ID: AKIAIOSFODNN7EXAMPLE                 │
│ Secret access key: wJalrXUtnFEMI/K7MDENG/EXAMPLE    │
│                                                     │
│ ⚠️  Save these credentials immediately!             │
└─────────────────────────────────────────────────────┘
\`\`\`

**Save options:**
- **Download .csv file** (recommended)
- **Copy to secure password manager**
- **Write in secure location**

❌ **NEVER:**
- Commit to Git
- Share via email/Slack
- Store in plain text files

## Step 3: Configure AWS CLI
\`\`\`bash
# Run AWS configure
aws configure

# Prompts:
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
# ↑ Paste your Access Key from Step 2

AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/EXAMPLE
# ↑ Paste your Secret Access Key from Step 2

Default region name [None]: eu-west-3
# ↑ Enter your primary AWS region
# Common: us-east-1, eu-west-1, eu-west-3, ap-southeast-1

Default output format [None]: json
# ↑ Press Enter (json recommended)
\`\`\`

## Step 4: Verify Configuration
\`\`\`bash
# Test 1: Verify identity
aws sts get-caller-identity

# Expected output:
{
    "UserId": "AIDAJQABLZS4A3QDU576Q",
    "Account": "123456789012",
    "Arn": "arn:aws:iam::123456789012:user/complio-scanner"
}

# ✅ If you see your Account ID → Credentials working!

# Test 2: Verify permissions
aws s3 ls

# Expected: List of your S3 buckets (or empty list)
# ✅ If command succeeds → Permissions correct!
\`\`\`

## Multiple AWS Accounts

If you have multiple AWS accounts:
\`\`\`bash
# Configure additional profile
aws configure --profile production
# Enter production account credentials

aws configure --profile staging
# Enter staging account credentials

# Use specific profile with Complio
complio scan --profile production --region eu-west-3
complio scan --profile staging --region us-east-1
\`\`\`

## Security Best Practices

✅ **DO:**
- Use IAM user with **SecurityAudit** policy (read-only)
- Rotate access keys every 90 days
- Store credentials in \`~/.aws/credentials\` (secure)
- Use different credentials per environment (dev/prod)
- Enable MFA on IAM user (optional but recommended)

❌ **DON'T:**
- Use root account credentials
- Grant write permissions
- Share credentials between team members
- Commit credentials to version control
- Use overly permissive policies (like AdministratorAccess)`,
      },
    ],
  },
  {
    id: "usage",
    title: "Usage",
    icon: "Terminal",
    sections: [
      {
        id: "first-scan",
        title: "Run Your First Scan",
        subsections: [
          { id: "basic-scan", title: "Basic Scan" },
          { id: "scan-region", title: "Scan Specific Region" },
          { id: "generate-reports", title: "Generate Reports" },
          { id: "understanding-results", title: "Understanding Results" },
          { id: "next-steps", title: "Next Steps" },
        ],
        content: `# Run Your First Scan

## Basic Scan
\`\`\`bash
# Scan default region
complio scan

# Output:
✓ Connecting to AWS region: us-east-1
ℹ Connected to AWS Account: 123456789012
ℹ Running 40 compliance tests

Running compliance tests... ━━━━━━━━━━━━━━━━━━━━━ 100% 0:00:03

   Scan Results Summary
┏━━━━━━━━━━━━━━━━┳━━━━━━━━┓
┃ Metric         ┃ Value  ┃
┡━━━━━━━━━━━━━━━━╇━━━━━━━━┩
│ Total Tests    │ 40     │
│ Passed         │ ✅ 35  │
│ Failed         │ ❌ 5   │
│ Errors         │ ⚠️ 0    │
│ Overall Score  │ 87.5%  │
│ Execution Time │ 3.42s  │
└────────────────┴────────┘

🚨 Critical & High Severity Findings:

● high: Passwords never expire
  Test: IAM Password Policy
  Resource: aws-account

● high: Unencrypted EBS volumes found
  Test: EBS Volume Encryption
  Resource: vol-0123456789abcdef

✓ Compliance score: 87.5% - NEEDS IMPROVEMENT
\`\`\`

## Scan Specific Region
\`\`\`bash
# Scan Paris region
complio scan --region eu-west-3

# Scan multiple regions (run separately)
complio scan --region eu-west-1
complio scan --region us-east-1
complio scan --region ap-southeast-1
\`\`\`

## Generate Reports

### JSON Report
\`\`\`bash
# Generate JSON output
complio scan --region eu-west-3 --output json > compliance-report.json

# View report
cat compliance-report.json | jq '.'
\`\`\`

**JSON Structure:**
\`\`\`json
{
  "scan_metadata": {
    "scan_id": "scan_20260110_153045_abc123",
    "scanned_at": "2026-01-10T15:30:45Z",
    "region": "eu-west-3",
    "account_id": "123456789012",
    "complio_version": "1.0.0",
    "framework": "iso27001"
  },
  "summary": {
    "overall_score": 87.5,
    "total_tests": 40,
    "passed": 35,
    "failed": 5,
    "errors": 0,
    "execution_time": 3.42
  },
  "tests": [
    {
      "test_id": "s3_encryption",
      "name": "S3 Bucket Encryption",
      "status": "passed",
      "score": 100.0,
      "findings": []
    }
  ],
  "findings": [
    {
      "severity": "high",
      "title": "Unencrypted EBS volume",
      "resource_id": "vol-0123456789abcdef",
      "resource_type": "ebs_volume",
      "description": "...",
      "remediation": "..."
    }
  ]
}
\`\`\`

### Markdown Report
\`\`\`bash
# Generate Markdown report
complio scan --region eu-west-3 --output markdown > compliance-report.md

# View report
cat compliance-report.md
\`\`\`

**Markdown includes:**
- Executive summary
- Test-by-test breakdown
- Findings with severity
- Remediation steps
- Compliance score

## Understanding Results

### Compliance Score
\`\`\`
90-100% ✅ COMPLIANT      - Ready for audit
70-89%  ⚠️  NEEDS WORK     - Some issues to fix
50-69%  ⚠️  PARTIAL        - Multiple issues
0-49%   ❌ NON-COMPLIANT  - Major gaps
\`\`\`

### Severity Levels
\`\`\`
🔴 CRITICAL - Immediate security risk (fix within 24h)
🟠 HIGH     - Significant risk (fix within 1 week)
🟡 MEDIUM   - Moderate concern (fix within 1 month)
🔵 LOW      - Minor improvement (consider fixing)
ℹ️  INFO     - Informational only
\`\`\`

### Test Categories

**40 tests across 4 categories:**

1. **Encryption & Data (12 tests)**
   - S3, EBS, RDS, KMS, Secrets Manager, etc.

2. **Network Security (11 tests)**
   - Security Groups, VPC, CloudFront, WAF, etc.

3. **Identity & Access (7 tests)**
   - IAM policies, MFA, key rotation, etc.

4. **Logging & Monitoring (10 tests)**
   - CloudTrail, CloudWatch, GuardDuty, Config, etc.

## Next Steps

### If score ≥ 90%
1. Export report for auditors
2. Schedule regular scans (weekly/monthly)
3. Monitor for drift

### If score < 90%
1. Review critical/high findings
2. Follow remediation steps
3. Re-scan after fixes
4. Iterate until 90%+`,
      },
    ],
  },
  {
    id: "core-features",
    title: "Core Features",
    icon: "Layers",
    sections: [
      {
        id: "compliance-tests",
        title: "40 Compliance Tests",
        subsections: [
          { id: "encryption-tests", title: "Encryption & Data Security" },
          { id: "network-tests", title: "Network Security" },
          { id: "iam-tests", title: "Identity & Access Management" },
          { id: "logging-tests", title: "Logging & Monitoring" },
          { id: "test-details", title: "Test Details" },
          { id: "roadmap", title: "Roadmap" },
        ],
        content: `# 40 ISO 27001:2022 Compliance Tests

Complio performs 40 automated security tests mapped to ISO 27001:2022 controls.

## Encryption & Data Security (12 tests)

| # | Test Name | Control | Checks |
|---|-----------|---------|--------|
| 1 | S3 Bucket Encryption | A.8.24 | AES-256/KMS encryption enabled |
| 2 | EBS Volume Encryption | A.8.24 | All volumes encrypted |
| 3 | RDS Instance Encryption | A.8.24 | Database encryption at rest |
| 4 | Secrets Manager Encryption | A.8.24 | Customer managed KMS keys |
| 5 | DynamoDB Encryption | A.8.24 | Table encryption enabled |
| 6 | ElastiCache Encryption | A.8.24 | At-rest & in-transit |
| 7 | Redshift Encryption | A.8.24 | Cluster encryption |
| 8 | EFS Encryption | A.8.24 | File system encryption |
| 9 | Backup Encryption | A.8.13 | Backup vault KMS encryption |
| 10 | KMS Key Rotation | A.8.24 | Automatic key rotation |
| 11 | SNS Topic Encryption | A.8.24 | KMS encrypted topics |
| 12 | CloudWatch Logs Encryption | A.8.15 | Log group encryption |

## Network Security (11 tests)

| # | Test Name | Control | Checks |
|---|-----------|---------|--------|
| 13 | Security Group Restrictions | A.8.20 | No 0.0.0.0/0 on sensitive ports |
| 14 | Network ACL Configuration | A.8.20 | Restrictive NACL rules |
| 15 | VPC Flow Logs | A.8.16 | Flow logs enabled per VPC |
| 16 | S3 Public Access Block | A.8.11 | All 4 block settings enabled |
| 17 | Load Balancer Security | A.8.20 | HTTPS listeners, security groups |
| 18 | WAF Configuration | A.8.20 | Web ACLs with active rules |
| 19 | CloudFront HTTPS | A.8.24 | HTTPS-only, TLS 1.2+ |
| 20 | API Gateway Security | A.8.20 | Authorization configured |
| 21 | VPN Configuration | A.8.24 | Strong encryption (AES256) |
| 22 | Transit Gateway Security | A.8.31 | Route table isolation |
| 23 | VPC Endpoints | A.8.31 | Security groups attached |

## Identity & Access Management (7 tests)

| # | Test Name | Control | Checks |
|---|-----------|---------|--------|
| 24 | IAM Password Policy | A.8.5 | 14+ chars, complexity, 90-day expiry |
| 25 | MFA Enforcement | A.8.5 | All users have MFA |
| 26 | Root Account Protection | A.8.2 | MFA enabled, no access keys |
| 27 | Access Key Rotation | A.8.5 | Keys < 90 days old |
| 28 | IAM Least Privilege | A.8.2 | No overly permissive policies |
| 29 | Cross-Account Access | A.8.31 | Secure trust relationships |
| 30 | Service-Linked Roles | A.8.31 | Proper role usage |

## Logging & Monitoring (10 tests)

| # | Test Name | Control | Checks |
|---|-----------|---------|--------|
| 31 | CloudTrail Multi-Region | A.8.15 | Multi-region logging enabled |
| 32 | CloudTrail Log Validation | A.8.15 | File validation enabled |
| 33 | CloudTrail Encryption | A.8.15 | KMS encryption for logs |
| 34 | CloudWatch Log Retention | A.8.15 | Retention ≥ 90 days |
| 35 | CloudWatch Alarms | A.8.16 | Critical alarms configured |
| 36 | AWS Config Enabled | A.8.16 | Config recorder active |
| 37 | GuardDuty Enabled | A.8.16 | Threat detection enabled |
| 38 | Security Hub Enabled | A.8.16 | Standards enabled |
| 39 | EventBridge Rules | A.8.16 | Security event rules |
| 40 | S3 Versioning | A.8.13 | Bucket versioning enabled |

## Test Details

### Example: S3 Bucket Encryption (Test #1)

**What it checks:**
- All S3 buckets have server-side encryption enabled
- Encryption type: AES-256 (SSE-S3) or KMS (SSE-KMS)

**Pass criteria:**
- 100% of buckets are encrypted

**Failure severity:**
- HIGH - Unencrypted buckets expose data at rest

**Remediation:**
\`\`\`bash
# Enable encryption on bucket
aws s3api put-bucket-encryption \\
  --bucket my-bucket \\
  --server-side-encryption-configuration \\
  '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'
\`\`\`

**ISO 27001 Control:**
- A.8.24: Use of cryptography

### Example: IAM Password Policy (Test #24)

**What it checks:**
- Minimum length ≥ 14 characters
- Requires uppercase letters
- Requires lowercase letters
- Requires numbers
- Requires symbols
- Password expiration ≤ 90 days
- Password reuse prevention (5+ passwords)
- Hard expiry enabled

**Pass criteria:**
- All 8 requirements met = 100%
- 7/8 met = 87.5%
- etc.

**Failure severity:**
- HIGH if password expiration or reuse not configured
- MEDIUM if complexity requirements missing

**Remediation:**
\`\`\`bash
# Set password policy
aws iam update-account-password-policy \\
  --minimum-password-length 14 \\
  --require-uppercase-characters \\
  --require-lowercase-characters \\
  --require-numbers \\
  --require-symbols \\
  --max-password-age 90 \\
  --password-reuse-prevention 5 \\
  --hard-expiry
\`\`\`

**ISO 27001 Control:**
- A.8.5: User authentication

## Roadmap: Future Tests

**Coming in v2.0:**
- Azure & GCP support (multi-cloud)
- SOC2 framework (80 tests)
- GDPR framework (50 tests)
- Custom test creation
- Policy-as-code integration`,
      },
    ],
  },
];

// Flatten documentation for search
export interface SearchableDoc {
  id: string;
  categoryId: string;
  categoryTitle: string;
  sectionId: string;
  sectionTitle: string;
  content: string;
  path: string;
}

export const getSearchableContent = (): SearchableDoc[] => {
  const searchable: SearchableDoc[] = [];
  
  documentationContent.forEach((category) => {
    category.sections.forEach((section) => {
      searchable.push({
        id: `${category.id}-${section.id}`,
        categoryId: category.id,
        categoryTitle: category.title,
        sectionId: section.id,
        sectionTitle: section.title,
        content: section.content,
        path: `/documentation/${category.id}/${section.id}`,
      });
    });
  });
  
  return searchable;
};

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
    title: "Démarrage",
    icon: "Rocket",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        subsections: [
          { id: "what-is-complio", title: "Qu'est-ce que Complio ?" },
          { id: "key-features", title: "Fonctionnalités clés" },
          { id: "glossary", title: "Glossaire" },
          { id: "index", title: "Index" },
        ],
        content: `# Démarrer avec Complio

Complio aide les équipes DevSecOps à automatiser les tests de conformité ISO 27001 pour l'infrastructure AWS. Plus de vérifications manuelles, plus de cycles de préparation d'audit de 3 mois.

## Qu'est-ce que Complio ?

Avec Complio, vous pouvez :
- **Scanner en quelques secondes** : Rapport de conformité ISO 27001 complet en 3-5 secondes
- **40 tests automatisés** : Couverture complète du chiffrement, réseau, identité et journalisation
- **Orienté développeur** : Outil CLI qui s'intègre parfaitement dans votre workflow DevOps
- **Économique** : 499€/mois contre 25 000-40 000€/an pour les solutions traditionnelles

Complio fonctionne comme un outil CLI installé sur votre machine locale, nécessitant uniquement des identifiants AWS pour scanner votre infrastructure. Pas d'agents, pas de modifications réseau, pas d'interruption.

## Fonctionnalités clés

| Fonctionnalité | Description |
|----------------|-------------|
| Scan rapide | 3-5 secondes pour un scan complet |
| 40 tests | Couverture complète ISO 27001:2022 |
| Orienté développeur | Intégration CLI |
| Économique | À partir de 499€/mois |

## Glossaire

### Test de conformité
Un **Test de conformité** est une vérification automatisée qui valide un contrôle de sécurité spécifique selon les exigences ISO 27001:2022. Chaque test examine les ressources AWS et génère des résultats avec des niveaux de sévérité et des conseils de remédiation.

### Découverte
Une **Découverte** est une ressource non conforme identifiée lors d'un scan. Les découvertes incluent le niveau de sévérité (Critique, Élevé, Moyen, Faible), l'ID de la ressource affectée, une description et des étapes de remédiation actionnables.

### Scan
Un **Scan** est une exécution complète de tous les tests de conformité activés pour une région AWS spécifique. Chaque scan génère un ID de scan unique, un horodatage et un score de conformité (0-100%).

### Licence
Une **Licence** est votre clé d'activation Complio (format : \`COMPL-XXXX-XXXX-XXXX-XXXX\`) qui déverrouille les fonctionnalités CLI. Les licences sont liées aux niveaux d'abonnement (Starter, Professional, Enterprise).

### Score de conformité
Le **Score de conformité** est calculé comme la moyenne de tous les scores de tests, pondérée par la criticité du test. Un score de 90%+ indique une préparation à l'audit de certification ISO 27001.

### Framework
Un **Framework** est une norme de conformité (ISO 27001, SOC2, RGPD) qui définit les exigences de sécurité. Complio prend actuellement en charge ISO 27001:2022 avec des plans pour des frameworks supplémentaires.

## Index

### Installation
- [Prérequis système](/documentation/installation/system-requirements)
- [Installation via pip](/documentation/installation/install-pip)
- [Vérifier l'installation](/documentation/installation/verify)
- [Mettre à jour Complio](/documentation/installation/upgrade)

### Démarrage
- [Activer la licence](/documentation/getting-started/activate-license)
- [Configurer les identifiants AWS](/documentation/getting-started/aws-credentials)
- [Lancer votre premier scan](/documentation/getting-started/first-scan)
- [Comprendre les résultats](/documentation/getting-started/understanding-results)

### Fonctionnalités principales
- [40 tests de conformité](/documentation/core-features/compliance-tests)
- [Scan multi-région](/documentation/core-features/multi-region)
- [Formats de sortie](/documentation/core-features/output-formats)
- [Intégration CI/CD](/documentation/core-features/cicd)

### Utilisation avancée
- [Profils de scan personnalisés](/documentation/advanced/custom-profiles)
- [Scans programmés](/documentation/advanced/scheduled-scans)
- [Tendances historiques](/documentation/advanced/historical-trending)
- [Collaboration d'équipe](/documentation/advanced/team-collaboration)

### Fonctionnalités Enterprise
- [Support multi-cloud](/documentation/enterprise/multi-cloud)
- [Accès API](/documentation/enterprise/api-access)
- [Rapports en marque blanche](/documentation/enterprise/white-label)
- [Support prioritaire](/documentation/enterprise/priority-support)`,
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
        title: "Prérequis système",
        subsections: [
          { id: "supported-os", title: "Systèmes d'exploitation supportés" },
          { id: "software-requirements", title: "Logiciels requis" },
          { id: "aws-permissions", title: "Permissions AWS requises" },
          { id: "troubleshooting-requirements", title: "Dépannage" },
        ],
        content: `# Prérequis système

## Systèmes d'exploitation supportés
- **Linux** : Ubuntu 20.04+, Debian 11+, RHEL 8+, CentOS 8+
- **macOS** : 12.0 (Monterey) ou supérieur
- **Windows** : Windows 10/11 avec WSL2

## Logiciels requis

### Python
- **Version** : Python 3.11 ou supérieur
- **Vérifier la version** : \`python3 --version\`
- **Installer** : Voir [guide d'installation Python](https://www.python.org/downloads/)

### AWS CLI
- **Version** : AWS CLI 2.0 ou supérieur
- **Objectif** : Requis pour la configuration des identifiants AWS
- **Vérifier la version** : \`aws --version\`
- **Installer** : [Installation AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

### Espace disque
- **Minimum** : 50 Mo pour Complio CLI
- **Recommandé** : 200 Mo pour les logs et rapports

### Prérequis réseau
- **Accès internet** pour la validation de licence
- **Accès API AWS** (HTTPS port 443)
- **Backend Complio** : https://complio-backend.vercel.app

## Permissions AWS requises

Complio nécessite la politique **SecurityAudit** (gérée par AWS, lecture seule) :

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

## Dépannage

### Version Python trop ancienne
\`\`\`bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3.11

# macOS
brew install python@3.11

# Verify
python3.11 --version
\`\`\`

### AWS CLI non trouvé
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
        title: "Installation via pip",
        subsections: [
          { id: "quick-install", title: "Installation rapide" },
          { id: "install-methods", title: "Méthodes d'installation" },
          { id: "verify-install", title: "Vérifier l'installation" },
          { id: "upgrade", title: "Mettre à jour Complio" },
          { id: "uninstall", title: "Désinstaller" },
          { id: "troubleshooting-install", title: "Dépannage" },
        ],
        content: `# Installer Complio

## Installation rapide
\`\`\`bash
# Install from PyPI
pip install complio

# Verify installation
complio --version
# Output: Complio version 1.0.0
\`\`\`

## Méthodes d'installation

### Méthode 1 : Installation utilisateur (Recommandée)
\`\`\`bash
# Install for current user only (no sudo required)
pip install --user complio

# Add to PATH if needed
export PATH="$HOME/.local/bin:$PATH"
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
\`\`\`

### Méthode 2 : Environnement virtuel
\`\`\`bash
# Create virtual environment
python3 -m venv complio-env
source complio-env/bin/activate  # Windows: complio-env\\Scripts\\activate

# Install in venv
pip install complio

# Use Complio (venv must be activated)
complio --version
\`\`\`

### Méthode 3 : Installation système
\`\`\`bash
# Install globally (requires sudo)
sudo pip install complio

# Verify
complio --version
\`\`\`

### Méthode 4 : Installation avec pipx (Isolée)
\`\`\`bash
# Install pipx
pip install pipx
pipx ensurepath

# Install Complio
pipx install complio

# Verify
complio --version
\`\`\`

## Vérifier l'installation
\`\`\`bash
# Check that Complio is accessible
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

## Mettre à jour Complio
\`\`\`bash
# Update to latest version
pip install --upgrade complio

# Check new version
complio --version
\`\`\`

## Désinstaller
\`\`\`bash
# Remove Complio
pip uninstall complio

# Clean cache
rm -rf ~/.complio/
\`\`\`

## Dépannage

### Problème : "complio: command not found"
**Solution :**
\`\`\`bash
# Check if installed
pip show complio

# Add to PATH
export PATH="$HOME/.local/bin:$PATH"

# Or use full path
~/.local/bin/complio --version
\`\`\`

### Problème : "Permission denied"
**Solution :**
\`\`\`bash
# Don't use sudo with pip
pip install --user complio

# Or use pipx
pipx install complio
\`\`\`

`,
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
        title: "Activer la licence",
        subsections: [
          { id: "purchase-license", title: "Acheter une licence" },
          { id: "activate-cli", title: "Activer le CLI" },
          { id: "verify-status", title: "Vérifier le statut de la licence" },
          { id: "troubleshooting-license", title: "Dépannage" },
          { id: "troubleshooting-license", title: "Dépannage" },
        ],
        content: `# Activer votre licence

## Acheter votre licence

1. Achetez votre licence via [Stripe](https://buy.stripe.com/bJe9AT25t3jH3oPewx5c400)
2. Recevez votre clé de licence par email (format : \`COMPL-XXXX-XXXX-XXXX-XXXX\`)

## Activer le CLI
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

## Vérifier le statut de la licence
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

## Dépannage

### Clé de licence invalide
**Erreur :** \`Échec de validation de la licence : Format de clé invalide\`

**Solution :**
- Vérifiez le format : \`COMPL-XXXX-XXXX-XXXX-XXXX\` (4 groupes de 4 caractères)
- Vérifiez les fautes de frappe
- Copiez-collez depuis l'email pour éviter les erreurs

### Licence déjà utilisée
**Erreur :** \`Clé de licence déjà activée sur une autre machine\`

**Solution :**
- Une licence = une machine
- Achetez des licences supplémentaires pour plusieurs machines
- Ou désactivez sur l'ancienne machine : contactez support@complio.tech

### Erreur réseau
**Erreur :** \`Impossible de se connecter au serveur de licence\`

**Solution :**
\`\`\`bash
# Check internet connection
ping complio-backend.vercel.app

# Check firewall allows HTTPS (port 443)
curl https://complio-backend.vercel.app/health

# Retry
complio activate --license-key YOUR-KEY
\`\`\`

### Licence expirée
**Erreur :** \`Licence expirée\`

**Solution :**
- Renouvelez l'abonnement sur complio.tech
- Mettez à jour le moyen de paiement si la carte a expiré
- Contactez billing@complio.tech pour assistance`,
      },
      {
        id: "aws-credentials",
        title: "Configurer les identifiants AWS",
        subsections: [
          { id: "create-iam-user", title: "Créer un utilisateur IAM" },
          { id: "generate-keys", title: "Générer les clés d'accès" },
          { id: "configure-cli", title: "Configurer AWS CLI" },
          { id: "verify-config", title: "Vérifier la configuration" },
          { id: "multiple-accounts", title: "Comptes AWS multiples" },
          { id: "security-best-practices", title: "Bonnes pratiques de sécurité" },
        ],
        content: `# Configurer les identifiants AWS

Complio utilise les identifiants AWS CLI pour scanner votre infrastructure. Suivez ce guide pour créer des identifiants sécurisés en lecture seule.

## Étape 1 : Créer un utilisateur IAM

### 1. Accéder à la console AWS
- Allez sur [console.aws.amazon.com](https://console.aws.amazon.com)
- Connectez-vous avec les identifiants root ou admin IAM

### 2. Naviguer vers IAM
- Recherchez "IAM" dans la barre de recherche
- Cliquez sur le service **IAM**

### 3. Créer l'utilisateur
1. Barre latérale gauche → **Utilisateurs**
2. Cliquez sur **Créer un utilisateur** (bouton orange, en haut à droite)
3. Nom d'utilisateur : \`complio-scanner\`
4. ☐ **Décochez** "Fournir un accès à la console AWS"
5. Cliquez sur **Suivant**

### 4. Attacher les permissions
1. Sélectionnez : **Attacher directement des politiques**
2. Recherchez : \`SecurityAudit\`
3. ✅ Cochez **SecurityAudit** (politique gérée par AWS)
4. Cliquez sur **Suivant**

### 5. Vérifier et créer
- Vérifiez : Nom d'utilisateur = \`complio-scanner\`, Permissions = SecurityAudit
- Cliquez sur **Créer l'utilisateur**

## Étape 2 : Générer les clés d'accès

### 1. Sélectionner l'utilisateur
- Cliquez sur l'utilisateur \`complio-scanner\`

### 2. Onglet Informations d'identification de sécurité
- Cliquez sur l'onglet **Informations d'identification de sécurité**
- Faites défiler jusqu'à la section **Clés d'accès**

### 3. Créer une clé d'accès
1. Cliquez sur **Créer une clé d'accès**
2. Cas d'utilisation : Sélectionnez **Interface de ligne de commande (CLI)**
3. ✅ Cochez "Je comprends la recommandation"
4. Cliquez sur **Suivant**

### 4. Ajouter une description (Optionnel)
- Tag de description : \`Scanner de conformité Complio\`
- Cliquez sur **Créer une clé d'accès**

### 5. **CRITIQUE : Sauvegardez les clés maintenant**

⚠️ **C'est la SEULE fois où vous pouvez voir la clé d'accès secrète !**

\`\`\`
┌─────────────────────────────────────────────────────┐
│ ID de clé d'accès : AKIAIOSFODNN7EXAMPLE            │
│ Clé d'accès secrète : wJalrXUtnFEMI/K7MDENG/EXAMPLE │
│                                                     │
│ ⚠️  Sauvegardez ces identifiants immédiatement !    │
└─────────────────────────────────────────────────────┘
\`\`\`

**Options de sauvegarde :**
- **Télécharger le fichier .csv** (recommandé)
- **Copier dans un gestionnaire de mots de passe sécurisé**
- **Noter dans un endroit sécurisé**

❌ **NE JAMAIS :**
- Commit dans Git
- Partager par email/Slack
- Stocker dans des fichiers texte non chiffrés

## Étape 3 : Configurer AWS CLI
\`\`\`bash
# Launch AWS configuration
aws configure

# Prompts:
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
# ↑ Paste your access key from step 2

AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/EXAMPLE
# ↑ Paste your secret access key from step 2

Default region name [None]: eu-west-3
# ↑ Enter your main AWS region
# Common: us-east-1, eu-west-1, eu-west-3, ap-southeast-1

Default output format [None]: json
# ↑ Press Enter (json recommended)
\`\`\`

## Étape 4 : Vérifier la configuration
\`\`\`bash
# Test 1: Verify identity
aws sts get-caller-identity

# Expected output:
{
    "UserId": "AIDAJQABLZS4A3QDU576Q",
    "Account": "123456789012",
    "Arn": "arn:aws:iam::123456789012:user/complio-scanner"
}

# ✅ If you see your Account ID → Credentials are working!

# Test 2: Verify permissions
aws s3 ls

# Expected: List of your S3 buckets (or empty list)
# ✅ If command succeeds → Permissions are correct!
\`\`\`

## Comptes AWS multiples

Si vous avez plusieurs comptes AWS :
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

## Bonnes pratiques de sécurité

✅ **À FAIRE :**
- Utiliser un utilisateur IAM avec la politique **SecurityAudit** (lecture seule)
- Faire tourner les clés d'accès tous les 90 jours
- Stocker les identifiants dans \`~/.aws/credentials\` (sécurisé)
- Utiliser des identifiants différents par environnement (dev/prod)
- Activer la MFA sur l'utilisateur IAM (optionnel mais recommandé)

❌ **À NE PAS FAIRE :**
- Utiliser les identifiants du compte root
- Accorder des permissions d'écriture
- Partager les identifiants entre les membres de l'équipe
- Commit les identifiants dans le contrôle de version
- Utiliser des politiques trop permissives (comme AdministratorAccess)`,
      },
    ],
  },
  {
    id: "usage",
    title: "Utilisation",
    icon: "Terminal",
    sections: [
      {
        id: "first-scan",
        title: "Lancer votre premier scan",
        subsections: [
          { id: "basic-scan", title: "Scan basique" },
          { id: "scan-region", title: "Scanner une région spécifique" },
          { id: "generate-reports", title: "Générer des rapports" },
          { id: "understanding-results", title: "Comprendre les résultats" },
          { id: "next-steps", title: "Prochaines étapes" },
        ],
        content: `# Lancer votre premier scan

## Scan basique
\`\`\`bash
# Scan default region
complio scan

# Output:
✓ Connected to AWS region: us-east-1
ℹ Connected to AWS account: 123456789012
ℹ Running 40 compliance tests

Running compliance tests... ━━━━━━━━━━━━━━━━━━━━━ 100% 0:00:03

   Scan Results Summary
┏━━━━━━━━━━━━━━━━━━┳━━━━━━━━┓
┃ Metric           ┃ Value  ┃
┡━━━━━━━━━━━━━━━━━━╇━━━━━━━━┩
│ Total Tests      │ 40     │
│ Passed           │ ✅ 35  │
│ Failed           │ ❌ 5   │
│ Errors           │ ⚠️ 0   │
│ Overall Score    │ 87.5%  │
│ Execution Time   │ 3.42s  │
└──────────────────┴────────┘

🚨 Critical & High Severity Findings:

● high: Passwords never expire
  Test: IAM Password Policy
  Resource: aws-account

● high: Unencrypted EBS volumes detected
  Test: EBS Volume Encryption
  Resource: vol-0123456789abcdef

✓ Compliance Score: 87.5% - IMPROVEMENT NEEDED
\`\`\`

## Scanner une région spécifique
\`\`\`bash
# Scan Paris region
complio scan --region eu-west-3

# Scan multiple regions (run separately)
complio scan --region eu-west-1
complio scan --region us-east-1
complio scan --region ap-southeast-1
\`\`\`

## Générer des rapports

### Rapport JSON
\`\`\`bash
# Generate JSON output
complio scan --region eu-west-3 --output json > compliance-report.json

# View report
cat compliance-report.json | jq '.'
\`\`\`

**Structure JSON :**
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
      "name": "Chiffrement des buckets S3",
      "status": "passed",
      "score": 100.0,
      "findings": []
    }
  ],
  "findings": [
    {
      "severity": "high",
      "title": "Volume EBS non chiffré",
      "resource_id": "vol-0123456789abcdef",
      "resource_type": "ebs_volume",
      "description": "...",
      "remediation": "..."
    }
  ]
}
\`\`\`

### Rapport Markdown
\`\`\`bash
# Generate Markdown report
complio scan --region eu-west-3 --output markdown > compliance-report.md

# View report
cat compliance-report.md
\`\`\`

**Le Markdown inclut :**
- Résumé exécutif
- Détail test par test
- Découvertes avec sévérité
- Étapes de remédiation
- Score de conformité

## Comprendre les résultats

### Score de conformité
\`\`\`
90-100% ✅ COMPLIANT        - Audit ready
70-89%  ⚠️  NEEDS IMPROVEMENT - Some issues to fix
50-69%  ⚠️  PARTIAL         - Multiple issues
0-49%   ❌ NON-COMPLIANT    - Major gaps
\`\`\`

### Niveaux de sévérité
\`\`\`
🔴 CRITICAL - Immediate security risk (fix within 24h)
🟠 HIGH     - Significant risk (fix within 1 week)
🟡 MEDIUM   - Moderate concern (fix within 1 month)
🔵 LOW      - Minor improvement (consider)
ℹ️  INFO     - Informational only
\`\`\`

### Catégories de tests

**40 tests répartis en 4 catégories :**

1. **Chiffrement & Données (12 tests)**
   - S3, EBS, RDS, KMS, Secrets Manager, etc.

2. **Sécurité Réseau (11 tests)**
   - Security Groups, VPC, CloudFront, WAF, etc.

3. **Identité & Accès (7 tests)**
   - Politiques IAM, MFA, rotation des clés, etc.

4. **Journalisation & Monitoring (10 tests)**
   - CloudTrail, CloudWatch, GuardDuty, Config, etc.

## Prochaines étapes

### Si score ≥ 90%
1. Exporter le rapport pour les auditeurs
2. Programmer des scans réguliers (hebdomadaire/mensuel)
3. Surveiller les dérives

### Si score < 90%
1. Examiner les découvertes critiques/élevées
2. Suivre les étapes de remédiation
3. Re-scanner après les corrections
4. Itérer jusqu'à 90%+`,
      },
    ],
  },
  {
    id: "core-features",
    title: "Fonctionnalités",
    icon: "Layers",
    sections: [
      {
        id: "compliance-tests",
        title: "40 tests de conformité",
        subsections: [
          { id: "encryption-tests", title: "Chiffrement & Sécurité des données" },
          { id: "network-tests", title: "Sécurité Réseau" },
          { id: "iam-tests", title: "Identité & Gestion des accès" },
          { id: "logging-tests", title: "Journalisation & Monitoring" },
          { id: "test-details", title: "Détails des tests" },
          { id: "roadmap", title: "Feuille de route" },
        ],
        content: `# 40 tests de conformité ISO 27001:2022

Complio effectue 40 tests de sécurité automatisés mappés aux contrôles ISO 27001:2022.

## Chiffrement & Sécurité des données (12 tests)

| # | Nom du test | Contrôle | Vérifie |
|---|-------------|----------|---------|
| 1 | Chiffrement des buckets S3 | A.8.24 | Chiffrement AES-256/KMS activé |
| 2 | Chiffrement des volumes EBS | A.8.24 | Tous les volumes chiffrés |
| 3 | Chiffrement des instances RDS | A.8.24 | Chiffrement de la base au repos |
| 4 | Chiffrement Secrets Manager | A.8.24 | Clés KMS gérées par le client |
| 5 | Chiffrement DynamoDB | A.8.24 | Chiffrement des tables activé |
| 6 | Chiffrement ElastiCache | A.8.24 | Au repos & en transit |
| 7 | Chiffrement Redshift | A.8.24 | Chiffrement du cluster |
| 8 | Chiffrement EFS | A.8.24 | Chiffrement du système de fichiers |
| 9 | Chiffrement des sauvegardes | A.8.13 | Chiffrement KMS du coffre de sauvegarde |
| 10 | Rotation des clés KMS | A.8.24 | Rotation automatique des clés |
| 11 | Chiffrement des topics SNS | A.8.24 | Topics chiffrés avec KMS |
| 12 | Chiffrement CloudWatch Logs | A.8.15 | Chiffrement des groupes de logs |

## Sécurité Réseau (11 tests)

| # | Nom du test | Contrôle | Vérifie |
|---|-------------|----------|---------|
| 13 | Restrictions Security Groups | A.8.20 | Pas de 0.0.0.0/0 sur ports sensibles |
| 14 | Configuration Network ACL | A.8.20 | Règles NACL restrictives |
| 15 | VPC Flow Logs | A.8.16 | Flow logs activés par VPC |
| 16 | Blocage accès public S3 | A.8.11 | Les 4 paramètres de blocage activés |
| 17 | Sécurité Load Balancer | A.8.20 | Listeners HTTPS, security groups |
| 18 | Configuration WAF | A.8.20 | Web ACLs avec règles actives |
| 19 | CloudFront HTTPS | A.8.24 | HTTPS uniquement, TLS 1.2+ |
| 20 | Sécurité API Gateway | A.8.20 | Autorisation configurée |
| 21 | Configuration VPN | A.8.24 | Chiffrement fort (AES256) |
| 22 | Sécurité Transit Gateway | A.8.31 | Isolation des tables de routage |
| 23 | VPC Endpoints | A.8.31 | Security groups attachés |

## Identité & Gestion des accès (7 tests)

| # | Nom du test | Contrôle | Vérifie |
|---|-------------|----------|---------|
| 24 | Politique de mot de passe IAM | A.8.5 | 14+ caractères, complexité, expiration 90 jours |
| 25 | Exigence MFA | A.8.5 | Tous les utilisateurs ont la MFA |
| 26 | Protection compte root | A.8.2 | MFA activée, pas de clés d'accès |
| 27 | Rotation des clés d'accès | A.8.5 | Clés < 90 jours |
| 28 | Principe du moindre privilège IAM | A.8.2 | Pas de politiques trop permissives |
| 29 | Accès inter-comptes | A.8.31 | Relations de confiance sécurisées |
| 30 | Rôles liés aux services | A.8.31 | Utilisation correcte des rôles |

## Journalisation & Monitoring (10 tests)

| # | Nom du test | Contrôle | Vérifie |
|---|-------------|----------|---------|
| 31 | CloudTrail Multi-Région | A.8.15 | Journalisation multi-région activée |
| 32 | Validation des logs CloudTrail | A.8.15 | Validation des fichiers activée |
| 33 | Chiffrement CloudTrail | A.8.15 | Chiffrement KMS pour les logs |
| 34 | Rétention CloudWatch Logs | A.8.15 | Rétention ≥ 90 jours |
| 35 | Alarmes CloudWatch | A.8.16 | Alarmes critiques configurées |
| 36 | AWS Config activé | A.8.16 | Enregistreur Config actif |
| 37 | GuardDuty activé | A.8.16 | Détection des menaces activée |
| 38 | Security Hub activé | A.8.16 | Standards activés |
| 39 | Règles EventBridge | A.8.16 | Règles d'événements de sécurité |
| 40 | Versioning S3 | A.8.13 | Versioning des buckets activé |

## Détails des tests

### Exemple : Chiffrement des buckets S3 (Test #1)

**Ce qu'il vérifie :**
- Tous les buckets S3 ont le chiffrement côté serveur activé
- Type de chiffrement : AES-256 (SSE-S3) ou KMS (SSE-KMS)

**Critères de réussite :**
- 100% des buckets sont chiffrés

**Sévérité en cas d'échec :**
- ÉLEVÉ - Les buckets non chiffrés exposent les données au repos

**Remédiation :**
\`\`\`bash
# Enable encryption on bucket
aws s3api put-bucket-encryption \\
  --bucket my-bucket \\
  --server-side-encryption-configuration \\
  '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'
\`\`\`

**Contrôle ISO 27001 :**
- A.8.24 : Utilisation de la cryptographie

### Exemple : Politique de mot de passe IAM (Test #24)

**Ce qu'il vérifie :**
- Longueur minimale ≥ 14 caractères
- Exige des majuscules
- Exige des minuscules
- Exige des chiffres
- Exige des symboles
- Expiration du mot de passe ≤ 90 jours
- Prévention de réutilisation (5+ mots de passe)
- Expiration stricte activée

**Critères de réussite :**
- Les 8 exigences satisfaites = 100%
- 7/8 satisfaites = 87.5%
- etc.

**Sévérité en cas d'échec :**
- ÉLEVÉ si l'expiration ou la réutilisation n'est pas configurée
- MOYEN si les exigences de complexité manquent

**Remédiation :**
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

**Contrôle ISO 27001 :**
- A.8.5 : Authentification des utilisateurs

## Feuille de route : Tests futurs

**À venir dans la v2.0 :**
- Support Azure & GCP (multi-cloud)
- Framework SOC2 (80 tests)
- Framework RGPD (50 tests)
- Création de tests personnalisés
- Intégration policy-as-code`,
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

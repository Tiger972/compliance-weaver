import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CGU = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-gradient">
      <Navbar />

      <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <span className="gradient-text">Conditions Générales d'Utilisation</span>
            </h1>
            <p className="text-muted-foreground mb-12">Dernière mise à jour : 1er janvier 2026</p>

            <div className="space-y-12">
              {/* 1. Objet */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Objet</h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du service Complio 
                    accessible sur www.complio.tech.
                  </p>
                  <p>En utilisant Complio, vous acceptez sans réserve les présentes CGU.</p>
                  <p>Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.</p>
                </div>
              </section>

              {/* 2. Définitions */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Définitions</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Service</strong> : désigne la plateforme Complio et l'ensemble de ses fonctionnalités</li>
                  <li><strong className="text-foreground">Utilisateur</strong> : toute personne utilisant le Service</li>
                  <li><strong className="text-foreground">Client</strong> : toute personne ou entité ayant souscrit à un abonnement payant</li>
                  <li><strong className="text-foreground">Compte</strong> : espace personnel créé par l'Utilisateur pour accéder au Service</li>
                  <li><strong className="text-foreground">Credentials AWS</strong> : informations d'identification Amazon Web Services fournies par l'Utilisateur</li>
                </ul>
              </section>

              {/* 3. Inscription et compte */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Inscription et compte</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <div>
                    <p className="mb-2">Pour utiliser Complio, vous devez :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Créer un compte avec des informations exactes et à jour</li>
                      <li>Être majeur et avoir la capacité juridique de contracter</li>
                      <li>Fournir une adresse email valide</li>
                      <li>Choisir un mot de passe sécurisé</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2">Vous êtes responsable de :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>La confidentialité de vos identifiants de connexion</li>
                      <li>Toutes les activités effectuées depuis votre compte</li>
                      <li>La mise à jour de vos informations personnelles</li>
                    </ul>
                  </div>
                  <p>Vous vous engagez à nous notifier immédiatement en cas d'utilisation non autorisée de votre compte.</p>
                </div>
              </section>

              {/* 4. Services proposés */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Services proposés</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <div>
                    <p className="mb-2">Complio propose les services suivants :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Scanning automatisé de conformité ISO 27001 sur infrastructure AWS</li>
                      <li>Génération de rapports de conformité (JSON, Markdown, PDF)</li>
                      <li>Intégration CI/CD pour tests automatisés</li>
                      <li>Support technique selon l'offre souscrite</li>
                    </ul>
                  </div>
                  <p>Les fonctionnalités varient selon l'abonnement choisi (Starter, Professional, Enterprise).</p>
                  <div>
                    <p className="mb-2">Complio est un outil d'aide à la conformité et ne remplace pas :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Un audit de conformité officiel</li>
                      <li>Les conseils d'un consultant en sécurité</li>
                      <li>Une certification ISO 27001 formelle</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5. Conditions financières */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Conditions financières</h2>
                <div className="text-muted-foreground leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Abonnements</h3>
                    <p className="mb-2">Complio propose plusieurs formules d'abonnement :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Professional : €299/mois (disponible prochainement)</li>
                      <li>Enterprise : €599/mois (disponible prochainement)</li>
                    </ul>
                    <p className="mt-2">Les tarifs sont indiqués en euros hors taxes.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Facturation</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>La facturation est mensuelle et récurrente</li>
                      <li>Le paiement s'effectue par carte bancaire via notre prestataire Stripe</li>
                      <li>La première facturation intervient dès la souscription</li>
                      <li>Les factures sont envoyées par email</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Période d'essai</h3>
                    <p>Un essai gratuit peut être proposé selon l'offre. Au terme de la période d'essai, l'abonnement devient payant sauf résiliation.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Résiliation</h3>
                    <p>Vous pouvez résilier votre abonnement à tout moment depuis votre espace client. La résiliation prend effet à la fin de la période de facturation en cours. Aucun remboursement au prorata n'est effectué.</p>
                  </div>
                </div>
              </section>

              {/* 6. Obligations de l'utilisateur */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Obligations de l'utilisateur</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>En utilisant Complio, vous vous engagez à :</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Ne pas utiliser le Service à des fins illégales ou non autorisées</li>
                    <li>Ne pas tenter d'accéder à des systèmes ou données sans autorisation</li>
                    <li>Fournir des credentials AWS valides et dont vous avez l'autorisation d'utilisation</li>
                    <li>Ne pas partager votre compte avec des tiers non autorisés</li>
                    <li>Ne pas surcharger ou perturber l'infrastructure du Service</li>
                    <li>Ne pas extraire, copier ou redistribuer le contenu du Service</li>
                    <li>Respecter les droits de propriété intellectuelle de Complio</li>
                    <li>Ne pas tenter de contourner les limitations techniques du Service</li>
                  </ul>
                  <p>Toute violation de ces obligations peut entraîner la suspension ou la résiliation immédiate de votre compte sans remboursement.</p>
                </div>
              </section>

              {/* 7. Credentials AWS et sécurité */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Credentials AWS et sécurité</h2>
                <div className="text-muted-foreground leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Responsabilité de l'Utilisateur</h3>
                    <p className="mb-2">Vous êtes responsable de :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>La validité et l'exactitude de vos credentials AWS</li>
                      <li>Les permissions IAM accordées à Complio</li>
                      <li>La conformité de votre utilisation avec les conditions AWS</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Engagements de Complio</h3>
                    <p className="mb-2">Nous nous engageons à :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Chiffrer vos credentials avec AES-256</li>
                      <li>Stocker vos credentials localement (pas sur nos serveurs)</li>
                      <li>Utiliser uniquement des permissions IAM en lecture seule</li>
                      <li>Ne jamais modifier votre infrastructure AWS</li>
                      <li>Protéger vos données selon notre Politique de confidentialité</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Important</h3>
                    <p>Complio ne stocke PAS vos credentials AWS sur nos serveurs. Les credentials sont chiffrés et stockés localement sur votre machine (~/.complio/credentials.enc).</p>
                  </div>
                </div>
              </section>

              {/* 8. Propriété intellectuelle */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Propriété intellectuelle</h2>
                <div className="text-muted-foreground leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Droits de Complio</h3>
                    <p className="mb-2">Tous les éléments du Service (code source, design, logos, documentation, contenu) sont protégés par le droit d'auteur et appartiennent à Complio.</p>
                    <p className="mb-2">Vous ne pouvez pas :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Copier, modifier ou distribuer le code source</li>
                      <li>Utiliser les logos ou marques de Complio sans autorisation</li>
                      <li>Créer des produits dérivés basés sur Complio</li>
                      <li>Effectuer de la rétro-ingénierie du Service</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Licence d'utilisation</h3>
                    <p>Complio vous accorde une licence non exclusive, non transférable et révocable pour utiliser le Service dans le cadre de votre abonnement.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Vos données</h3>
                    <p>Vous conservez la propriété de vos données (rapports, configurations, résultats de scan). Vous accordez à Complio une licence pour utiliser ces données uniquement dans le cadre de la fourniture du Service.</p>
                  </div>
                </div>
              </section>

              {/* 9. Disponibilité du service */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Disponibilité du service</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Complio s'efforce de maintenir le Service accessible 24h/24, 7j/7.</p>
                  <div>
                    <p className="mb-2">Cependant, nous ne garantissons pas :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Une disponibilité ininterrompue du Service</li>
                      <li>L'absence d'erreurs ou de bugs</li>
                      <li>La compatibilité avec toutes les configurations AWS</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2">Nous nous réservons le droit de :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Effectuer des maintenances programmées (avec notification préalable)</li>
                      <li>Suspendre temporairement le Service pour raisons techniques</li>
                      <li>Modifier ou améliorer les fonctionnalités du Service</li>
                    </ul>
                  </div>
                  <p>Complio ne peut être tenu responsable des interruptions de service, sauf faute grave ou négligence de notre part.</p>
                </div>
              </section>

              {/* 10. Limitation de responsabilité */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Limitation de responsabilité</h2>
                <div className="text-muted-foreground leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Utilisation du Service</h3>
                    <p className="mb-2">Complio est un outil d'aide à la conformité. Vous êtes seul responsable de :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>L'interprétation des résultats de scan</li>
                      <li>Les actions correctives entreprises</li>
                      <li>La conformité réelle de votre infrastructure</li>
                      <li>Les décisions prises sur la base des rapports Complio</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Exclusions</h3>
                    <p className="mb-2">Complio ne peut être tenu responsable :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Des dommages indirects, consécutifs ou imprévus</li>
                      <li>De la perte de données, de revenus ou d'opportunités</li>
                      <li>Des coûts de systèmes ou services de remplacement</li>
                      <li>Des échecs d'audit ou de certification ISO 27001</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Limitation</h3>
                    <p>Notre responsabilité totale ne peut excéder le montant des sommes versées par le Client au cours des 12 derniers mois.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Exclusion de garantie</h3>
                    <p>Le Service est fourni "tel quel" sans garantie d'aucune sorte, expresse ou implicite.</p>
                  </div>
                </div>
              </section>

              {/* 11. Protection des données */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Protection des données</h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    Le traitement de vos données personnelles est régi par notre{" "}
                    <Link to="/politique-de-confidentialite" className="text-primary hover:underline">
                      Politique de confidentialité
                    </Link>
                    .
                  </p>
                  <p>En utilisant Complio, vous consentez à la collecte et au traitement de vos données conformément à :</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Notre Politique de confidentialité</li>
                    <li>Le Règlement Général sur la Protection des Données (RGPD)</li>
                    <li>La législation française sur la protection des données</li>
                  </ul>
                  <p>
                    Pour toute question relative à vos données, contactez{" "}
                    <a href="mailto:privacy@complio.tech" className="text-primary hover:underline">
                      privacy@complio.tech
                    </a>
                  </p>
                </div>
              </section>

              {/* 12. Modifications des CGU */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Modifications des CGU</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Complio se réserve le droit de modifier les présentes CGU à tout moment.</p>
                  <div>
                    <p className="mb-2">Les modifications vous seront notifiées par :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Email à l'adresse associée à votre compte</li>
                      <li>Notification sur le Service</li>
                      <li>Publication de la nouvelle version sur www.complio.tech/cgu</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2">Les modifications prennent effet :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Immédiatement pour les nouveaux utilisateurs</li>
                      <li>30 jours après notification pour les utilisateurs existants</li>
                    </ul>
                  </div>
                  <p>Votre utilisation continue du Service après l'entrée en vigueur des modifications vaut acceptation des nouvelles CGU.</p>
                  <p>Si vous n'acceptez pas les modifications, vous devez cesser d'utiliser le Service et résilier votre compte.</p>
                </div>
              </section>

              {/* 13. Résiliation */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Résiliation</h2>
                <div className="text-muted-foreground leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Résiliation par l'Utilisateur</h3>
                    <p>
                      Vous pouvez résilier votre compte à tout moment depuis votre espace client ou en contactant{" "}
                      <a href="mailto:support@complio.tech" className="text-primary hover:underline">
                        support@complio.tech
                      </a>
                      .
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Résiliation par Complio</h3>
                    <p className="mb-2">Nous pouvons suspendre ou résilier votre compte en cas de :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Violation des présentes CGU</li>
                      <li>Utilisation frauduleuse du Service</li>
                      <li>Non-paiement des sommes dues</li>
                      <li>Inactivité prolongée du compte (12 mois)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Effets de la résiliation</h3>
                    <p className="mb-2">À la résiliation :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Votre accès au Service est immédiatement supprimé</li>
                      <li>Vos données peuvent être conservées pendant 30 jours puis supprimées</li>
                      <li>Les sommes dues restent exigibles</li>
                      <li>Vous pouvez exporter vos données avant la résiliation définitive</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 14. Force majeure */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">14. Force majeure</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Complio ne peut être tenu responsable de l'inexécution de ses obligations en cas de force majeure, notamment :</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Catastrophes naturelles</li>
                    <li>Incendies, inondations</li>
                    <li>Pannes d'infrastructure (AWS, serveurs tiers)</li>
                    <li>Actes de terrorisme, guerres, émeutes</li>
                    <li>Grèves générales</li>
                    <li>Modifications législatives ou réglementaires</li>
                    <li>Cyberattaques ou défaillances des réseaux de communication</li>
                  </ul>
                  <p>En cas de force majeure, nos obligations sont suspendues pour la durée de l'événement.</p>
                </div>
              </section>

              {/* 15. Loi applicable et juridiction */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">15. Loi applicable et juridiction</h2>
                <div className="text-muted-foreground leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Loi applicable</h3>
                    <p>Les présentes CGU sont régies par le droit français.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Règlement des litiges</h3>
                    <p>
                      En cas de litige, nous privilégions une résolution amiable. Vous pouvez nous contacter à{" "}
                      <a href="mailto:legal@complio.tech" className="text-primary hover:underline">
                        legal@complio.tech
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Médiation</h3>
                    <p>Conformément à la législation sur la consommation, vous pouvez recourir gratuitement à un médiateur de la consommation en cas de litige.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Juridiction compétente</h3>
                    <p>À défaut de résolution amiable, les tribunaux français sont seuls compétents. Pour les consommateurs : tribunaux du lieu de résidence. Pour les professionnels : tribunaux de Paris.</p>
                  </div>
                </div>
              </section>

              {/* 16. Divers */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">16. Divers</h2>
                <div className="text-muted-foreground leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Intégralité de l'accord</h3>
                    <p>Les présentes CGU constituent l'intégralité de l'accord entre vous et Complio concernant l'utilisation du Service.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Nullité partielle</h3>
                    <p>Si une disposition des CGU est jugée invalide, les autres dispositions restent en vigueur.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Non-renonciation</h3>
                    <p>Le fait de ne pas exercer un droit ne constitue pas une renonciation à ce droit.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Cession</h3>
                    <p>Vous ne pouvez pas céder vos droits ou obligations sans notre accord préalable écrit.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Langue</h3>
                    <p>En cas de traduction des CGU, la version française fait foi.</p>
                  </div>
                </div>
              </section>

              {/* 17. Contact */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">17. Contact</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <div>
                    <p className="mb-2">Pour toute question concernant les présentes CGU, contactez-nous :</p>
                    <ul className="space-y-1">
                      <li>
                        Email :{" "}
                        <a href="mailto:legal@complio.tech" className="text-primary hover:underline">
                          legal@complio.tech
                        </a>
                      </li>
                      <li>Adresse : [Adresse du siège social]</li>
                      <li>Site web : www.complio.tech</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2">Pour les demandes urgentes ou le support technique :</p>
                    <ul className="space-y-1">
                      <li>
                        Email :{" "}
                        <a href="mailto:support@complio.tech" className="text-primary hover:underline">
                          support@complio.tech
                        </a>
                      </li>
                      <li>Chat : Disponible sur www.complio.tech (9h-18h CET)</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGU;
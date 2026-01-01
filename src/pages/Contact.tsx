import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const useScrollToTop = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.consent) {
      toast({
        title: "Erreur",
        description: "Veuillez accepter la politique de confidentialité.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      consent: false,
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen page-gradient">
      <Navbar />

      <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text">Contactez-nous</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Une question sur Complio ? Nous sommes là pour vous aider
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            {/* Email Card */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
              <a 
                href="mailto:andy.piquionne@complio.tech" 
                className="text-primary hover:underline block mb-2"
              >
                andy.piquionne@complio.tech
              </a>
              <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
            </div>

            {/* Demo Card */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Réserver une démo</h3>
              <p className="text-muted-foreground mb-4">Planifier une démo personnalisée</p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://calendar.app.google/UEGbiWjVN4niVoE37" target="_blank" rel="noopener noreferrer">
                  Réserver un créneau
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Envoyer un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise</Label>
                  <Input
                    id="company"
                    placeholder="Votre entreprise"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product">Questions produit</SelectItem>
                      <SelectItem value="support">Support technique</SelectItem>
                      <SelectItem value="pricing">Tarifs</SelectItem>
                      <SelectItem value="partnership">Partenariats</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Votre message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                />
                <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  J'accepte que mes données soient utilisées pour répondre à ma demande. 
                  Voir notre{" "}
                  <Link to="/politique-de-confidentialite" className="text-primary hover:underline">
                    Politique de confidentialité
                  </Link>
                  .
                </Label>
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center py-16 px-8 bg-card border border-border rounded-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complio : L'automatisation de votre conformité ISO 27001
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Automatisez votre conformité ISO 27001 et concentrez-vous sur ce qui compte vraiment
            </p>
            <Button variant="gradient" size="lg" asChild>
              <a href="https://calendar.app.google/UEGbiWjVN4niVoE37" target="_blank" rel="noopener noreferrer">
                Demander une démo
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

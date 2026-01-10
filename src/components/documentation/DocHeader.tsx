import { Link } from "react-router-dom";
import { Home, Linkedin, Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import DocSearch from "./DocSearch";
import complioLogo from "@/assets/complio-logo.png";

interface DocHeaderProps {
  onToggleSidebar?: () => void;
}

const DocHeader = ({ onToggleSidebar }: DocHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 gap-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onToggleSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={complioLogo} alt="Complio" className="h-12 w-auto" />
        </Link>

        {/* Search - centered */}
        <div className="flex-1 flex justify-center px-4">
          <DocSearch />
        </div>

        {/* Quick links */}
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Accueil
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
            <a
              href="https://www.linkedin.com/company/compl-io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="gradient" size="sm" asChild>
            <a
              href="https://calendar.app.google/UEGbiWjVN4niVoE37"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Réserver une démo</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DocHeader;

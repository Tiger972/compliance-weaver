import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { documentationContent } from "@/lib/documentation-content";

interface DocBreadcrumbsProps {
  categoryId?: string;
  sectionId?: string;
}

const DocBreadcrumbs = ({ categoryId, sectionId }: DocBreadcrumbsProps) => {
  const category = documentationContent.find((c) => c.id === categoryId);
  const section = category?.sections.find((s) => s.id === sectionId);

  return (
    <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
      <Link
        to="/documentation"
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>

      {category && (
        <>
          <ChevronRight className="h-4 w-4" />
          <Link
            to={`/documentation/${category.id}/${category.sections[0]?.id || ""}`}
            className="hover:text-foreground transition-colors"
          >
            {category.title}
          </Link>
        </>
      )}

      {section && (
        <>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{section.title}</span>
        </>
      )}
    </nav>
  );
};

export default DocBreadcrumbs;

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, ChevronRight, Rocket, Download, Settings, Terminal, Layers } from "lucide-react";
import { documentationContent } from "@/lib/documentation-content";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Download,
  Settings,
  Terminal,
  Layers,
};

const DocSidebar = () => {
  const { categoryId, sectionId } = useParams();
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    documentationContent.map((c) => c.id)
  );

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
    <nav className="w-64 shrink-0 border-r border-border h-full overflow-y-auto bg-sidebar">
      <div className="p-4 space-y-1">
        {documentationContent.map((category) => {
          const Icon = iconMap[category.icon] || Rocket;
          const isExpanded = expandedCategories.includes(category.id);
          const isActiveCategory = categoryId === category.id;

          return (
            <div key={category.id}>
              <button
                onClick={() => toggleCategory(category.id)}
                className={cn(
                  "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActiveCategory
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:bg-muted"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="flex-1 text-left">{category.title}</span>
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </button>

              {isExpanded && (
                <div className="ml-4 mt-1 space-y-0.5 border-l border-border pl-3">
                  {category.sections.map((section) => {
                    const isActive =
                      categoryId === category.id && sectionId === section.id;

                    return (
                      <Link
                        key={section.id}
                        to={`/documentation/${category.id}/${section.id}`}
                        className={cn(
                          "block px-3 py-1.5 text-sm rounded-md transition-colors",
                          isActive
                            ? "text-primary font-medium bg-primary/5"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {section.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default DocSidebar;

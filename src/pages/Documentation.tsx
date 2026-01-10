import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DocHeader from "@/components/documentation/DocHeader";
import DocSidebar from "@/components/documentation/DocSidebar";
import DocTableOfContents from "@/components/documentation/DocTableOfContents";
import DocBreadcrumbs from "@/components/documentation/DocBreadcrumbs";
import MarkdownRenderer from "@/components/documentation/MarkdownRenderer";
import { documentationContent } from "@/lib/documentation-content";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Documentation = () => {
  const { categoryId, sectionId } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Default to first section if no params
  useEffect(() => {
    if (!categoryId || !sectionId) {
      const firstCategory = documentationContent[0];
      const firstSection = firstCategory?.sections[0];
      if (firstCategory && firstSection) {
        navigate(`/documentation/${firstCategory.id}/${firstSection.id}`, {
          replace: true,
        });
      }
    }
  }, [categoryId, sectionId, navigate]);

  // Get current content
  const currentCategory = documentationContent.find((c) => c.id === categoryId);
  const currentSection = currentCategory?.sections.find(
    (s) => s.id === sectionId
  );

  // Get prev/next navigation
  const allSections = documentationContent.flatMap((c) =>
    c.sections.map((s) => ({
      categoryId: c.id,
      categoryTitle: c.title,
      ...s,
    }))
  );

  const currentIndex = allSections.findIndex(
    (s) => s.categoryId === categoryId && s.id === sectionId
  );

  const prevSection = currentIndex > 0 ? allSections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null;

  // Close sidebar on navigation (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [categoryId, sectionId]);

  return (
    <div className="min-h-screen bg-background">
      <DocHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed lg:sticky top-14 h-[calc(100vh-3.5rem)] z-40 lg:z-0 transition-transform duration-200 ease-in-out bg-sidebar",
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          )}
        >
          <DocSidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <DocBreadcrumbs categoryId={categoryId} sectionId={sectionId} />

            {currentSection ? (
              <>
                <MarkdownRenderer content={currentSection.content} />

                {/* Prev/Next navigation */}
                <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
                  {prevSection ? (
                    <Button variant="ghost" asChild>
                      <Link
                        to={`/documentation/${prevSection.categoryId}/${prevSection.id}`}
                        className="flex items-center gap-2"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <div className="text-left">
                          <div className="text-xs text-muted-foreground">
                            Previous
                          </div>
                          <div className="font-medium">{prevSection.title}</div>
                        </div>
                      </Link>
                    </Button>
                  ) : (
                    <div />
                  )}

                  {nextSection ? (
                    <Button variant="ghost" asChild>
                      <Link
                        to={`/documentation/${nextSection.categoryId}/${nextSection.id}`}
                        className="flex items-center gap-2"
                      >
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground">
                            Next
                          </div>
                          <div className="font-medium">{nextSection.title}</div>
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <div />
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold text-foreground mb-4">
                  Documentation
                </h1>
                <p className="text-muted-foreground">
                  Select a section from the sidebar to get started.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* Table of Contents */}
        {currentSection && (
          <DocTableOfContents content={currentSection.content} />
        )}
      </div>
    </div>
  );
};

export default Documentation;

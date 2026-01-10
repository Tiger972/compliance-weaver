import React, { useMemo } from "react";
import CodeBlock from "./CodeBlock";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer = ({ content, className }: MarkdownRendererProps) => {
  const rendered = useMemo(() => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;
    let listItems: string[] = [];
    let listType: "ul" | "ol" | null = null;
    let tableRows: string[][] = [];
    let inTable = false;

    const flushList = () => {
      if (listItems.length > 0 && listType) {
        const ListTag = listType === "ul" ? "ul" : "ol";
        elements.push(
          <ListTag
            key={`list-${elements.length}`}
            className={cn(
              "my-4 space-y-2",
              listType === "ul" ? "list-disc pl-6" : "list-decimal pl-6"
            )}
          >
            {listItems.map((item, idx) => (
              <li key={idx} className="text-foreground">
                {parseInline(item)}
              </li>
            ))}
          </ListTag>
        );
        listItems = [];
        listType = null;
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        const headers = tableRows[0];
        const bodyRows = tableRows.slice(2); // Skip header separator
        elements.push(
          <div key={`table-${elements.length}`} className="my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  {headers.map((cell, idx) => (
                    <th
                      key={idx}
                      className="py-2 px-4 text-left font-semibold text-foreground bg-muted/50"
                    >
                      {parseInline(cell.trim())}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className="border-b border-border hover:bg-muted/30 transition-colors"
                  >
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="py-2 px-4 text-foreground">
                        {parseInline(cell.trim())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    const parseInline = (text: string): React.ReactNode => {
      // Handle inline code
      const parts = text.split(/(`[^`]+`)/g);
      return parts.map((part, idx) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={idx}
              className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono text-primary"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        // Handle bold
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return boldParts.map((bp, bIdx) => {
          if (bp.startsWith("**") && bp.endsWith("**")) {
            return (
              <strong key={`${idx}-${bIdx}`} className="font-semibold">
                {bp.slice(2, -2)}
              </strong>
            );
          }
          // Handle links
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
          const linkParts: React.ReactNode[] = [];
          let lastIndex = 0;
          let match;
          while ((match = linkRegex.exec(bp)) !== null) {
            if (match.index > lastIndex) {
              linkParts.push(bp.slice(lastIndex, match.index));
            }
            linkParts.push(
              <a
                key={`${idx}-${bIdx}-${match.index}`}
                href={match[2]}
                className="text-primary hover:underline"
                target={match[2].startsWith("http") ? "_blank" : undefined}
                rel={match[2].startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {match[1]}
              </a>
            );
            lastIndex = match.index + match[0].length;
          }
          if (lastIndex < bp.length) {
            linkParts.push(bp.slice(lastIndex));
          }
          return linkParts.length > 0 ? linkParts : bp;
        });
      });
    };

    while (i < lines.length) {
      const line = lines[i];

      // Code block
      if (line.startsWith("```")) {
        flushList();
        flushTable();
        const language = line.slice(3).trim() || "text";
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        elements.push(
          <CodeBlock
            key={`code-${elements.length}`}
            code={codeLines.join("\n")}
            language={language}
            className="my-4"
          />
        );
        i++;
        continue;
      }

      // Table row
      if (line.includes("|") && line.trim().startsWith("|")) {
        flushList();
        const cells = line
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());
        if (!inTable) {
          inTable = true;
        }
        tableRows.push(cells);
        i++;
        continue;
      } else if (inTable) {
        flushTable();
      }

      // Heading
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        flushList();
        const level = headingMatch[1].length;
        const text = headingMatch[2];
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");

        const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
        const headingClasses: Record<number, string> = {
          1: "text-3xl font-bold mt-0 mb-6 text-foreground",
          2: "text-2xl font-semibold mt-8 mb-4 text-foreground",
          3: "text-xl font-semibold mt-6 mb-3 text-foreground",
          4: "text-lg font-medium mt-4 mb-2 text-foreground",
          5: "text-base font-medium mt-3 mb-2 text-foreground",
          6: "text-sm font-medium mt-2 mb-1 text-foreground",
        };

        elements.push(
          React.createElement(
            HeadingTag,
            {
              key: `heading-${elements.length}`,
              id,
              className: headingClasses[level],
            },
            parseInline(text)
          )
        );
        i++;
        continue;
      }

      // Unordered list
      if (line.match(/^[-*]\s+/)) {
        if (listType !== "ul") {
          flushList();
          listType = "ul";
        }
        listItems.push(line.replace(/^[-*]\s+/, ""));
        i++;
        continue;
      }

      // Ordered list
      if (line.match(/^\d+\.\s+/)) {
        if (listType !== "ol") {
          flushList();
          listType = "ol";
        }
        listItems.push(line.replace(/^\d+\.\s+/, ""));
        i++;
        continue;
      }

      // Flush list if we hit non-list content
      flushList();

      // Blockquote (for warnings/notes)
      if (line.startsWith(">")) {
        const quoteText = line.slice(1).trim();
        const isWarning = quoteText.includes("⚠️") || quoteText.toLowerCase().includes("warning");
        elements.push(
          <blockquote
            key={`quote-${elements.length}`}
            className={cn(
              "my-4 pl-4 border-l-4",
              isWarning
                ? "border-yellow-500 bg-yellow-500/10"
                : "border-primary bg-primary/5"
            )}
          >
            <p className="py-2 text-foreground">{parseInline(quoteText)}</p>
          </blockquote>
        );
        i++;
        continue;
      }

      // Horizontal rule
      if (line.match(/^-{3,}$/) || line.match(/^\*{3,}$/)) {
        elements.push(
          <hr key={`hr-${elements.length}`} className="my-8 border-border" />
        );
        i++;
        continue;
      }

      // Empty line
      if (line.trim() === "") {
        i++;
        continue;
      }

      // Paragraph
      elements.push(
        <p
          key={`p-${elements.length}`}
          className="my-4 text-foreground leading-relaxed"
        >
          {parseInline(line)}
        </p>
      );
      i++;
    }

    flushList();
    flushTable();

    return elements;
  }, [content]);

  return (
    <div className={cn("prose prose-slate dark:prose-invert max-w-none", className)}>
      {rendered}
    </div>
  );
};

export default MarkdownRenderer;

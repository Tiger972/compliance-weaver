import { useState, useEffect, useRef } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css";

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

const CodeBlock = ({ code, language, className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Map common language aliases
  const langMap: Record<string, string> = {
    bash: "bash",
    shell: "bash",
    sh: "bash",
    json: "json",
    javascript: "javascript",
    js: "javascript",
    typescript: "typescript",
    ts: "typescript",
    python: "python",
    py: "python",
    text: "text",
  };

  const prismLang = langMap[language.toLowerCase()] || "text";

  return (
    <div className={cn("relative group rounded-lg overflow-hidden my-4", className)}>
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-md transition-all opacity-0 group-hover:opacity-100"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-400" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="absolute top-2 left-3 text-xs text-white/50 font-mono">
        {language}
      </div>
      <pre className="!m-0 !pt-10 !pb-4 !px-4 !bg-[#2d2d2d] !rounded-lg overflow-x-auto">
        <code
          ref={codeRef}
          className={`language-${prismLang} !text-sm !leading-relaxed`}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;

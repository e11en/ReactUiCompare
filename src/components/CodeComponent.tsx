import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeComponentProperties {
  children?: React.ReactNode;
  language?: string;
}

const CodeComponent = ({
  children,
  language = "jsx",
}: CodeComponentProperties) => {
  return (
    <SyntaxHighlighter language={language} style={prism}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeComponent;

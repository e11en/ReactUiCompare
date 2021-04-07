import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeComponentProperties {
  children?: React.ReactNode;
  language?: string;
}

const CodeComponent = ({
  children,
  language = "htmlbars",
}: CodeComponentProperties) => {
  return (
    <SyntaxHighlighter language={language} style={monokai}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeComponent;

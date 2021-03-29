import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeComponentProperties {
  children?: React.ReactNode;
}

const CodeComponent = ({children}: CodeComponentProperties) => {
  return (
    <SyntaxHighlighter language="htmlbars" style={monokai}>
        {children}
    </SyntaxHighlighter>
  );
};

export default CodeComponent;

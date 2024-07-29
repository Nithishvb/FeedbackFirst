import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const CodeBlock = ({ codeSnippet }: { codeSnippet: string }) => {
  return (
    <CopyBlock
      text={codeSnippet}
      language={"javascript"}
      theme={dracula}
      customStyle={{
        padding: "10px",
        width: "100%",
      }}
    />
  );
};

export default CodeBlock;

"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import React, { useEffect } from "react";
import { Toolbar } from "./Toolbar";

const editorConfig = {
  namespace: "BlogEditor",
  theme: {
    paragraph: "mb-2",
  },
  onError(error: Error) {
    console.error("Lexical Error:", error);
  },
  nodes: [],
};

export function LexicalEditor({ onChange }: { onChange?: (html: string) => void }) {
  const OnChangePluginWithHTML = () => {
    const [editor] = useLexicalComposerContext();

    React.useEffect(() => {
      return editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          const html = editor.getRootElement()?.innerHTML || "";
          console.log("Editor content updated:", html);
          onChange?.(html);
        });
      });
    }, [editor]);

    return null;
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="border border-[#748195] rounded-lg p-4 min-h-full text-white">
        {/* Add the Toolbar */}
        <Toolbar />
        
        {/* Rich Text Editor */}
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input min-h-[200px] p-2 border bg-gray-800 text-white" />}
          placeholder={<div className="text-muted">Enter text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePluginWithHTML />
      </div>
    </LexicalComposer>
  );
}
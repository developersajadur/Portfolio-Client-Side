import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import { INSERT_UNORDERED_LIST_COMMAND, INSERT_ORDERED_LIST_COMMAND } from "@lexical/list"; 
import React from "react";

export function Toolbar() {
  const [editor] = useLexicalComposerContext();

  return (
    <div className="flex space-x-2 p-2 border-b border-gray-600 bg-gray-800 text-white">
      <button 
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")} 
        className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
      >
        Bold
      </button>
      <button 
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")} 
        className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
      >
        Italic
      </button>
      <button 
        onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)} 
        className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
      >
        Bullet List
      </button>
      <button 
        onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)} 
        className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
      >
        Numbered List
      </button>
    </div>
  );
}

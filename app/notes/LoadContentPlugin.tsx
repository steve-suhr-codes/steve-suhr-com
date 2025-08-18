"use client";

import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export default function LoadContentPlugin({ json }: { json: any }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!json) return;
    const state = editor.parseEditorState(json);
    editor.setEditorState(state);
  }, [json, editor]);

  return null;
}

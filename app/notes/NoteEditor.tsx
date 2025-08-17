"use client";

import { useState, useRef } from "react";
import { useNote } from "./NoteProvider";
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { $getRoot } from 'lexical';
import { $generateHtmlFromNodes } from '@lexical/html';
import { EditorState, LexicalEditor } from 'lexical';
import { useMemo } from 'react';
import DOMPurify from 'isomorphic-dompurify';

export default function NoteEditor() {
  const initialConfig = {
    namespace: 'MyEditor', // unique namespace
    theme: {
      // Optional: customize CSS classes for nodes
      paragraph: 'mb-2',
    },
    onError(error: any) {
      console.error(error);
    },
  };
  const { currentNoteId, setCurrentNoteId } = useNote();
  const [title, setTitle] = useState("");
  const [html, setHtml] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [showEditor, setShowEditor] = useState(!currentNoteId);

  // Hold the latest EditorState so the Save button can read it
  const latestEditorStateRef = useRef<EditorState>(null);
  const latestEditorRef = useRef<LexicalEditor>(null);

  function handleChange(editorState: EditorState, editor: LexicalEditor) {
    latestEditorStateRef.current = editorState;
    latestEditorRef.current = editor;
    //editorState.read(() => {
      // You can inspect the editor state here, e.g. save to DB
      // const root = $getRoot();
      // console.log(root.getTextContent());
    //});
  }

  async function handleSave() {
    if (!latestEditorStateRef.current) return;

    setIsSaving(true);
    try {
      // Get HTML
      const editorState = latestEditorStateRef.current;
      const editor = latestEditorRef.current;
      editorState.read(() => {
        setHtml($generateHtmlFromNodes(editor as LexicalEditor));
      });
      //const safeHtml = useMemo(() => DOMPurify.sanitize(html), [html]);
      
      // Save Note
      // TODO

      // Display Note
      setShowEditor(false);

    } finally {
      setIsSaving(false);
    }    
  }

  return (
    <>
      <div className={showEditor ? "space-y-3" : "hidden"}>
        {/* Title + Save */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="flex-1 rounded border px-3 py-2"
          />
          <button
            onClick={handleSave}
            disabled={isSaving || !title.trim()}
            className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          >
            {isSaving ? 'Saving…' : 'Save'}
          </button>
        </div>

        {/* Editor */}
        <LexicalComposer initialConfig={initialConfig}>
          <div className="border rounded p-2">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="min-h-[150px] outline-none" />
              }
              placeholder={<div className="text-gray-400">Start typing…</div>}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <OnChangePlugin onChange={handleChange} />
          </div>
        </LexicalComposer>
      </div>

      {/* Viewer */}
      <div className={showEditor ? "hidden" : "space-y-3"}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            type="button"
            onClick={() => setShowEditor(true)}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Edit
          </button>
        </div>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  );
}
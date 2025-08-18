"use client";

import { useState, useRef, useEffect } from "react";
import { useNote } from "./NoteProvider";
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { $generateHtmlFromNodes } from '@lexical/html';
import { EditorState, LexicalEditor } from 'lexical';
import LoadContentPlugin from "./LoadContentPlugin";
import { createNote } from "./actions";

export default function NoteEditor() {
  const initialConfigRead = {
    namespace: 'ReadEditor', // unique namespace
    theme: {
      // Optional: customize CSS classes for nodes
      paragraph: 'mb-2',
    },
    onError(error: any) {
      console.error(error);
    },
  };
  const initialConfigWrite = {
    namespace: 'WriteEditor', // unique namespace
    theme: {
      // Optional: customize CSS classes for nodes
      paragraph: 'mb-2',
    },
    onError(error: any) {
      console.error(error);
    },
  };
  const { notes, currentNote, setCurrentNote } = useNote();
  const [title, setTitle] = useState(currentNote?.title ?? "");
  const [json, setJson] = useState(currentNote?.noteJson ?? "");
  const [html, setHtml] = useState(currentNote?.noteHtml ?? "");
  const [isSaving, setIsSaving] = useState(false);
  const [showEditor, setShowEditor] = useState(!currentNote);
  // Hold the latest EditorState so the Save button can read it
  const latestEditorStateRef = useRef<EditorState>(null);
  const latestEditorRef = useRef<LexicalEditor>(null);

  useEffect(() => {
    // New note selected in NoteList sibling
    setTitle(currentNote?.title ?? "");
    setJson(currentNote?.noteJson ?? "");
    setHtml(currentNote?.noteHtml ?? "");
    if (currentNote?.id)
      setShowEditor(false);
  }, [currentNote?.id]);

  function handleChange(editorState: EditorState, editor: LexicalEditor) {
    latestEditorStateRef.current = editorState;
    latestEditorRef.current = editor;
  }

  async function handleSave() {
    if (!latestEditorStateRef.current) return;

    setIsSaving(true);
    try {
      // Get HTML
      let jsonString = "";
      let htmlString = "";
      const editorState = latestEditorStateRef.current;
      const editor = latestEditorRef.current;

      editorState.read(() => {
        htmlString = $generateHtmlFromNodes(editor as LexicalEditor);
        setHtml(htmlString);
      });
      jsonString = JSON.stringify(editorState.toJSON());
      setJson(jsonString);
      
      // Save Note
      //const newNote = await createNote(title, jsonString, htmlString);

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
        <LexicalComposer initialConfig={initialConfigWrite}>
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
            <LoadContentPlugin json={json} />
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
        <LexicalComposer initialConfig={initialConfigRead}>
          <div>
            <RichTextPlugin
              contentEditable={<ContentEditable className="outline-none" />}
              placeholder={null}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <LoadContentPlugin json={json} />
          </div>
        </LexicalComposer>
      </div>
    </>
  );
}
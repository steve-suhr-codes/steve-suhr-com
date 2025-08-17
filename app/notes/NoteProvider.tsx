"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type NoteCtx = {
  currentNoteId: string | null;
  setCurrentNoteId: (id: string | null) => void;
};

const Ctx = createContext<NoteCtx | null>(null);

export default function NoteProvider({
  initialNoteId, 
  children
}: {
  initialNoteId?: string | null;
  children: ReactNode;
}) {
  const [currentNoteId, setCurrentNoteId] = useState<string | null>(
    initialNoteId ?? null
  );
  return (
    <Ctx.Provider value={{ currentNoteId, setCurrentNoteId }}>
      {children}
    </Ctx.Provider>
  );
}

export function useNote() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useNote must be used inside <NoteProvider>');
  return v;
}
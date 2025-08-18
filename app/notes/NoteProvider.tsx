"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Prisma, Note as DbNote } from "@prisma/client";

export type NoteRow = Pick<DbNote, 'id' | 'title' | 'noteJson' | 'noteHtml'>;

type NoteCtx = {
  notes: NoteRow[];
  currentNote: NoteRow | null;
  setCurrentNote: (id: NoteRow | null) => void;
};

const Ctx = createContext<NoteCtx | null>(null);

export default function NoteProvider({
  notes, 
  children
}: {
  notes: NoteRow[];
  children: ReactNode;
}) {
  const [currentNote, setCurrentNote] = useState<NoteRow | null>(null);

  return (
    <Ctx.Provider value={{ 
      notes, 
      currentNote, 
      setCurrentNote, 
    }}>
      {children}
    </Ctx.Provider>
  );
}

export function useNote() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useNote must be used inside <NoteProvider>');
  return v;
}